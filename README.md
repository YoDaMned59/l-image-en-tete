# L'Image en Tête

Site de coaching scolaire et d'accompagnement dans les apprentissages.

**Pour modifier les textes et les images (sans coder)** : voir [GUIDE-CLIENT.md](GUIDE-CLIENT.md).

Stack : **React**, **JavaScript**, **SCSS**, **Vite**, **React Router**.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (souvent `http://localhost:5173`).

## Où modifier quoi

| Tu veux… | Fichier |
|---|---|
| Changer un texte, un email, un tarif | `src/data/data.js` (voir [GUIDE-CLIENT.md](GUIDE-CLIENT.md)) |
| Changer une image / le logo | remplacer le fichier dans `public/images/` **sans changer le nom** |
| Image de partage (Facebook, etc.) | `public/og-image.webp` |
| Ajouter une page | créer `src/pages/Nom.jsx`, l'ajouter dans `src/App.jsx` |
| Changer les couleurs / polices | `src/styles/_variables.scss` |
| Changer le header / pied de page | `src/components/Header.jsx`, `src/components/Footer.jsx` |
| SEO (titre, description) | blocs `seo` dans `src/data/data.js` |

## Dossiers

```
src/
  main.jsx              Point d'entrée
  App.jsx               Routes
  data/data.js          Tous les textes du site
  pages/                Une page = un fichier
  components/           Header, footer, SEO, bandeau
  styles/               Charte graphique
public/
  images/               Photos et logo (à remplacer par la cliente)
```
