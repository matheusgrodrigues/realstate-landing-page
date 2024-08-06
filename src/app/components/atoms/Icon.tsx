import { forwardRef, useMemo } from 'react';

import {
    BuildingLibraryIcon,
    RectangleGroupIcon,
    Square3Stack3DIcon,
    PuzzlePieceIcon,
    ArrowRightIcon,
    HomeModernIcon,
    ArrowLeftIcon,
    MapPinIcon,
    Bars3Icon,
    XMarkIcon,
    TruckIcon,
} from '@heroicons/react/24/solid';

type Color = 'text-pretoForte' | 'text-vermelho' | 'text-white';

type Icon =
    | 'square-3-stack-3d'
    | 'building-library'
    | 'retangle-group'
    | 'puzzle-piece'
    | 'home-modern'
    | 'arrow-right'
    | 'arrow-left'
    | 'map-pin'
    | 'bars-3'
    | 'x-icon'
    | 'truck';

type Size = 'size-pequeno' | 'size-medio';

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'ref' | 'className'> & {
    titleId?: string;
    title?: string;
    config: {
        color: Color;
        icon: Icon;
        size?: Size;
        customClassName?: string;
    };
};

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = ({ config, ...props }, ref) => {
    const { customClassName, color, icon, size } = useMemo(() => config, [config]);

    return (
        <>
            {icon === 'square-3-stack-3d' && (
                <Square3Stack3DIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'building-library' && (
                <BuildingLibraryIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'retangle-group' && (
                <RectangleGroupIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'puzzle-piece' && (
                <PuzzlePieceIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'arrow-right' && (
                <ArrowRightIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'home-modern' && (
                <HomeModernIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'arrow-left' && (
                <ArrowLeftIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'map-pin' && (
                <MapPinIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'x-icon' && (
                <XMarkIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'bars-3' && (
                <Bars3Icon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'truck' && (
                <TruckIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}
        </>
    );
};

export default forwardRef(Icon);
