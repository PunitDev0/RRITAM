const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function generateSrcSet(src, width, height) {
  return breakpoints.map((breakpoint) => ({
    src,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  }));
}

const photos = [
  { src: "/images/gal1.jpeg", alt: "Hiking boots", width: 800, height: 600 },
  { src: "/images/gal2.jpg", alt: "Purple petaled flowers near a mountain", width: 800, height: 600 },
  { src: "/images/gal3.jpg", alt: "A person pointing at a beige map", width: 800, height: 600 },
  { src: "/images/gal4.jpg", alt: "Two hikers walking toward a snow-covered mountain", width: 800, height: 600 },
  { src: "/images/gal5.jpg", alt: "A silver and black coffee mug on a brown wooden table", width: 800, height: 600 },
].map(({ src, width, height, ...rest }) => ({
  src,
  width,
  height,
  srcSet: generateSrcSet(src, width, height),
  ...rest,
}));

export default photos;
