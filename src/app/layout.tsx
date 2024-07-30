import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import './globals.css';

const nunito_sans = Nunito_Sans({
    variable: '--font-nunito-sans',
    subsets: ['latin'],
    weight: ['300', '400', '700', '800', '900'],
    fallback: ['arial'],
});

export const metadata: Metadata = {
    description: 'LandingPage utilizando NextJS + Tailwind.',
    title: 'RealState - LandingPage.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={nunito_sans.className}>{children}</body>
        </html>
    );
}
