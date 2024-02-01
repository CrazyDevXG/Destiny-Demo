

export const imageLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_IMG_LOADER}/${src}?w=${width}&q=${quality || 80}`
  }