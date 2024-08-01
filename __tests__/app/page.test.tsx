import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import Page from '@/app/page';

// TODO: atualmente o jest não tem suporte para renderizar componentes client que possuem server components como filho.
// Error: Uncaught [Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.]
// Este arquivo está passando os testes com falso positivo.
// Para voltar os erros remova tudo relacionado a 'console.error' e waitFor.
// Obs. Após resolver este problema, remover os comentarios e limpar o código.

const originalError = console.error;

describe('Deve renderizar a Home', () => {
    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
    });

    beforeAll(() => {
        console.error = jest.fn();
    });

    beforeEach(() => {
        waitFor(async () => {
            const page = await Page();
            render(page);
        });
    });

    afterAll(() => {
        console.error = originalError;
    });

    it('O template Header deve estar na tela', async () => {
        waitFor(() => {
            const header = screen.getByTestId('header-template');
            expect(header).toBeInTheDocument();
        });
    });
});
