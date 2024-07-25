'use client';

import Link from 'next/link';
import React, { forwardRef, useCallback, useEffect, useState, useRef, HTMLAttributes } from 'react';
import { BuildingLibraryIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import debounce from './lib/util/debounce';
import { getRoute } from '@/config/routes';

const Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        titleId?: string;
        title?: string;
        icon: 'building-library' | 'bars-3' | 'x-icon';
    } & React.RefAttributes<SVGSVGElement>
> = forwardRef(({ icon, ...props }, ref) => {
    return (
        <>
            {icon === 'building-library' && (
                <BuildingLibraryIcon data-testid="logo" className={`text-white w-[2rem] `} ref={ref} {...props} />
            )}
            {icon === 'x-icon' && <XMarkIcon className={`text-white w-[2rem] `} ref={ref} {...props} />}
            {icon === 'bars-3' && <Bars3Icon className={`text-white w-[2rem] `} ref={ref} {...props} />}
        </>
    );
});

Icon.displayName = 'Icon';

interface ButtonProps
    extends Omit<React.DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
    children: React.ReactNode;
    config: {
        customClassName?: string | undefined;
        variant?: 'default';
        active?: boolean;
    };
}

const Button: React.FC<ButtonProps> = ({ children, config, ...props }) => {
    return (
        <>
            {config.variant === 'default' ? (
                <button
                    className={`${config.active ? 'bg-azulForte text-white' : 'text-cinza hover:text-white bg-white2 hover:bg-cinza ease-in-out duration-200'} font-bold px-extraMedio h-[3rem] rounded-md`}
                    {...props}
                >
                    {children}
                </button>
            ) : (
                <button className={config.customClassName} {...props}>
                    {children}
                </button>
            )}
        </>
    );
};

const menu_links = [
    {
        displayName: 'Inicio',
        path: getRoute('inicio').path,
    },
    {
        displayName: 'Fotos',
        path: getRoute('fotos').path,
    },
    {
        displayName: 'Descrição',
        path: getRoute('descricao').path,
    },
];

type MenuBgColor = 'bg-azulForte' | 'bg-white';

const MenuPrincipal: React.FC = () => {
    const [menuHasOpened, setMenuHasOpened] = useState(false);
    const [menuBgColor, setMenuBgColor] = useState<MenuBgColor>('bg-azulForte');
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isResizing, setIsResizing] = useState(false);

    const menuPrincipalRef = useRef<HTMLElement>(null);

    const menuTextClassNames = `${menuBgColor === 'bg-azulForte' ? 'text-white' : 'text-pretoForte'}`;

    const toggleMenu = useCallback(() => {
        setMenuIsOpen(!menuIsOpen);

        if (!menuHasOpened) {
            setMenuHasOpened(true);
        }
    }, [menuHasOpened, menuIsOpen]);

    useEffect(() => {
        let resizeTimer: NodeJS.Timeout;

        const preventAnimOnResize = () => {
            setIsResizing(true);
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(() => menuIsOpen && setIsResizing(false), 500);
        };

        window.addEventListener('resize', preventAnimOnResize);

        const outsideClick = (e: MouseEvent | TouchEvent) => {
            if (menuPrincipalRef.current && !menuPrincipalRef.current.contains(e.target as Node)) {
                setMenuIsOpen(false);
            }
        };

        document.body.addEventListener('click', outsideClick);

        const toggleColor = () => {
            if (window.scrollY >= 70) {
                setMenuBgColor('bg-white');
            } else {
                setMenuBgColor('bg-azulForte');
            }
        };

        toggleColor();

        const debouncedToggleColor = debounce(toggleColor, 30);

        window.addEventListener('scroll', debouncedToggleColor);

        return () => {
            document.body.removeEventListener('click', outsideClick);
            window.removeEventListener('scroll', debouncedToggleColor);
            window.removeEventListener('resize', preventAnimOnResize);
        };
    }, [menuIsOpen]);

    return (
        <nav
            data-testid="menu-principal"
            className={`${menuBgColor} fixed top-[0] h-[4rem] w-full px-medio ease-linear duration-200 flex items-center`}
            ref={menuPrincipalRef}
        >
            <div className="w-full justify-between items-center flex container mx-auto">
                <div>
                    <Icon
                        data-testid="logo"
                        className={`text-grande font-semiBold w-[2rem] ${menuTextClassNames}`}
                        icon="building-library"
                    />
                </div>

                <div className="items-center flex">
                    <Button
                        config={{
                            customClassName: 'outline-none size-extraMedio md:hidden',
                        }}
                        data-testid="btn-open-menu"
                        onClick={toggleMenu}
                    >
                        {menuIsOpen ? (
                            <Icon className={menuTextClassNames} icon="x-icon" />
                        ) : (
                            <Icon className={menuTextClassNames} icon="bars-3" />
                        )}
                    </Button>

                    <div
                        className={`${menuBgColor} md:bg-transparent absolute md:relative top-[4rem] md:top-auto right-[0] md:right-auto w-3/4 md:w-auto p-medio md:block md:animate-none 
                    ${menuIsOpen ? 'block animate-slideIn' : menuHasOpened && !isResizing ? 'animate-slideOut' : 'hidden'}`}
                    >
                        <ul data-testid="list" className={`gap-pequeno flex-col flex md:flex-row`}>
                            {menu_links.map(({ displayName, path }) => (
                                <li className={menuTextClassNames} key={displayName}>
                                    <Link href={{ pathname: path }}>{displayName}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Header: React.FC = () => {
    const [showComponent, setShowComponent] = useState({
        video: false,
        fotos: true,
        mapa: false,
    });

    const handleShowFotos = useCallback(
        () =>
            setShowComponent({
                video: false,
                fotos: true,
                mapa: false,
            }),
        []
    );

    const handleShowVideo = useCallback(
        () =>
            setShowComponent({
                video: true,
                fotos: false,
                mapa: false,
            }),
        []
    );

    const handleShowMapa = useCallback(
        () =>
            setShowComponent({
                video: false,
                fotos: false,
                mapa: true,
            }),
        []
    );

    return (
        <header className="relative">
            <MenuPrincipal />

            <div className="w-full items-center flex mt-[4rem] h-[30rem] border-solid border-2">
                {showComponent.fotos && (
                    <div
                        data-testid="component-fotos"
                        className="size-full bg-azulForte2 items-center justify-center flex"
                    >
                        <div>{'Fotos'}</div>
                    </div>
                )}

                {showComponent.video && (
                    <div
                        data-testid="component-video"
                        className="size-full bg-azulForte items-center justify-center flex"
                    >
                        {'Vídeo'}
                    </div>
                )}

                {showComponent.mapa && (
                    <div
                        data-testid="component-mapa"
                        className="size-full bg-azulFeio items-center justify-center flex"
                    >
                        {'Mapa'}
                    </div>
                )}
            </div>

            <div className="container mx-auto p-medio flex gap-pequeno">
                <Button
                    data-testid="btn-open-fotos"
                    config={{ variant: 'default', active: showComponent.fotos }}
                    onClick={handleShowFotos}
                >
                    Fotos
                </Button>
                <Button
                    data-testid="btn-open-video"
                    config={{ variant: 'default', active: showComponent.video }}
                    onClick={handleShowVideo}
                >
                    Vídeo
                </Button>
                <Button
                    data-testid="btn-open-mapa"
                    config={{ variant: 'default', active: showComponent.mapa }}
                    onClick={handleShowMapa}
                >
                    Mapa
                </Button>
            </div>
        </header>
    );
};

export default function Home() {
    return (
        <>
            <Header />
        </>
    );
}
