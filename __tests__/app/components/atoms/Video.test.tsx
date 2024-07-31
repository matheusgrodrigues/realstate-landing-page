import Video from '@/app/components/atoms/Video';
import { render, screen } from '@testing-library/react';

// CRIA TESTES AUTOMATIZADOS DO VIDEO
/*
jest.mock('@/app/components/atoms/Video', () =>
    jest.fn(({vid ...props }) => <iframe {...props}/>)
);
*/

const mock_video = {
    id: 1,
    attributes: {
        titulo: 'Titulo do vídeo',
        url: 'https://www.youtube.com/embed/jPkBJY1KI_Q?si=sadSVcsFdHu1pPMf',
        createdAt: '2024-07-31T19:41:54.990Z',
        updatedAt: '2024-07-31T19:49:02.559Z',
        publishedAt: '2024-07-31T19:41:57.344Z',
        name: 'video-principal',
    },
};

describe('Deve renderizar o Video corretamente', () => {
    beforeEach(() => {
        render(<Video data-testid="atom-video" video={mock_video} />);
    });

    it('Deve renderizar Video com o título', () => {
        const video = screen.getByTestId('atom-video');

        expect(video).toBeInTheDocument();
    });

    it('Deve ter um tí');
});
