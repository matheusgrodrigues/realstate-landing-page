import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Page from '@/app/page';
import { Suspense } from 'react';

describe('Home', () => {
    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
    });

    beforeEach(async () =>
        render(
            <Suspense>
                <Page />
            </Suspense>
        )
    );

    it('Deve renderizar o Header', () => {
        const header = screen.getByTestId('header-template');
        expect(header).toBeInTheDocument();
    });
});
