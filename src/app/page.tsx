import React from 'react';

interface ListProps {
    items: string[];
}

const List: React.FC<ListProps> = ({ items }) => (
    <ul data-testid="list" className="gap-pequeno flex">
        {items.map((item) => (
            <li className="text-white" key={item}>
                {item}
            </li>
        ))}
    </ul>
);

const Logo: React.FC = () => (
    <h1 data-testid="logo" className="text-white text-grande font-semiBold">
        RealState
    </h1>
);

const MenuPrincipal: React.FC = () => {
    const items = ['Inicio', 'Fotos', 'Descrição'];

    return (
        <nav
            data-testid="menu-principal"
            className="bg-azulForte h-[70px] w-full justify-between items-center flex px-medio"
        >
            <div>
                <Logo />
            </div>

            <div>
                <List items={items} />
            </div>
        </nav>
    );
};

const Header: React.FC = () => (
    <header>
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
