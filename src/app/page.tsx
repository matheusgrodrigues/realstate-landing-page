import Header from './components/template/Header';
import FotosProvider from './providers/Fotos/FotosProvider';

export default function Home() {
    return (
        <>
            <Header
                providers={{
                    fotos: <FotosProvider />,
                }}
            />
        </>
    );
}
