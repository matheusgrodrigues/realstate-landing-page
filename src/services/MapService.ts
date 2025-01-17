import MapSchema from '@/schema/MapSchema';

type MapName = 'main-map';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

const MapService = {
    getMap: async (endpoint: string, MapName: MapName): Promise<MapSchema[]> => {
        const res = await fetch(`${domain}${endpoint}${MapName}`);
        const { data } = await res.json();

        return data;
    },
};

export default MapService;
