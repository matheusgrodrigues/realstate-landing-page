import Image from 'next/image';
import { memo } from 'react';

import { SwiperSlide, useSwiper, Swiper } from 'swiper/react';
import 'swiper/css';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

import { GallerySchema } from '@/schema/GallerySchema';

const NextPrevButton: React.FC = () => {
    const swiper = useSwiper();

    return (
        <>
            <Button
                data-testid="component-gallery-arrow-left"
                onClick={() => swiper.slidePrev()}
                config={{
                    customClassName:
                        'size-[3.5rem] bg-white rounded-full p-pequeno absolute left-medio top-[45%] z-[9999]',
                }}
            >
                <Icon
                    config={{
                        color: 'text-pretoForte',
                        icon: 'arrow-left',
                    }}
                />
            </Button>

            <Button
                data-testid="component-gallery-arrow-right"
                onClick={() => swiper.slideNext()}
                config={{
                    customClassName:
                        'size-[3.5rem] bg-white rounded-full p-pequeno absolute right-medio top-[45%] z-[9999]',
                }}
            >
                <Icon
                    config={{
                        color: 'text-pretoForte',
                        icon: 'arrow-right',
                    }}
                />
            </Button>
        </>
    );
};

interface GalleryProps {
    gallery: GallerySchema | undefined;
}

const Gallery: React.NamedExoticComponent<GalleryProps> = memo(function Gallery({ gallery }) {
    const images = gallery ? gallery.attributes.images.data : [];

    return (
        <Swiper
            data-testid="component-gallery"
            className="flex justify-center items-center relative size-full"
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                },
            }}
        >
            {images.length > 0 &&
                images.map((image, key) => (
                    <SwiperSlide key={key}>
                        <Image
                            data-testid="component-gallery-image"
                            priority
                            quality={100}
                            sizes="(max-width: 750px) 100vw, 486px"
                            fill
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                            alt={`${image.attributes.caption}`}
                        />
                    </SwiperSlide>
                ))}

            <NextPrevButton />
        </Swiper>
    );
});

Gallery.displayName = 'Gallery';

export default Gallery;
