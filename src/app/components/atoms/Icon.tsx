import { forwardRef, useMemo } from 'react';

import { BuildingLibraryIcon, ArrowRightIcon, ArrowLeftIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'ref' | 'className'> & {
    titleId?: string;
    title?: string;
    config: {
        color: 'text-white' | 'text-pretoForte';
        icon: 'building-library' | 'arrow-left' | 'arrow-right' | 'bars-3' | 'x-icon';
        customClassName?: string;
    };
};

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = ({ config, ...props }, ref) => {
    const { customClassName, color, icon } = useMemo(() => config, [config]);

    const getColor = useMemo(
        () => (color === 'text-white' ? 'text-white' : color === 'text-pretoForte' ? 'text-pretoForte' : ''),
        [color]
    );

    return (
        <>
            {icon === 'building-library' && (
                <BuildingLibraryIcon
                    data-testid="logo"
                    className={`${getColor} w-[2rem] ${customClassName}`}
                    ref={ref}
                    {...props}
                />
            )}
            {icon === 'arrow-right' && (
                <ArrowRightIcon className={`${getColor} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}
            {icon === 'arrow-left' && (
                <ArrowLeftIcon className={`${getColor} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}
            {icon === 'x-icon' && (
                <XMarkIcon className={`${getColor} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}
            {icon === 'bars-3' && (
                <Bars3Icon className={`${getColor} w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}
        </>
    );
};

export default forwardRef(Icon);
