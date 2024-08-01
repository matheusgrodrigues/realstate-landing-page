import React from 'react';
import { render, screen } from '@testing-library/react';
import Video from '../../../../src/app/components/atoms/Video';

import mock_video from '../../../../__mocks__/app/components/atom/Video';

describe('Deve renderizar o Video corretamente', () => {
    beforeEach(() => {
        render(<Video data-testid="atom-video" video={mock_video} />);
    });

    it('Deve ter o width e height 100%', () => {
        const video = screen.getByTestId('atom-video');

        expect(video).toBeInTheDocument();
        expect(video).toHaveAttribute('height', '100%');
        expect(video).toHaveAttribute('width', '100%');
    });

    it('Deve ter o frameborder = 0', () => {
        const video = screen.getByTestId('atom-video');

        expect(video).toBeInTheDocument();
        expect(video).toHaveAttribute('frameBorder', '0');
    });
});
