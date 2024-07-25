type RoutesName = 'inicio' | 'fotos' | 'descricao';

interface RoutesProps {
    displayName: string;
    name: RoutesName;
    path: string;
}
const routes: RoutesProps[] = [
    {
        displayName: 'Inicio',
        name: 'inicio',
        path: '#',
    },
    {
        displayName: 'Fotos',
        name: 'fotos',
        path: '#section-photos',
    },
    {
        displayName: 'Inicio',
        name: 'descricao',
        path: '#section-description',
    },
];

export const getRoute = (name: RoutesName) => routes.filter((route) => route.name === name)[0];
