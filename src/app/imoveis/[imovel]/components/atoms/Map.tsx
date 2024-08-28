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
                    frameBorder="0"
                    className="size-full border-0"
                    loading="lazy"
                    title={map.attributes.titulo}
                    src={`${map.attributes.url}`}
                    {...props}
                />
            )}
        </>
    );
};

export default Map;
