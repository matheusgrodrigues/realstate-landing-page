import { render, screen } from '@testing-library/react';
import Heading from '@/app/components/atoms/Heading';

jest.mock('../../../../src/app/components/atoms/Heading', () =>
    jest.fn(({ children, ...props }) => <h4 {...props}>{children}</h4>)
);

describe('Deve renderizar o Heading corretamente', () => {
    beforeEach(() =>
        render(
            <Heading
                data-testid="atom-heading"
                config={{
                    variant: 'h4',
                }}
            >
                text
            </Heading>
        )
    );

    it('Deve renderizar o Heading com o texto correto', () => {
        const btn = screen.getByTestId('atom-heading');

        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent('text');
    });

    it('Deve renderizar o Heading com a prop config', () => {
        const btn = screen.getByTestId('atom-heading');

        expect(btn).toBeInTheDocument();
        expect(Heading).toHaveBeenCalledWith(
            expect.objectContaining({
                config: {
                    variant: 'h4',
                },
            }),
            {}
        );
    });
});
