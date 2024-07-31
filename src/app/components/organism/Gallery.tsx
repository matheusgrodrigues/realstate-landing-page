import Image from 'next/image';
import { memo } from 'react';

import { SwiperSlide, Swiper, useSwiper } from 'swiper/react';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

import { GallerySchema } from '@/schema/GallerySchema';

import 'swiper/css';

const NextPrevButton: React.FC = () => {
    const swiper = useSwiper();

    return (
        <>
            <Button
                data-testid="component-gallery-arrow-left"
                onClick={() => swiper.slidePrev()}
                config={{
                    customClassName: 'size-[3.5rem] bg-white rounded-full p-pequeno',
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
                    customClassName: 'size-[3.5rem] bg-white rounded-full p-pequeno',
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
            slidesPerView={3}
            className="flex justify-center items-center relative size-full"
        >
            {images.length > 0 &&
                images.map((image, key) => (
                    <SwiperSlide key={key}>
                        <Image
                            width={486}
                            height={683}
                            data-testid="component-gallery-image"
                            priority
                            quality={100}
                            sizes="(max-width: 750px) 100vw, 486px"
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                            alt={`${image.attributes.caption}`}
                        />
                    </SwiperSlide>
                ))}

            <div className="flex justify-between items-center size-full px-extraMedio absolute top-[0] z-[9999]">
                <NextPrevButton />
            </div>
        </Swiper>
    );
});

Gallery.displayName = 'Gallery';

export default Gallery;
