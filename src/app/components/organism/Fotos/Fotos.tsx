import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

export type Foto = {
    legenda: string;
    src: StaticImageData;
};

interface FotosProps {
    fotos: Foto[];
}

const Fotos: React.NamedExoticComponent<FotosProps> = memo(function Fotos({ fotos }) {
    return (
        <div data-testid="component-fotos" className="size-full relative">
            <div className="flex justify-center items-center size-full">
                {fotos.map((foto, key) => (
                    <div className="h-full relative w-full md:min-w-[486px] md:max-w-[486px]" key={key}>
                        <Image
                            data-testid="component-fotos-foto"
                            priority
                            quality={100}
                            sizes="(max-width: 750px) 100vw, 486px"
                            fill
                            src={foto.src}
                            alt={foto.legenda}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center size-full px-extraMedio absolute top-[0]">
                <Button
                    data-testid="component-fotos-arrow-left"
                    config={{
                        customClassName: 'size-[3.5rem] bg-white rounded-full p-pequeno',
                    }}
                >
                    <Icon
                        config={{
                            icon: 'arrow-left',
                        }}
                    />
                </Button>

                <Button
                    data-testid="component-fotos-arrow-right"
                    config={{
                        customClassName: 'size-[3.5rem] bg-white rounded-full p-pequeno',
                    }}
                >
                    <Icon
                        config={{
                            icon: 'arrow-right',
                        }}
                    />
                </Button>
            </div>
        </div>
    );
});

Fotos.displayName = 'Fotos';

export default Fotos;
