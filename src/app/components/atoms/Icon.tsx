import { forwardRef, useCallback, useMemo } from 'react';

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

export type IconType =
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
        icon: IconType;
        size?: Size;
        customClassName?: string;
    };
};

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = ({ config, ...props }, ref) => {
    const { customClassName, color, icon, size } = useMemo(() => config, [config]);

    const getSize = useCallback(() => {
        if (size === 'size-pequeno') {
            return 'min-w-[12px] max-w-[12px]';
        } else if (size === 'size-medio') {
            return 'min-w-[20px] max-w-[20px]';
        }

        return 'min-w-[32px] max-w-[32px]';
    }, [size]);

    return (
        <>
            {icon === 'square-3-stack-3d' && (
                <Square3Stack3DIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'building-library' && (
                <BuildingLibraryIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'retangle-group' && (
                <RectangleGroupIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'puzzle-piece' && (
                <PuzzlePieceIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'arrow-right' && (
                <ArrowRightIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'home-modern' && (
                <HomeModernIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'arrow-left' && (
                <ArrowLeftIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'map-pin' && (
                <MapPinIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'x-icon' && (
                <XMarkIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'bars-3' && (
                <Bars3Icon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'truck' && (
                <TruckIcon className={`${color} ${getSize()} ${customClassName}`} ref={ref} {...props} />
            )}
        </>
    );
};

export default forwardRef(Icon);
