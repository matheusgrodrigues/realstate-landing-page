import React from 'react';
import Paragraph from '../atoms/Paragraph';

interface DescriptionProps {
    providers?: {
        valorParcela: React.ReactNode;
        diferenciais: React.ReactNode;
        descricao: React.ReactNode;
        endereco: React.ReactNode;
        telefone: React.ReactNode;
        status: React.ReactNode;
        logo: React.ReactNode;
    };
}

const Description: React.FC<DescriptionProps> = ({ providers }) => {
    return (
        <div className="container mx-auto">
            <Paragraph
                config={{
                    textTransform: 'uppercase',
                    fontSize: 'text-medio',
                    color: 'text-preto2',
                }}
            >
                <strong data-testid="description-nome-emp" className="text-azulFeio text-grande me-[6px]">
                    LAPARQUE
                </strong>
                <span className="font-bold" data-testid="description-status-emp">
                    - lançamento
                </span>
            </Paragraph>
        </div>
    );
};

export default Description;
