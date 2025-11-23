import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-2xl font-semibold text-green-800 mb-6">
        Gallery
      </h2>

      {/* Responsive Grid Container */}
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-md shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
            onClick={() => setIndex(idx)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover rounded-md"
              loading="lazy"
            />
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              Actual Image
            </span>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </section>
  );
}
