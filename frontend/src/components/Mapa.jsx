import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const iconeReciclagem = new L.Icon({
  iconUrl: "/marker-reciclagem.png",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -40],
});

function Mapa({ pontos }) {
  return (
    <MapContainer
      center={[-1.4558, -48.4902]}
      zoom={12}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "12px",
        marginTop: "30px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pontos
        .filter((ponto) => ponto.latitude && ponto.longitude)
        .map((ponto, index) => (
          <Marker
            key={index}
            position={[ponto.latitude, ponto.longitude]}
            icon={iconeReciclagem}
          >
            <Popup>
              <strong>{ponto.nome}</strong>
              <br />
              {ponto.endereco}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
export default Mapa;
