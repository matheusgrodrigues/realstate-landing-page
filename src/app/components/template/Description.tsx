import React from 'react';
import Link from 'next/link';

import Paragraph from '../atoms/Paragraph';
import Icon, { IconType } from '../atoms/Icon';

const diferenciais: Array<{
    id: number;
    icon: IconType;
    text: {
        highlight: string;
        text: string;
    };
}> = [
    {
        id: 1,
        icon: 'truck',
        text: {
            highlight: '2 e 3',
            text: 'Dormitórios',
        },
    },
    {
        id: 2,
        icon: 'retangle-group',
        text: {
            highlight: 'Clube',
            text: 'Condomínio',
        },
    },
    {
        id: 3,
        icon: 'square-3-stack-3d',
        text: {
            highlight: 'Vaga',
            text: 'na garagem',
        },
    },
    {
        id: 4,
        icon: 'puzzle-piece',
        text: {
            highlight: '4',
            text: 'Elevadores por torre',
        },
    },
];

interface DescriptionLeftSideProps extends DescriptionProps {}

const DescriptionLeftSide: React.FC<DescriptionLeftSideProps> = ({ providers }) => (
    <div className="flex flex-col max-w-[634px] gap-medio">
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

        <Paragraph
            config={{
                customClassName: 'flex items-center',
                textTransform: 'capitalize',
                fontSize: 'text-medio',
                color: 'text-preto2',
            }}
        >
            <Icon
                data-testid="description-endereco-emp-icon"
                config={{
                    color: 'text-vermelho',
                    icon: 'map-pin',
                    size: 'size-medio',
                }}
            />
            <span data-testid="description-endereco-emp" className="mx-[3px]">
                R. Marina Ciufuli Zanfelice, 176 -<strong data-testid="description-endereco-emp-estado">Lapa</strong> -
                São Paulo
            </span>
        </Paragraph>

        <Paragraph
            data-testid="description-emp-descricao"
            config={{
                textTransform: 'lowercase',
                fontSize: 'text-medio',
                color: 'text-preto2',
            }}
        >
            <strong>
                O lançamento mais aguardado da <strong data-testid="description-emp-descricao-bairro">LAPA</strong>{' '}
                chegou!{' '}
            </strong>
            Produto incomparável em um dos bairros mais tradicionais da capital. O fluxo de pagamento está excelente e
            comprar na planta é o melhor negócio.{' '}
            <Link
                data-testid="description-emp-descricao-link"
                href={{
                    pathname: '/',
                }}
            >
                Solicite uma proposta
            </Link>
            .
        </Paragraph>

        <ul
            data-testid="description-emp-diferenciais"
            className="flex flex-col md:flex-row md:flex-wrap gap-medio mt-pequeno"
        >
            {diferenciais.map((dif) => (
                <li className="w-1/3" data-testid="description-emp-diferenciais-item" key={dif.id}>
                    <Paragraph
                        config={{
                            customClassName: 'flex items-center text-nowrap',
                            textTransform: 'lowercase',
                            fontSize: 'text-medio',
                            color: 'text-preto2',
                        }}
                    >
                        <Icon
                            config={{
                                customClassName: 'w-auto',
                                color: 'text-vermelho',
                                icon: dif.icon,
                                size: 'size-medio',
                            }}
                        />
                        <span className="mx-[3px]">
                            <strong>{dif.text.highlight}</strong> {dif.text.text}
                        </span>
                    </Paragraph>
                </li>
            ))}
        </ul>
    </div>
);

interface DescriptionRightSideProps extends DescriptionProps {}

const DescriptionRightSide: React.FC<DescriptionRightSideProps> = ({ providers }) => <></>;

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

const Description: React.FC<DescriptionProps> = ({ providers }) => (
    <div className="container mx-auto py-medio px-medio md:px-[0]">
        <DescriptionLeftSide />
        <DescriptionRightSide />
    </div>
);

export default Description;
