import { HTMLAttributes } from 'react';

interface HeadingProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: React.ReactNode;
    config: {
        variant: 'h4';
    };
}

const Heading: React.FC<HeadingProps> = ({ children, config, ...props }) => {
    return (
        <>
            {config.variant === 'h4' && (
                <h4 className="text-extraMedio" {...props}>
                    {children}
                </h4>
            )}
        </>
    );
};

export default Heading;
