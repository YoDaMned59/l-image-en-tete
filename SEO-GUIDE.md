# 📖 Guide SEO Simple - Comment modifier les meta tags

Ce guide explique comment modifier facilement les titres et descriptions de vos pages pour améliorer le référencement.

## 🎯 Qu'est-ce que c'est ?

Les **meta tags** sont des informations invisibles pour les visiteurs mais importantes pour Google. Elles apparaissent dans :
- Les résultats de recherche Google (titre + description)
- Les onglets du navigateur (titre)
- Les partages sur Facebook/LinkedIn

## ✏️ Comment modifier les meta tags d'une page ?

### Exemple : Modifier la page d'accueil

Ouvrez le fichier `src/pages/Home.jsx` et cherchez cette partie :

```jsx
<SEO 
  title="Accueil"
  description="Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive. Première rencontre gratuite."
/>
```

**Pour modifier :**
1. Changez `title="Accueil"` par le titre que vous voulez (ex: `title="Coaching scolaire Richebourg"`)
2. Changez `description="..."` par votre description (150-160 caractères max recommandé)

### Exemple : Modifier une page de service

Ouvrez `src/pages/BilanPage.jsx` et cherchez :

```jsx
<SEO 
  title={`${service.titre} - Bilan et suivi individuel`}
  description={`${service.pourQui}. Bilan métacognitif et suivi individuel pour enfants et adolescents. Format : ${service.format}. Tarif : ${service.tarif}.`}
/>
```

**Astuce :** Ici, on utilise `${service.titre}` pour récupérer automatiquement le titre depuis `data.js`. Vous pouvez :
- Garder cette méthode (recommandé)
- Ou mettre un texte fixe : `title="Mon titre personnalisé"`

## 📝 Conseils pour écrire de bonnes descriptions

✅ **À FAIRE :**
- 150-160 caractères maximum
- Inclure des mots-clés importants (ex: "coaching scolaire", "Richebourg")
- Être clair et accrocheur
- Mentionner un avantage (ex: "Première rencontre gratuite")

❌ **À ÉVITER :**
- Descriptions trop longues (Google les coupe)
- Répéter le même texte partout
- Oublier les mots-clés importants

## 🔧 Fichiers importants créés

### 1. `src/components/SEO.jsx`
Le composant qui gère les meta tags. **Vous n'avez normalement pas besoin de le modifier.**

### 2. `public/robots.txt`
Indique à Google quelles pages indexer. **Pas besoin de le modifier sauf si vous ajoutez une nouvelle section.**

### 3. `public/sitemap.xml`
Liste toutes les pages importantes. **À mettre à jour si vous ajoutez une nouvelle page importante.**

## 🆕 Ajouter une nouvelle page

Si vous créez une nouvelle page (ex: `src/pages/MaNouvellePage.jsx`) :

1. **Ajoutez le composant SEO en haut :**
```jsx
import SEO from '../components/SEO';

// Dans votre composant :
return (
  <>
    <SEO 
      title="Titre de ma page"
      description="Description de ma page pour Google (150 caractères max)"
    />
    {/* Votre contenu */}
  </>
);
```

2. **Ajoutez la page dans `public/sitemap.xml` :**
```xml
<url>
  <loc>https://yodamned59.github.io/l-image-en-tete/ma-nouvelle-page</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## 🚀 Testez vos modifications

1. Lancez le site : `npm run dev`
2. Ouvrez la page dans votre navigateur
3. Faites clic droit → "Afficher le code source"
4. Cherchez `<title>` et `<meta name="description">` pour vérifier

## ❓ Questions fréquentes

**Q : Dois-je modifier toutes les pages ?**
R : Non, seulement si vous voulez changer les titres/descriptions. Les valeurs par défaut fonctionnent déjà bien.

**Q : Combien de temps avant que Google voit les changements ?**
R : Quelques jours à quelques semaines. Google met à jour son index régulièrement.

**Q : Puis-je utiliser les mêmes mots-clés partout ?**
R : Non, chaque page doit avoir un titre et une description uniques pour un meilleur référencement.

---

**Besoin d'aide ?** Le code est commenté pour vous aider à comprendre. N'hésitez pas à explorer les fichiers !

