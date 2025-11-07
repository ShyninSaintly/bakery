import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

export const MapLayout= ()=> {
    const position= [55.7, 52.33];
    return (
        <>
            <MapContainer
                center={position}
                zoom={13}
                zoomControl={false}
                scrollWheelZoom={false}
                style={{ height: '100vh', width: '100%', zIndex: -1 }}
            >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={position}>
                    <Popup>
                     Здесь типо пекарня йоу
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}
