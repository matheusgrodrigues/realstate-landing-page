'use client';

import { default as NextLink } from 'next/link';
import React, { forwardRef, useEffect, useState } from 'react';
import { BuildingLibraryIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import debounce from './lib/util/debounce';
import { getRoute } from '@/config/routes';

interface ListItemProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ className, children, ...props }) => (
    <li className={`text-white ${className}`} {...props}>
        {children}
    </li>
);

interface ListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ className, children, ...props }) => (
    <ul data-testid="list" className={`gap-pequeno flex-col flex ${className}`} {...props}>
        {children}
    </ul>
);

const Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        titleId?: string;
        title?: string;
        icon: 'building-library' | 'bars-3' | 'x-icon';
    } & React.RefAttributes<SVGSVGElement>
> = forwardRef(({ className, icon, ...props }, ref) => {
    return (
        <>
            {icon === 'building-library' && (
                <BuildingLibraryIcon
                    data-testid="logo"
                    className={`text-white w-[32px] ${className}`}
                    ref={ref}
                    {...props}
                />
            )}
            {icon === 'x-icon' && <XMarkIcon className={`text-white w-[32px] ${className}`} ref={ref} {...props} />}
            {icon === 'bars-3' && <Bars3Icon className={`text-white w-[32px] ${className}`} ref={ref} {...props} />}
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
    const [menuBgColor, setMenuBgColor] = useState<MenuBgColor>('bg-azulForte');
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const menuTextClassNames = `${menuBgColor === 'bg-azulForte' ? 'text-white' : 'text-pretoForte'}`;

    console.log('renderouzou');

    useEffect(() => {
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

        return () => window.removeEventListener('scroll', debouncedToggleColor);
    }, []);

    return (
        <nav
            data-testid="menu-principal"
            className={`${menuBgColor} fixed top-[0] h-[70px] w-full justify-between items-center flex px-medio ease-linear duration-200`}
        >
            <div>
                <Icon
                    data-testid="logo"
                    className={`text-grande font-semiBold w-[32px] ${menuTextClassNames}`}
                    icon="building-library"
                />
            </div>

            <div>
                <button
                    data-testid="btn-open-menu"
                    className={`outline-none w-auto md:hidden`}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                    {menuIsOpen ? (
                        <Icon className={menuTextClassNames} icon="x-icon" />
                    ) : (
                        <Icon className={menuTextClassNames} icon="bars-3" />
                    )}
                </button>

                {/* TODO: Corrigir para que o animation-slideOut não execute ao entrar pela primeira vez na pagina. -> problema no hidden */}
                <div
                    className={`${menuBgColor} md:bg-transparent absolute md:relative top-[70px] md:top-auto right-[0] md:right-auto w-3/4 md:w-auto p-medio md:block md:animate-none ${menuIsOpen ? 'block animate-slideIn' : 'animate-slideOut'}`}
                >
                    <List className={`md:flex-row`}>
                        {menu_links.map(({ displayName, path }) => (
                            <ListItem className={menuTextClassNames} key={displayName}>
                                <Link href={{ pathname: path }}>{displayName}</Link>
                            </ListItem>
                        ))}
                    </List>
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
