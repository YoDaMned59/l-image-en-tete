/** Met en gras le texte entouré de **comme ceci**. */
export function formatTexte(texte) {
  if (!texte) {
    return texte;
  }

  return String(texte)
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
}
