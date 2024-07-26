import Link from 'next/link';
import { useCallback, useEffect, useState, useRef } from 'react';

import menu_links from '@/config/menu';
import debounce from '@/app/lib/util/debounce';

import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

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
                        config={{
                            customClassName: `text-grande font-semiBold w-[2rem] ${menuTextClassNames}`,
                            icon: 'building-library',
                        }}
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
                            <Icon
                                config={{
                                    customClassName: menuTextClassNames,
                                    icon: 'x-icon',
                                }}
                            />
                        ) : (
                            <Icon
                                config={{
                                    customClassName: menuTextClassNames,
                                    icon: 'bars-3',
                                }}
                            />
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

export default MenuPrincipal;
