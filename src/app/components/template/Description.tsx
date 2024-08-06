import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/Icon';
import Link from 'next/link';

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
                            customClassName: 'w-auto',
                            color: 'text-vermelho',
                            icon: 'map-pin',
                            size: 'size-medio',
                        }}
                    />
                    <span data-testid="description-endereco-emp" className="mx-[3px]">
                        R. Marina Ciufuli Zanfelice, 176 -
                        <strong data-testid="description-endereco-emp-estado">Lapa</strong> - São Paulo
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
                        O lançamento mais aguardado da{' '}
                        <strong data-testid="description-emp-descricao-bairro">LAPA</strong> chegou!{' '}
                    </strong>
                    Produto incomparável em um dos bairros mais tradicionais da capital. O fluxo de pagamento está
                    excelente e comprar na planta é o melhor negócio.{' '}
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

                {/* TODO: Ajustar os icones de diferenciais com icones que fazem sentido. */}
                <ul data-testid="description-emp-diferenciais" className="flex gap-grande flex-wrap">
                    <li className="w-1/3" data-testid="description-emp-diferenciais-item">
                        <Paragraph
                            config={{
                                customClassName: 'flex items-center',
                                textTransform: 'lowercase',
                                fontSize: 'text-medio',
                                color: 'text-preto2',
                            }}
                        >
                            <Icon
                                config={{
                                    customClassName: 'w-auto',
                                    color: 'text-vermelho',
                                    icon: 'truck',
                                    size: 'size-medio',
                                }}
                            />
                            <span className="mx-[3px]">
                                <strong>2 e 3</strong> Dormitórios.
                            </span>
                        </Paragraph>
                    </li>
                    <li className="w-1/3" data-testid="description-emp-diferenciais-item">
                        <Paragraph
                            config={{
                                customClassName: 'flex items-center',
                                textTransform: 'lowercase',
                                fontSize: 'text-medio',
                                color: 'text-preto2',
                            }}
                        >
                            <Icon
                                config={{
                                    customClassName: 'w-auto',
                                    color: 'text-vermelho',
                                    icon: 'retangle-group',
                                    size: 'size-medio',
                                }}
                            />
                            <span className="mx-[3px]">
                                Condonínio <strong>Clube</strong>
                            </span>
                        </Paragraph>
                    </li>
                    <li className="w-1/3" data-testid="description-emp-diferenciais-item">
                        <Paragraph
                            config={{
                                customClassName: 'flex items-center',
                                textTransform: 'lowercase',
                                fontSize: 'text-medio',
                                color: 'text-preto2',
                            }}
                        >
                            <Icon
                                config={{
                                    customClassName: 'w-auto',
                                    color: 'text-vermelho',
                                    icon: 'square-3-stack-3d',
                                    size: 'size-medio',
                                }}
                            />
                            <span className="mx-[3px]">
                                Opção de <strong>Vaga</strong>
                            </span>
                        </Paragraph>
                    </li>
                    <li className="w-1/3" data-testid="description-emp-diferenciais-item">
                        <Paragraph
                            config={{
                                customClassName: 'flex items-center',
                                textTransform: 'lowercase',
                                fontSize: 'text-medio',
                                color: 'text-preto2',
                            }}
                        >
                            <Icon
                                config={{
                                    customClassName: 'w-auto',
                                    color: 'text-vermelho',
                                    icon: 'map-pin',
                                    size: 'size-medio',
                                }}
                            />
                            <span className="mx-[3px]">
                                <strong>4</strong> elevadores por torre
                            </span>
                        </Paragraph>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Description;
