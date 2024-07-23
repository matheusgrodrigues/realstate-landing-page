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
    <ul data-testid="list" className={`gap-pequeno flex-col flex ${className}`} {...props}>
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
                {/* TODO: animar a transição quando clica no botão de abrir o menu no mobile, entre as bars e o x */}
                <button
                    data-testid="btn-open-menu"
                    className="outline-none w-auto md:hidden"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu ? <Icon icon="x-icon" /> : <Icon icon="bars-3" />}
                </button>

                {/* TODO: corrigir bug no desktop, está executando a animação de slideOut no desktop bugando os itens do menu */}
                <div
                    className={`bg-azulForte absolute md:relative top-[70px] md:top-auto right-[0] md:right-auto block w-3/4 md:w-auto p-medio ${openMenu ? 'animate-slideIn' : 'animate-slideOut md:animate-none'}`}
                >
                    <List className={`md:flex-row`} items={['Inicio', 'Fotos', 'Descrição']} />
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
