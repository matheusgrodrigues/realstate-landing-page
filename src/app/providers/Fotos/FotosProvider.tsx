import Fotos from '@/app/components/organism/Fotos';
import React, { use } from 'react';

async function fetchFotos() {
    const res = await fetch('http://localhost:3000/api');
    const data = await res.json();
    return data;
}

const FotosProvider = async () => {
    const fotos = await fetchFotos();

    return <Fotos fotos={fotos} />;
};

export default FotosProvider;
