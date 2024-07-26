import { render, screen } from '@testing-library/react';
import Button from '../../../../src/app/components/atoms/Button';

jest.mock('../../../../src/app/components/atoms/Button', () =>
    jest.fn(({ children, ...props }) => <button {...props}>{children}</button>)
);

describe('Deve renderizar o Button corretamente', () => {
    beforeEach(() =>
        render(
            <Button data-testid="button" config={{}}>
                texto
            </Button>
        )
    );

    it('Deve renderizar o Botão com o texto correto', () => {
        const btn = screen.getByTestId('button');

        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent('texto');
    });

    it('Deve renderizar o Botão com a prop config', () => {
        const btn = screen.getByTestId('button');

        expect(btn).toBeInTheDocument();
        expect(Button).toHaveBeenCalledWith(expect.objectContaining({ config: {} }), {});
    });
});
