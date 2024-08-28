import Heading from './components/atoms/Heading';
import Menu from './components/organism/Menu';

export default async function Home() {
    return (
        <>
            <Menu />

            {/* TODO: o menu está absolute e cobrindo o texto, ajustar e remover comentarios */}
            <Heading config={{ variant: 'h4' }}>Home</Heading>
        </>
    );
}
