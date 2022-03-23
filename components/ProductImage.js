import Image from "next/image";
import { Swiper, SwiperSlide, Navigation, Thumbs } from "./Slider";

export default function ProductImage({ gallery, thumbsSwiper }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
      >
        {gallery?.map((item) => (
          <SwiperSlide
            key={`product-gallery-${item.id}`}
            className="flex justify-center items-center"
          >
            <Image
              src={item.imgUrl}
              alt={`Product gallery ${item.id}`}
              width={450}
              height={450}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
