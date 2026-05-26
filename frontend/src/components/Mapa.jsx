import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet"

import { useEffect, useState } from "react"

import L from "leaflet"

import "leaflet/dist/leaflet.css"

const iconeReciclagem = new L.Icon({
  iconUrl: "/marker-reciclagem.png",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -40],
})
const iconeUsuario = new L.Icon({
  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
})
function Mapa({ pontos }) {
  const [localizacaoUsuario, setLocalizacaoUsuario] =
    useState(null)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        setLocalizacaoUsuario([
          posicao.coords.latitude,
          posicao.coords.longitude
        ])
      }
    )
  }, [])

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
      {localizacaoUsuario && (
        <Marker
          position={localizacaoUsuario}
          icon={iconeUsuario}
        >
          <Popup>
            📍 Você está aqui
          </Popup>
        </Marker>
      )}
      {pontos
        .filter(
          (ponto) =>
            ponto.latitude &&
            ponto.longitude
        )
        .map((ponto, index) => (
          <Marker
            key={index}
            position={[
              ponto.latitude,
              ponto.longitude
            ]}
            icon={iconeReciclagem}
          >
            <Popup>
              <div className="popup-content">
                <h3>
                  ♻️ {ponto.nome}
                </h3>
                <p>
                  📍 {ponto.endereco}
                </p>
                <p>
                  🔋 {ponto.residuos}
                </p>

              </div>
            </Popup>

          </Marker>
        ))}

    </MapContainer>
  )
}
export default Mapa