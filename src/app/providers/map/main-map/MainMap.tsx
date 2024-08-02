import Map from '@/app/components/atoms/Map';
import MapService from '@/services/MapService';

export default async function MainMap() {
    const map = await MapService.getMap('/api/map/', 'main-map');

    return (
        <>
            <Map data-testid="atom-map" map={map ? map[0] : undefined} />
        </>
    );
}
