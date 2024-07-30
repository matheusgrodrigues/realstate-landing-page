import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/page';

describe('Home', () => {
    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
    });

    beforeEach(async () => {
        const page = await Page();
        render(page);
    });

    it('Deve renderizar o Header', async () => {
        const header = screen.getByTestId('header-template');
        expect(header).toBeInTheDocument();
    });
});
