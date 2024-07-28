import { Suspense } from 'react';
import Fotos from '../../components/organism/Fotos/Fotos';

async function getFotos() {
    const req = await fetch('/api');
    const data = await req.json();

    return data;
}

export default async function GaleriaPrincipal() {
    const loadFotos = await getFotos();

    console.log(loadFotos);

    return (
        <>
            <Fotos fotos={[]} />
        </>
    );
}
