'use client';

import { default as NextLink } from 'next/link';
import React, { ButtonHTMLAttributes, forwardRef, useCallback, useState, useRef, useEffect } from 'react';
import { BuildingLibraryIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

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

const Logo: React.FC = () => (
    <BuildingLibraryIcon data-testid="logo" className="text-white text-grande font-semiBold w-[32px]" />
);

const Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        titleId?: string;
        title?: string;
        icon: 'bars-3' | 'x-icon';
    } & React.RefAttributes<SVGSVGElement>
> = forwardRef(({ className, icon, ...props }, ref) => {
    return (
        <>
            {icon === 'x-icon' && <XMarkIcon className={`text-white w-[32px] ${className}`} ref={ref} {...props} />}
            {icon === 'bars-3' && <Bars3Icon className={`text-white w-[32px] ${className}`} ref={ref} {...props} />}
        </>
    );
});

Icon.displayName = 'Icon';

interface ButtonProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    variant: 'hamburger';
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, ...props }) => (
    <>
        {variant === 'hamburger' && (
            <button data-testid="btn-open-menu" className="outline-none w-auto md:hidden" onClick={onClick} {...props}>
                {children}
            </button>
        )}
    </>
);

const Link: typeof NextLink = forwardRef(({ href, ...props }, ref) => <NextLink href={href} {...props} />);

Link.displayName = 'Navigate';

// TODO: criar um arquivo routes para centralizar todas as rotas do sistema.
const menu_links = [
    {
        displayName: 'Inicio',
        path: '/',
    },
    {
        displayName: 'Fotos',
        path: '/',
    },
    {
        displayName: 'Descrição',
        path: '/',
    },
];

const MenuPrincipal: React.FC = () => {
    const rootMenuListRef = useRef<HTMLDivElement>(null);
    const hasOpenMenu = useRef(false);
    const rootMenu = useRef<HTMLElement>(null);

    const toggleMenu = useCallback(() => {
        hasOpenMenu.current = !hasOpenMenu.current;

        if (hasOpenMenu.current) {
            rootMenuListRef.current?.classList.remove('hidden');
            rootMenuListRef.current?.classList.remove('animate-slideOut');
            rootMenuListRef.current?.classList.add('animate-slideIn');
        } else {
            rootMenuListRef.current?.classList.remove('animate-slideIn');
            rootMenuListRef.current?.classList.add('animate-slideOut');
            rootMenuListRef.current?.classList.add('hidden');
        }
    }, []);

    const MenuButton: React.FC = () => {
        const [openMenu, setOpenMenu] = useState(false);

        return (
            <Button
                data-testid="btn-open-menu"
                className="outline-none w-auto md:hidden"
                variant="hamburger"
                onClick={() => {
                    setOpenMenu(!openMenu);
                    toggleMenu();
                }}
            >
                {openMenu ? <Icon icon="x-icon" /> : <Icon icon="bars-3" />}
            </Button>
        );
    };

    useEffect(() => {
        const toggleColor = () => {
            if (typeof window !== undefined) {
                window.addEventListener('scroll', () => {
                    console.log(window.screenY);
                    if (window.screenY >= 70) {
                        console.log('maior');
                        rootMenu.current?.classList.add('bg-azulForte');
                    } else {
                        console.log('menor');

                        rootMenu.current?.classList.add('bg-white');
                    }
                });
            }
        };

        toggleColor();
    }, []);

    return (
        <nav
            data-testid="menu-principal"
            className="bg-azulForte h-[700px] w-full justify-between items-center flex px-medio"
            ref={rootMenu}
        >
            <div>
                <Logo />
            </div>

            <div>
                <MenuButton />

                <div
                    className={`bg-azulForte absolute md:relative top-[70px] md:top-auto right-[0] md:right-auto w-3/4 md:w-auto p-medio hidden md:block md:animate-none`}
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
