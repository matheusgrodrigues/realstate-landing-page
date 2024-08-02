import React, { IframeHTMLAttributes } from 'react';
import MapSchema from '@/schema/MapSchema';

interface MapProps extends React.DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    map: MapSchema | undefined;
}

const Map: React.FC<MapProps> = ({ map, ...props }) => {
    return (
        <>
            {map && (
                <iframe
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="border-0"
                    loading="lazy"
                    height="100%"
                    width="100%"
                    title={map.attributes.titulo}
                    src={`${map.attributes.url}`}
                    {...props}
                />
            )}
        </>
    );
};

export default Map;
