import MapService from '@/services/MapService';
import Map from '@/app/imoveis/[imovel]/components/atoms/Map';

export default async function MapProvider() {
    const map = await MapService.getMap('/imoveis/teste//api/map/', 'main-map');
    return <Map data-testid="atom-map" map={map ? map[0] : undefined} />;
}
