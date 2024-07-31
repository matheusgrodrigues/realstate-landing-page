import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'nunito-sans': ['var(--font-nunito-sans)'],
        },
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
            transparent: 'transparent',
            pretoForte: '#151a21',
            azulForte2: '#284eaf',
            azulForte: '#0c1e4b',
            azulFeio: '#03f5ff',
            vermelho: '#980a08',
            white2: '#f4f4f4',
            white: '#ffffff',
            preto2: '#4c4d4f',
            preto: '#000000',
            cinza: '#a0a0a0',
            azul: '#284eaf',
            bege: '#818386',
        },

        extend: {
            animation: {
                slideOut: 'slideOut 0.3s linear forwards',
                slideIn: 'slideIn 0.3s linear forwards',
            },
            keyframes: {
                slideOut: {
                    '0%': {
                        transform: 'translateX(0%)',
                    },
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
                slideIn: {
                    '0%': {
                        transform: 'translateX(100%)',
                    },
                    '100%': {
                        transform: 'translateX(0%)',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
