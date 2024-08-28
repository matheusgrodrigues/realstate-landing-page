import MapService from '@/services/MapService';
import Map from '@/app/imoveis/[imovel]/components/atoms/Map';

interface MapProviderPros {
    imovelName: string;
}

export default async function MapProvider({ imovelName }: MapProviderPros) {
    const map = await MapService.getMap(`/imoveis/${imovelName}/api/galleryVideoMap/`, 'map');
    return <Map data-testid="atom-map" map={map ? map[0] : undefined} />;
}
