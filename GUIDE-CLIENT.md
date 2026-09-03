# Guide pour modifier le site

Ce fichier s’adresse à Mathilde. Aucune compétence de développeur n’est nécessaire.

Deux fichiers / dossiers suffisent :

| Vous voulez… | Ouvrir… |
|---|---|
| Changer un texte, un tarif, un téléphone, un horaire | `src/data/data.js` |
| Changer une photo ou le logo | `public/images/` (remplacer le fichier **sans changer son nom**) |
| Changer l’image de partage Facebook / Instagram | `public/og-image.webp` |

Après une modification, le site en ligne se met à jour tout seul si le fichier est enregistré sur GitHub (environ 1 minute). Sinon, envoyez simplement le fichier ou le nouveau texte à Seb.

---

## 1. Changer une image

Ouvrez le dossier `public/images/`. Chaque fichier correspond à un emplacement du site :

| Fichier | Où ça s’affiche |
|---|---|
| `logo.webp` | Logo en haut de toutes les pages |
| `photo-mathilde.webp` | Photo sur la page À propos |
| `accueil-hero.webp` | Grande image de fond en haut de l’accueil |
| `accueil-bilan.webp` | Photo du bloc « Bilan » sur l’accueil |
| `accueil-atelier.webp` | Photo du bloc « Ateliers » sur l’accueil |
| `atelier-sketchnote.webp` | Exemple de sketchnote (page Ateliers) |
| `atelier-6-bricks.webp` | Photo de l’atelier 6 Bricks |
| `fond-motif.webp` | Motif de fond du site |

**Important :** le nouveau fichier doit avoir **exactement le même nom**, y compris `.webp`.

Exemple : pour changer le logo, votre fichier doit s’appeler `logo.webp`, pas `mon-nouveau-logo.jpg`.

Si votre photo est un `.jpg` ou un `.png`, envoyez-la à Seb : il la convertira au bon format.

Sur GitHub : ouvrez `public/images`, cliquez sur **Add file → Upload files**, déposez le fichier avec le **même nom**, puis validez. GitHub remplace l’ancienne version.

---

## 2. Changer un texte

Ouvrez `src/data/data.js`. Les blocs sont commentés en français (ACCUEIL, TARIFS, CONTACT…).

### Règles à respecter

1. Ne modifiez **que** le texte entre guillemets `"comme ceci"`.
2. Ne supprimez **pas** les virgules `,` à la fin des lignes.
3. Ne supprimez **pas** les crochets `[ ]` ni les accolades `{ }`.
4. Pour mettre un mot en gras : `**mot**`.

### Exemples

Changer le téléphone :

```
telephone: "07.81.17.23.25",
```

devient par exemple :

```
telephone: "06.12.34.56.78",
```

Changer un tarif :

```
tarif: "70 € / 55 € à domicile (CESU possible)",
```

Changer une phrase d’accueil : cherchez la section `PAGE ACCUEIL`, puis `hero` → `description`.

Sur GitHub : ouvrez le fichier, cliquez sur le crayon, changez le texte, puis **Commit changes**.

---

## 3. Où trouver quoi dans data.js

| Vous cherchez… | Section dans le fichier |
|---|---|
| Nom du site, slogan | INFORMATIONS GÉNÉRALES |
| Téléphone, e-mail, adresse, horaires | COORDONNÉES |
| Textes de l’accueil | PAGE ACCUEIL |
| Parcours, philosophie, méthodes | PAGE À PROPOS |
| Formulaire et réseaux sociaux | PAGE CONTACT |
| Titres du menu | MENU ET PIED DE PAGE |
| Tarifs bilan / ateliers / Reiki | LISTE DES SERVICES |
| Texte long du bilan | DÉTAILS DES SERVICES → bilan |
| Texte des ateliers et 6 Bricks | DÉTAILS DES SERVICES → atelier |
| Pack 5 séances | `pack` dans le détail du bilan |
| Titres Google (SEO) | les lignes `seo` de chaque page |
| Mentions légales, CGV | à la fin du fichier |

---

## 4. Si quelque chose casse

Le plus fréquent : une virgule oubliée ou un guillemet en trop.

- Annulez la dernière modification (sur GitHub : historique du fichier → restore).
- Ou envoyez une capture d’écran à Seb.

En cas de doute, le plus simple reste d’envoyer le nouveau texte ou la nouvelle photo par e-mail : Seb l’intègre.
