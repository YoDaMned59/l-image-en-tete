# Polices personnalisées

Ce dossier est destiné à accueillir les fichiers de polices personnalisées du site.

## Polices requises

Pour utiliser les polices personnalisées, placez les fichiers suivants dans ce dossier :

### Picky Retro (pour les titres)
- `PickyRetro-Regular.woff2` (recommandé)
- `PickyRetro-Regular.woff` (fallback)

### Gotham Black (pour les sous-titres)
- `Gotham-Black.woff2` (recommandé)
- `Gotham-Black.woff` (fallback)

## Activation

Une fois les fichiers de polices placés dans ce dossier, décommentez les déclarations `@font-face` dans le fichier `src/styles/_fonts.scss`.

## Alternatives

Si vous n'avez pas les fichiers de polices personnalisées, le site utilisera automatiquement des alternatives de Google Fonts :
- **Picky Retro** → Bungee ou Fredoka One
- **Gotham Black** → Montserrat Black ou Inter Black




