import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontWeight: {
                extraBold: '800',
                regular: '400',
                light: '300',
                black: '900',
                bold: '700',
            },
            fontSize: {
                pequeno2: '0.75rem',
                pequeno: '0.875rem',
                grande: '1.65rem',
                normal: '1rem',
                medio: '1.12rem',
            },
            spacing: {
                extraMedio: '2rem',
                pequeno: '0.75rem',
                grande: '2.5rem',
                medio: '1.25rem',
            },
            colors: {
                pretoForte: '#151a21',
                azulForte2: '#284eaf',
                azulForte: '#0c1e4b',
                azulFeio: '#03f5ff',
                vermelho: '#980a08',
                white2: '#f4f4f4',
                white: '#ffffff',
                preto: '#4c4d4f',
                cinza: '#a0a0a0',
                azul: '#284eaf',
                bege: '#818386',
            },
        },
    },
    plugins: [],
};
export default config;
