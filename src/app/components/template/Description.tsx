'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Icon, { IconType } from '../atoms/Icon';
import debounce from '@/app/lib/util/debounce';

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
                fontSize: 'text-medio',
                color: 'text-preto2',
            }}
        >
            <strong className="lowercase me-[3px]">
                <span className="me-[3px]">O lançamento mais aguardado da</span>
                <strong data-testid="description-emp-descricao-bairro" className="me-[3px]">
                    LAPA
                </strong>
                chegou!
            </strong>
            <span className="lowercase">
                Produto incomparável em um dos bairros mais tradicionais da capital. O fluxo de pagamento está excelente
                e comprar na planta é o melhor negócio.
            </span>
            <Link
                data-testid="description-emp-descricao-link"
                className="text-vermelho underline mx-[3px]"
                href={{
                    pathname: '/',
                }}
            >
                Solicite uma proposta.
            </Link>
        </Paragraph>

        <ul
            data-testid="description-emp-diferenciais"
            className="flex flex-col lg:flex-row md:flex-wrap gap-medio mt-pequeno"
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

const DescriptionRightSide: React.FC<DescriptionRightSideProps> = ({ providers }) => {
    const [showPhone, setShowPhone] = useState(false);

    const descriptionCardRef = useRef<HTMLDivElement>(null);

    const handleShowPhone = useCallback(() => setShowPhone((prev) => !prev), []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.matchMedia('(min-width: 1080px)').matches) {
                const descriptionCardHeight = descriptionCardRef.current!.clientHeight;
                const tamanhoScroll = window.scrollY;

                /* TODO:
                 * Quando tiver disponivel no site a seção que o scroll deve parar, selecionar a seção e pegar o clientHeight para fazer a soma correta
                 * e adicionar na variavel heightToStop, por enquanto coloquei um number fixo .
                 */

                const heightToStop = 1000;

                let translateY = 0;

                tamanhoScroll >= descriptionCardHeight && tamanhoScroll <= heightToStop
                    ? (translateY = tamanhoScroll - descriptionCardHeight - descriptionCardHeight / 10)
                    : (translateY = 0);

                descriptionCardRef.current!.style.transform = `translateY(${translateY}px)`;
            }
        };

        const debouncedAnim = debounce(() => window.requestAnimationFrame(handleScroll), 5);

        window.addEventListener('scroll', debouncedAnim);

        return () => window.removeEventListener('scroll', debouncedAnim);
    }, []);

    return (
        <div
            data-testid="description-card"
            className="min-w-[320px] max-w-[355px] md:min-w-[355px] h-[408px] border-solid border-2 border-[#d1d0d0] rounded p-medio flex flex-col gap-extraMedio items-center relative md:top-[-120px] lg:absolute lg:top-[-100px] right-[0] bg-white2 z-30 ease-out duration-200"
            ref={descriptionCardRef}
        >
            <div
                data-testid="description-card-logo"
                className="bg-cinza w-full h-[160px] flex justify-center items-center"
            >
                LOGO
            </div>

            <Heading
                data-testid="description-card-texto-parcela"
                config={{
                    variant: 'h4',
                }}
            >
                Parcelas a partir de <strong className="text-extraMedio font-extraBold">R$ 400</strong>,00
            </Heading>

            <div className="flex flex-col items-center gap-[6px]">
                <Icon
                    data-testid="description-card-icon-phone"
                    onClick={handleShowPhone}
                    config={{
                        customClassName: 'cursor-pointer',
                        color: 'text-vermelho',
                        icon: 'phone',
                    }}
                />
                <span data-testid="description-card-phone" className="text-pequeno">
                    (011) 2643-{showPhone ? '5036' : '****'}
                </span>
            </div>

            <Button
                data-testid="description-card-button"
                config={{
                    customClassName: 'absolute bottom-[-20px] flex items-center gap-[6px]',
                    variant: 'azul-claro',
                }}
            >
                <Icon
                    config={{
                        color: 'text-white',
                        icon: 'chat-bubble-bottom-center',
                        size: 'size-medio',
                    }}
                />
                Receba uma apresentação
            </Button>
        </div>
    );
};

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
    <div className="container max-w-[1080px] mx-auto py-medio px-medio xl:px-[0] flex flex-col items-center gap-grande lg:gap-[0] md:flex-row lg:justify-between relative">
        <DescriptionLeftSide providers={providers} />
        <DescriptionRightSide providers={providers} />
    </div>
);

export default Description;
