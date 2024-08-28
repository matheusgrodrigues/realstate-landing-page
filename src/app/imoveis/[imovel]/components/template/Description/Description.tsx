'use client';

import React from 'react';
import DescriptionRightSide from './components/DescriptionRightSide';
import DescriptionLeftSide from './components/DescriptionLeftSide';

const Description: React.FC = () => (
    <div className="container max-w-[1080px] mx-auto py-medio px-medio xl:px-[0] flex flex-col items-center gap-grande lg:gap-[0] md:flex-row lg:justify-between relative">
        <DescriptionLeftSide />
        <DescriptionRightSide />
    </div>
);

export default Description;
