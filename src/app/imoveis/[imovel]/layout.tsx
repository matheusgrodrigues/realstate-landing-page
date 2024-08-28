import type { Metadata } from 'next';

export const metadata: Metadata = {
    description: 'Pagina do Imovel',
    title: 'RealState - Pagina do Imovel.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
