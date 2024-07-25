'use client';

import { default as NextLink } from 'next/link';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
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

const Link: typeof NextLink = forwardRef(({ href, ...props }, ref) => <NextLink href={href} {...props} />);

Link.displayName = 'Link';

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
            className={`${menuBgColor} fixed top-[0] h-[4rem] w-full justify-between items-center flex px-medio ease-linear duration-200`}
            ref={menuPrincipalRef}
        >
            <div>
                <Icon
                    data-testid="logo"
                    className={`text-grande font-semiBold w-[2rem] ${menuTextClassNames}`}
                    icon="building-library"
                />
            </div>

            <div className="items-center flex">
                <button
                    data-testid="btn-open-menu"
                    className={`outline-none size-extraMedio md:hidden`}
                    onClick={() => {
                        setMenuIsOpen(!menuIsOpen);

                        if (!menuHasOpened) {
                            setMenuHasOpened(true);
                        }
                    }}
                >
                    {menuIsOpen ? (
                        <Icon className={menuTextClassNames} icon="x-icon" />
                    ) : (
                        <Icon className={menuTextClassNames} icon="bars-3" />
                    )}
                </button>

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
        </nav>
    );
};

const Header: React.FC = () => (
    <header className="relative">
        <MenuPrincipal />
    </header>
);

export default function Home() {
    return (
        <>
            <Header />
        </>
    );
}
