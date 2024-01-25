

export const imageLoader = ({ src, width, quality }) => {
    return `https://destiny-demo.vercel.app//assets/images${src}?w=${width}&q=${quality || 80}`
  }