"use client";
import LightGallery from "lightgallery/react";

// LightGallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import { imagesData } from "@/lib/galleryImgData";

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="mt-28">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid auto-rows-[200px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {imagesData.map((url, idx) => (
          <a
            key={idx}
            href={url}
            data-lg-size="1400-933"
            className={`
              ${idx % 7 === 0 ? "col-span-2 row-span-2" : ""}
              overflow-hidden
            `}
          >
            <Image
              alt={`Gallery ${idx + 1}`}
              src={url}
              width={700}
              height={475}
              className="w-full h-full object-cover rounded shadow"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
