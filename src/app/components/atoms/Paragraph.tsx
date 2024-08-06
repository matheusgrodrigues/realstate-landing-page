import { HTMLAttributes } from 'react';

interface ParagraphProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode;
    config: {
        fontSize: 'text-medio';
        color: 'text-preto2';
        customClassName?: string;
        textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
    };
}

const Paragraph: React.FC<ParagraphProps> = ({ children, config, ...props }) => (
    <p className={`${config.textTransform} ${config.fontSize} ${config.color} ${config.customClassName}`} {...props}>
        {children}
    </p>
);

export default Paragraph;
