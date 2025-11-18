"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
    images: string[];
    description: string;
};

export default function GalleryCarousel({ images, description }: Props) {
    const [hasFirstImageLoaded, setHasFirstImageLoaded] = useState(false);

    useEffect(() => {
        setHasFirstImageLoaded(false);
    }, [images]);

    const slides = useMemo(
        () =>
            images.map((url, index) => (
                <SwiperSlide key={`${url}-${index}`}>
                    <div className="flex h-[360px] items-center justify-center p-6 sm:h-[420px]">
                        <Image
                            width={500}
                            height={500}
                            sizes="(max-width: 640px) 80vw, 500px"
                            src={url}
                            alt={description}
                            className="h-full w-auto max-w-full rounded-3xl border border-rose-100 object-contain shadow-lg"
                            priority={index === 0}
                            onLoadingComplete={() => {
                                if (index === 0) {
                                    setHasFirstImageLoaded(true);
                                }
                            }}
                        />
                    </div>
                </SwiperSlide>
            )),
        [description, images]
    );

    if (!images.length) {
        return (
            <div className="flex h-64 items-center justify-center rounded-[32px] border border-rose-100 bg-white/70 text-sm text-slate-500">
                {description}
            </div>
        );
    }

    return (
        <div className="relative">
            {!hasFirstImageLoaded && (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-[32px] bg-white/80">
                    <ClipLoader color="#f43f5e" />
                </div>
            )}
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation
                modules={[Pagination, Navigation]}
                className="rounded-[32px] border border-rose-100 bg-white/80 shadow-xl"
            >
                {slides}
            </Swiper>
        </div>
    );
}
