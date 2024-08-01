import { render, screen } from '@testing-library/react';
import Icon from '../../../../src/app/components/atoms/Icon';

jest.mock('../../../../src/app/components/atoms/Icon', () => jest.fn(({ ...props }) => <svg {...props} />));

describe('Deve renderizar o Icon corretamente', () => {
    beforeEach(() => render(<Icon data-testid="icon" config={{ color: 'text-white', icon: 'x-icon' }} />));

    it('Deve renderizar o Icon com a prop config', () => {
        const btn = screen.getByTestId('icon');

        expect(btn).toBeInTheDocument();
        expect(Icon).toHaveBeenCalledWith(
            expect.objectContaining({
                config: {
                    color: 'text-white',
                    icon: 'x-icon',
                },
            }),
            {}
        );
    });
});
