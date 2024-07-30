import { getRoute } from './routes';

const menu_links = [
    {
        displayName: 'Inicio',
        path: getRoute('inicio').path,
    },
    {
        displayName: 'Fotos',
        path: getRoute('fotos').path,
    },
    {
        displayName: 'Descrição',
        path: getRoute('descricao').path,
    },
];

export default menu_links;
