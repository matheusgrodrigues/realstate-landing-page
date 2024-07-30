type BootName = '*' | 'Googlebot' | 'Applebot';

type Robots = {
    rules:
        | {
              userAgent?: BootName | BootName[];
              allow?: string | string[];
              disallow?: string | string[];
              crawlDelay?: number;
          }
        | Array<{
              userAgent: BootName | BootName[];
              allow?: string | string[];
              disallow?: string | string[];
              crawlDelay?: number;
          }>;
    sitemap?: string | string[];
    host?: string;
};

export default function robots(): Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
        ],
        sitemap: `${process.env.DOMAIN}/sitemap.xml`,
    };
}
