import { GallerySchema } from '@/schema/GallerySchema';

type GalleryName = 'mainGallery';

const domain = process.env.DOMAIN;

const GalleryService = {
    getImages: async (galleryName: GalleryName): Promise<GallerySchema[]> => {
        const res = await fetch(`${domain}/api/${galleryName}`);
        const data = await res.json();

        return data;
    },
};

export default GalleryService;
