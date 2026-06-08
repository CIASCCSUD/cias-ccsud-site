/* ===================================================================
   Client Sanity (lecture seule) · CIAS de la CCSUD
   Lit le contenu publié par le client depuis le Studio Sanity.
   Dataset public en lecture — aucune clé requise.
   =================================================================== */
(function (global) {
  'use strict';

  var PROJECT_ID = 'l4gh628p';
  var DATASET = 'production';
  var API_VERSION = 'v2023-05-03';

  var API_BASE = 'https://' + PROJECT_ID + '.apicdn.sanity.io/' + API_VERSION + '/data/query/' + DATASET;
  var IMG_BASE = 'https://cdn.sanity.io/images/' + PROJECT_ID + '/' + DATASET + '/';

  /* Exécute une requête GROQ et renvoie une Promise du résultat. */
  function query(groq, params) {
    var url = API_BASE + '?query=' + encodeURIComponent(groq);
    if (params) {
      Object.keys(params).forEach(function (k) {
        url += '&$' + k + '=' + encodeURIComponent(JSON.stringify(params[k]));
      });
    }
    return fetch(url, { headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('Sanity ' + r.status);
        return r.json();
      })
      .then(function (j) { return j.result; });
  }

  /* Transforme une référence d'image Sanity en URL CDN.
     ref ex: "image-abc123-1200x800-jpg" + options {w,h,fit} */
  function imageUrl(source, opts) {
    if (!source) return '';
    var ref = source.asset ? source.asset._ref : (source._ref || source);
    if (!ref || typeof ref !== 'string') return '';
    var parts = ref.replace('image-', '').split('-');
    var ext = parts.pop();
    var dims = parts.pop();
    var id = parts.join('-');
    var url = IMG_BASE + id + '-' + dims + '.' + ext;
    opts = opts || {};
    var q = [];
    if (opts.w) q.push('w=' + opts.w);
    if (opts.h) q.push('h=' + opts.h);
    q.push('fit=' + (opts.fit || 'crop'));
    q.push('auto=format');
    return url + '?' + q.join('&');
  }

  /* Transforme une URL de fichier (PDF) Sanity en URL CDN. */
  function fileUrl(source) {
    if (!source) return '';
    var ref = source.asset ? source.asset._ref : (source._ref || source);
    if (!ref || typeof ref !== 'string') return '';
    var parts = ref.replace('file-', '').split('-');
    var ext = parts.pop();
    var id = parts.join('-');
    return 'https://cdn.sanity.io/files/' + PROJECT_ID + '/' + DATASET + '/' + id + '.' + ext;
  }

  /* Échappe le HTML pour éviter toute injection depuis le contenu CMS. */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Convertit le Portable Text de Sanity en HTML simple (paragraphes,
     titres, listes, gras/italique, images). */
  function portableTextToHtml(blocks) {
    if (!Array.isArray(blocks)) return '';
    var html = '';
    var listBuffer = null; // {type, items:[]}

    function flushList() {
      if (!listBuffer) return;
      var tag = listBuffer.type === 'number' ? 'ol' : 'ul';
      html += '<' + tag + '>' + listBuffer.items.join('') + '</' + tag + '>';
      listBuffer = null;
    }

    function spansToHtml(block) {
      if (!block.children) return '';
      return block.children.map(function (child) {
        var t = esc(child.text || '');
        var marks = child.marks || [];
        if (marks.indexOf('strong') !== -1) t = '<strong>' + t + '</strong>';
        if (marks.indexOf('em') !== -1) t = '<em>' + t + '</em>';
        return t;
      }).join('');
    }

    blocks.forEach(function (block) {
      if (block._type === 'image') {
        flushList();
        var src = imageUrl(block, { w: 1000 });
        if (src) html += '<img src="' + esc(src) + '" alt="' + esc(block.alt || '') + '" loading="lazy" style="width:100%;border-radius:12px;margin:1.5rem 0;" />';
        return;
      }
      if (block._type !== 'block') return;
      var style = block.style || 'normal';
      var listItem = block.listItem; // 'bullet' | 'number'

      if (listItem) {
        var type = listItem === 'number' ? 'number' : 'bullet';
        if (!listBuffer || listBuffer.type !== type) { flushList(); listBuffer = { type: type, items: [] }; }
        listBuffer.items.push('<li>' + spansToHtml(block) + '</li>');
        return;
      }
      flushList();
      var inner = spansToHtml(block);
      if (!inner) return;
      if (style === 'h1' || style === 'h2') html += '<h2>' + inner + '</h2>';
      else if (style === 'h3') html += '<h3>' + inner + '</h3>';
      else if (style === 'h4') html += '<h4>' + inner + '</h4>';
      else if (style === 'blockquote') html += '<blockquote>' + inner + '</blockquote>';
      else html += '<p>' + inner + '</p>';
    });
    flushList();
    return html;
  }

  global.CIASSanity = {
    query: query,
    imageUrl: imageUrl,
    fileUrl: fileUrl,
    esc: esc,
    portableTextToHtml: portableTextToHtml
  };
})(window);
