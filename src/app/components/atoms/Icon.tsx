import { forwardRef } from 'react';

import { BuildingLibraryIcon, ArrowRightIcon, ArrowLeftIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'ref' | 'className'> & {
    titleId?: string;
    title?: string;
    config: {
        icon: 'building-library' | 'arrow-left' | 'arrow-right' | 'bars-3' | 'x-icon';
        customClassName?: string;
    };
};

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = ({ config, ...props }, ref) => {
    const { customClassName, icon } = config;

    return (
        <>
            {icon === 'building-library' && (
                <BuildingLibraryIcon
                    data-testid="logo"
                    className={`text-white w-[2rem] ${customClassName}`}
                    ref={ref}
                    {...props}
                />
            )}

            {icon === 'arrow-right' && (
                <ArrowRightIcon className={`text-white w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'arrow-left' && (
                <ArrowLeftIcon className={`text-white w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'x-icon' && (
                <XMarkIcon className={`text-white w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}

            {icon === 'bars-3' && (
                <Bars3Icon className={`text-white w-[2rem] ${customClassName}`} ref={ref} {...props} />
            )}
        </>
    );
};

export default forwardRef(Icon);
