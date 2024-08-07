'use client';

import React from 'react';
import DescriptionRightSide from './components/DescriptionRightSide';
import DescriptionLeftSide from './components/DescriptionLeftSide';

export interface DescriptionProps {
    providers?: {
        valorParcela: React.ReactNode;
        diferenciais: React.ReactNode;
        descricao: React.ReactNode;
        endereco: React.ReactNode;
        telefone: React.ReactNode;
        status: React.ReactNode;
        logo: React.ReactNode;
    };
}

const Description: React.FC<DescriptionProps> = ({ providers }) => (
    <div className="container max-w-[1080px] mx-auto py-medio px-medio xl:px-[0] flex flex-col items-center gap-grande lg:gap-[0] md:flex-row lg:justify-between relative">
        <DescriptionLeftSide
            providers={{
                diferenciais: providers?.diferenciais,
                descricao: providers?.descricao,
                endereco: providers?.endereco,
            }}
        />
        <DescriptionRightSide
            providers={{
                valorParcela: providers?.valorParcela,
                telefone: providers?.telefone,
                status: providers?.status,
                logo: providers?.logo,
            }}
        />
    </div>
);

export default Description;
