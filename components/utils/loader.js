

export const imageLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/assets/images${src}?w=${width}&q=${quality || 80}`
  }