'use client';

import React, { forwardRef, useState } from 'react';
import { Bars3Icon, BuildingLibraryIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface ListItemProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    label: string;
}

const ListItem: React.FC<ListItemProps> = ({ className, label, ...props }) => (
    <li className={`text-white ${className}`} {...props}>
        {label}
    </li>
);

interface ListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: string[];
}

const List: React.FC<ListProps> = ({ className, items, ...props }) => (
    <ul data-testid="list" className={`gap-pequeno flex ${className}`} {...props}>
        {items.map((item) => (
            <ListItem label={item} key={item} />
        ))}
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
> = forwardRef(({ className, icon, ...props }, ref) =>
    icon === 'x-icon' ? (
        <XMarkIcon className={`text-white w-[32px] ${className}`} ref={ref} {...props} />
    ) : icon === 'bars-3' ? (
        <Bars3Icon className={`text-white w-[32px] ${className}`} ref={ref} {...props} />
    ) : (
        ''
    )
);

Icon.displayName = 'Icon';

const MenuPrincipal: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav
            data-testid="menu-principal"
            className="bg-azulForte h-[70px] w-full justify-between items-center flex px-medio"
        >
            <div>
                <Logo />
            </div>

            <div>
                <button
                    data-testid="btn-open-menu"
                    className="outline-none w-auto md:hidden"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu ? <Icon icon="x-icon" /> : <Icon icon="bars-3" />}
                </button>

                <div
                    className={`bg-azulForte ${openMenu ? 'absolute md:relative top-[70px] md:top-auto block left-1/4 md:left-auto w-3/4 md:w-auto p-medio' : 'hidden md:block'}`}
                >
                    <List
                        className={`${openMenu ? 'flex-col md:flex-row' : ''}`}
                        items={['Inicio', 'Fotos', 'Descrição']}
                    />
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
