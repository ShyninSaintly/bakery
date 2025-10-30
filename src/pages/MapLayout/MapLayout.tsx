import {useState, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {
    Map,
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from "react-map-gl/mapbox";


import CITIES from '../../../.data/cities.json';

const TOKEN = ''; // Set your mapbox token here

export const MapLayout= ()=> {
    const [popupInfo, setPopupInfo] = useState(null);

    const pins = useMemo(() =>
            CITIES.map((city, index) => (
                <Marker
                    key={`marker-${index}`}
                    longitude={city.longitude}
                    latitude={city.latitude}
                    anchor="bottom"
                    onClick={e => {
                        // If we let the click event propagates to the map, it will immediately close the popup
                        // with `closeOnClick: true`
                        e.originalEvent.stopPropagation();
                        setPopupInfo(city);
                    }}
                >
                </Marker>
            )),
        []
    );

    return (
        <>
            <Map
                initialViewState={{
                    latitude: 40,
                    longitude: -100,
                    zoom: 3.5,
                    bearing: 0,
                    pitch: 0
                }}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxAccessToken={TOKEN}
            >
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />
                {pins}
                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        onClose={() => setPopupInfo(null)}
                    >
                        <>Контентик попапа</>
                    </Popup>
                )}
            </Map>
        </>
    );
}

export function renderToDom(container) {
    createRoot(container).render(<MapLayout />);
}