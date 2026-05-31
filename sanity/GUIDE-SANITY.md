# Guide d'intégration Sanity CMS · CIAS de la CCSUD

## Ce que Sanity va permettre

| Fonctionnalité | Description |
|---|---|
| **Actualités** | Publier, archiver, supprimer des articles avec photos et pièces jointes |
| **Projets** | Ajouter des projets avec documents PDF téléchargeables |
| **Textes du site** | Modifier les textes, coordonnées, horaires depuis un tableau de bord |

---

## Étapes pour activer Sanity (environ 1h)

### 1. Créer un compte et un projet Sanity

1. Aller sur [sanity.io](https://sanity.io) → "Start for free"
2. Créer un nouveau projet → nommer "cias-ccsud"
3. Choisir le dataset "production"
4. Copier le **Project ID** affiché (ex: `abc12345`)

### 2. Installer le Studio Sanity

```bash
cd sanity/
npm install -g sanity
npm install
```

Puis ouvrir `sanity.config.js` et remplacer `VOTRE_PROJECT_ID` par votre vraie valeur.

### 3. Lancer le Studio en local

```bash
sanity start
# → Ouvre http://localhost:3333
```

### 4. Déployer le Studio (interface admin en ligne)

```bash
sanity deploy
# → Choisir un nom : ex. "admin-cias"
# → URL : https://admin-cias.sanity.studio
```

### 5. Connecter le site aux données Sanity

Remplacer dans chaque page HTML le code localStorage par un appel à l'API Sanity :

```javascript
// Exemple pour actualites.html
const SANITY_PROJECT = 'VOTRE_PROJECT_ID';
const SANITY_DATASET = 'production';
const query = encodeURIComponent('*[_type=="actualite" && statut=="publie"] | order(datePublication desc)');
const url = `https://${SANITY_PROJECT}.api.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${query}`;

fetch(url)
  .then(r => r.json())
  .then(data => {
    // data.result contient les articles
    renderAll(data.result);
  });
```

---

## Structure des données créées

### Actualité (`actualite`)
- `titre` — Titre de l'article
- `slug` — URL de l'article
- `statut` — publie / archive / brouillon
- `datePublication` — Date de publication
- `categorie` — Insertion, Santé, Logement...
- `imageUne` — Photo principale
- `resume` — Extrait (max 280 caractères)
- `contenu` — Contenu rich text
- `documentJoint` — PDF optionnel

### Projet (`projet`)
- `titre`, `slug`, `statut`
- `axe` — Axe d'intervention
- `commune` — Commune(s) concernée(s)
- `image`, `description`, `descriptionComplete`
- `documents` — Array de PDFs téléchargeables
- `dateDebut`, `dateFin`, `budget`, `partenaires`

### Contenu éditorial (`contenuSite`)
- Singleton (un seul document)
- `hero` — Titre & sous-titre de la page d'accueil
- `mission` — Texte de la mission
- `citation` — Bloc citation du président
- `contact` — Téléphone, e-mail, adresses, horaires
- `aPropos` — Textes de la page L'ECIAS
- `communes` — Descriptions des 4 communes

---

## Tarifs Sanity

- **Gratuit** : 3 utilisateurs, 5 Go stockage, 100K requêtes/mois → suffisant pour démarrer
- **Growth** : ~99$/mois si le site dépasse ces limites

---

## Fichiers créés

```
sanity/
├── sanity.config.js        ← Configuration principale
├── schemas/
│   ├── actualite.js        ← Schéma des actualités
│   ├── projet.js           ← Schéma des projets
│   └── contenuSite.js      ← Schéma du contenu éditorial
└── GUIDE-SANITY.md         ← Ce guide
```
