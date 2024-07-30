import { getRoute } from '@/config/routes';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            changeFrequency: 'weekly',
            lastModified: new Date(),
            priority: 1,
            url: `${process.env.DOMAIN}/${getRoute('home').path}`,
        },
    ];
}
