import { useCallback, useEffect, useRef, useState } from 'react';

import Heading from '@/app/components/atoms/Heading';
import Button from '@/app/components/atoms/Button';
import Icon from '@/app/components/atoms/Icon';

import debounce from '@/app/lib/util/debounce';

interface DescriptionRightSideProps {
    providers?: {
        valorParcela: React.ReactNode;
        telefone: React.ReactNode;
        status: React.ReactNode;
        logo: React.ReactNode;
    };
}

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

export default DescriptionRightSide;
