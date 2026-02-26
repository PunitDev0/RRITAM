const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function generateSrcSet(src, width, height) {
  return breakpoints.map((breakpoint) => ({
    src,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  }));
}

const photos = [
  { src: "/images/original_1.jpg", alt: "Real estate property entrance", width: 800, height: 600 },
  { src: "/images/original_2.jpg", alt: "Real estate flags at plot", width: 800, height: 600 },
  { src: "/images/original_3.jpg", alt: "Wide view of real estate plot", width: 800, height: 600 },
  { src: "/images/original_4.jpg", alt: "White event tent at plot", width: 800, height: 600 },
  { src: "/images/original_5.jpg", alt: "Property entrance side view", width: 800, height: 600 },
].map(({ src, width, height, ...rest }) => ({
  src,
  width,
  height,
  srcSet: generateSrcSet(src, width, height),
  ...rest,
}));

export default photos;
