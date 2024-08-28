import React from 'react';
import { render, screen } from '@testing-library/react';

import mock_video from '../../../../../../__mocks__/app/components/atom/Video';
import Map from '@/app/imoveis/[imovel]/components/atoms/Map';

describe('Deve renderizar o Map corretamente', () => {
    beforeEach(() => {
        render(<Map data-testid="atom-map" map={mock_video} />);
    });

    it('Deve ter o width e height 100%', () => {
        const map = screen.getByTestId('atom-map');
        expect(map).toBeInTheDocument();
        expect(map.classList.contains('size-full')).toBe(true);
    });

    it('Deve ter o frameborder = 0', () => {
        const map = screen.getByTestId('atom-map');
        expect(map).toBeInTheDocument();
        expect(map).toHaveAttribute('frameBorder', '0');
    });
});
