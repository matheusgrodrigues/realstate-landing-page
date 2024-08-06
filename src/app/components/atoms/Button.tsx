import { HTMLAttributes } from 'react';

interface ButtonProps
    extends Omit<React.DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
    children: React.ReactNode;
    config: {
        customClassName?: string | undefined;
        variant?: 'default' | 'azul-claro';
        active?: boolean;
    };
}

const Button: React.FC<ButtonProps> = ({ children, config, ...props }) => {
    return (
        <>
            {config.variant === 'default' && (
                <button
                    className={`${config.active ? 'bg-azulForte text-white' : 'text-cinza hover:text-white bg-white2 hover:bg-cinza ease-in-out duration-200'} font-bold px-extraMedio h-[3rem] rounded-md ${config.customClassName}`}
                    {...props}
                >
                    {children}
                </button>
            )}

            {config.variant === 'azul-claro' && (
                <button
                    className={`${config.active ? 'bg-azulClaro text-white' : 'text-white hover:text-white bg-azulClaro hover:bg-azulForte2 ease-in-out duration-200'} font-bold px-extraMedio h-[3rem] rounded-md ${config.customClassName}`}
                    {...props}
                >
                    {children}
                </button>
            )}

            {!config.variant && (
                <button className={`${config.customClassName}`} {...props}>
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
