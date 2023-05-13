"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useStore } from "./State";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {}
interface openState {
    open: false;
}

export default function Gallery({}: Props) {
  const open = useStore((state: openState) => state.open);
  
  const imageUrls = Array.from({ length: 31 }, (_, i) => `/gallery/${i + 1}.jpg`);
  return (
    <>
     <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="z-0"
      >
        {imageUrls.map((url, i)=>(
          <SwiperSlide key={i}>
              <Image width={200} height={200} src={url} alt="photo" className="mx-auto my-5 w-80 h-80 object-contain" priority={true}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
