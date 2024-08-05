import { forwardRef, useMemo } from 'react';

import {
    BuildingLibraryIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    MapPinIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/solid';

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'ref' | 'className'> & {
    titleId?: string;
    title?: string;
    config: {
        color: 'text-white' | 'text-pretoForte' | 'text-vermelho';
        icon: 'building-library' | 'arrow-left' | 'arrow-right' | 'bars-3' | 'x-icon' | 'map-pin';
        size?: 'size-pequeno' | 'size-medio';
        customClassName?: string;
    };
};

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = ({ config, ...props }, ref) => {
    const { customClassName, color, icon, size } = useMemo(() => config, [config]);

    return (
        <>
            {icon === 'building-library' && (
                <BuildingLibraryIcon
                    data-testid="logo"
                    className={`${color}  ${size} w-[2rem] ${customClassName}`}
                    ref={ref}
                    {...props}
                />
            )}

            {icon === 'arrow-right' && (
                <ArrowRightIcon className={`${color}  ${size} w-[2rem] ${customClassName}`} ref={ref} {...props} />
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
        </>
    );
};

export default forwardRef(Icon);
