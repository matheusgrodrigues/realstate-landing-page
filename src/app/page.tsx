'use client';

import { default as NextLink } from 'next/link';
import React, { ButtonHTMLAttributes, forwardRef, useCallback, useState, useRef, useEffect } from 'react';
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

const MenuPrincipal: React.FC = () => {
    const rootMenuListRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const hasOpenMenu = useRef(false);
    const rootMenu = useRef<HTMLElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);

    const MenuButton: React.FC = () => {
        const [openMenu, setOpenMenu] = useState(false);

        const toggleMenu = useCallback(() => {
            setOpenMenu(!openMenu);

            hasOpenMenu.current = !hasOpenMenu.current;

            if (hasOpenMenu.current) {
                menuButtonRef.current?.querySelector('svg')?.classList.add('text-preto');
                rootMenuListRef.current?.classList.remove('hidden');
                rootMenuListRef.current?.classList.remove('animate-slideOut');
                rootMenuListRef.current?.classList.add('animate-slideIn');
            } else {
                menuButtonRef.current?.querySelector('svg')?.classList.add('text-preto');

                rootMenuListRef.current?.classList.remove('animate-slideIn');
                rootMenuListRef.current?.classList.add('animate-slideOut');
                rootMenuListRef.current?.classList.add('hidden');
            }
        }, [openMenu]);

        return (
            <button
                data-testid="btn-open-menu"
                className="outline-none w-auto md:hidden"
                onClick={toggleMenu}
                ref={menuButtonRef}
            >
                {openMenu ? <Icon icon="x-icon" /> : <Icon icon="bars-3" />}
            </button>
        );
    };

    useEffect(() => {
        const menuList = rootMenuListRef.current?.querySelectorAll('ul li');

        const toggleColor = () => {
            if (window.scrollY >= 70) {
                menuButtonRef.current?.querySelector('svg')?.classList.add('text-preto');
                rootMenu.current?.classList.remove('bg-azulForte');
                rootMenu.current?.classList.add('bg-white');
                logoRef.current?.classList.add('text-preto');

                menuList && menuList.forEach((item) => item.classList.add('text-preto'));
            } else {
                menuButtonRef.current?.querySelector('svg')?.classList.remove('text-preto');
                rootMenu.current?.classList.remove('bg-white');
                rootMenu.current?.classList.add('bg-azulForte');
                logoRef.current?.classList.remove('text-preto');

                menuList && menuList.forEach((item) => item.classList.remove('text-preto'));
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
            className="bg-azulForte fixed top-[0] h-[70px] w-full justify-between items-center flex px-medio ease-linear duration-200"
            ref={rootMenu}
        >
            <div>
                <Icon
                    data-testid="logo"
                    className="text-grande font-semiBold w-[32px]"
                    icon="building-library"
                    ref={logoRef}
                />
            </div>

            <div>
                <MenuButton />

                <div
                    className={`bg-azulForte md:bg-transparent absolute md:relative top-[70px] md:top-auto right-[0] md:right-auto w-3/4 md:w-auto p-medio hidden md:block md:animate-none`}
                    ref={rootMenuListRef}
                >
                    <List className={`md:flex-row`}>
                        {menu_links.map(({ displayName, path }) => (
                            <ListItem key={displayName}>
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
