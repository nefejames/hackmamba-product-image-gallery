import Image from "next/image";
import { Swiper, SwiperSlide } from "./Slider";

const galleryCarouselBreakpoints = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 3,
  },
  800: {
    slidesPerView: 4,
  },
};

export default function CarouselThumbs({ gallery, setThumbsSwiper }) {
  return (
    <div className="max-w-md mt-5 lg:mt-8 mx-auto relative lg:pb-2">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        watchSlidesProgress={true}
        freeMode={true}
        observer={true}
        observeParents={true}
        breakpoints={galleryCarouselBreakpoints}
      >
        {gallery?.map((item) => (
          <SwiperSlide
            key={`product-thumb-gallery-${item.id}`}
            className="flex items-center justify-center cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75"
          >
            <Image
              src={item.imgUrl}
              alt={`Product thumb gallery ${item.id}`}
              width={80}
              height={80}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
