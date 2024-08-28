import type { Metadata } from 'next';

export const metadata: Metadata = {
    description: 'Pagina do Imovel',
    title: 'RealState - Imoveis.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
