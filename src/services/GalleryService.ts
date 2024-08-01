import GallerySchema from '@/schema/GallerySchema';

type GalleryName = 'main-gallery';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

const GalleryService = {
    getGallery: async (endpoint: string, galleryName: GalleryName): Promise<GallerySchema[]> => {
        const res = await fetch(`${domain}${endpoint}${galleryName}`);
        const { data } = await res.json();

        return data;
    },
};

export default GalleryService;
