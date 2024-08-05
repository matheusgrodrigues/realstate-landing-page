import Description from '@/app/components/template/Description';
import { render, screen } from '@testing-library/react';

describe('Deve renderizar o template Description corretamente', () => {
    beforeEach(() => render(<Description />));

    it('Deve renderizar o nome do empreendimento', () => {
        const nome = screen.getByTestId('description-nome-emp');

        expect(nome).toBeInTheDocument();
        expect(nome).not.toHaveTextContent('');
    });

    it('Deve renderizar o status do empreendimento', () => {
        const status = screen.getByTestId('description-status-emp');

        expect(status).toBeInTheDocument();
        expect(status).not.toHaveTextContent('');
    });
});
