import { MapContainer, TileLayer } from 'react-leaflet';

export const MapLayout=()=> {
    return (
        <>
            <MapContainer
                center={[55.7, 52.33]}
                zoom={13}
                zoomControl={false}
                scrollWheelZoom={false}
                style={{ height: '100vh', width: '100%' }}
            >
            <TileLayer
               attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapContainer>
        </>
    );
}
