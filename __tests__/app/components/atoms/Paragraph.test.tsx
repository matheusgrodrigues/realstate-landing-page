import { render, screen } from '@testing-library/react';
import Paragraph from '@/app/components/atoms/Paragraph';

jest.mock('../../../../src/app/components/atoms/Paragraph', () =>
    jest.fn(({ children, ...props }) => <p {...props}>{children}</p>)
);

describe('Deve renderizar o Paragraph corretamente', () => {
    beforeEach(() =>
        render(
            <Paragraph
                data-testid="paragraph"
                config={{
                    textTransform: 'uppercase',
                    fontSize: 'text-medio',
                    color: 'text-preto2',
                }}
            >
                text
            </Paragraph>
        )
    );

    it('Deve renderizar o Paragraph com a prop config', () => {
        const paragraph = screen.getByTestId('paragraph');

        expect(paragraph).toBeInTheDocument();
        expect(Paragraph).toHaveBeenCalledWith(
            expect.objectContaining({
                config: {
                    textTransform: 'uppercase',
                    fontSize: 'text-medio',
                    color: 'text-preto2',
                },
            }),
            {}
        );
    });

    it('Dever renderizar o children', () => {
        const paragraph = screen.getByTestId('paragraph');

        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent('text');
    });
});
