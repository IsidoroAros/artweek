import { useInView } from "motion/react"
import { useRef } from "react"
import { AnimatedCharacters } from "../animatedCharacters"
import {
  InstallationsContainer,
  MapContainer,
  CardsContainer,
  InstallationCard,
  ArtistLabel
} from "./Installations.styled"
import { installationsData } from "./data"

const Installations = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)

  return (
    <InstallationsContainer>
      <div className="installations__inner-container" ref={containerRef}>
        {/* Header Section */}
        <div className="installations__header">
          <h2>
            <AnimatedCharacters isVisible={isInView}>
              The bigger picture
            </AnimatedCharacters>
          </h2>
          <p className="installations__subtitle">
            Zoom out to see how Art Week unfolds across Decentraland—with user-created parties, performances, and activations across Genesis City.
          </p>
        </div>

        {/* Map Section */}
        <MapContainer>
          <div className="map-background">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/cde5fc716f12202372b19e97a33413478e1e86b7?width=2320" 
              alt="Decentraland installations map"
              className="map-image"
            />
            {/* Artist labels positioned on the map */}
            {installations.map((installation) => (
              <ArtistLabel
                key={installation.id}
                $left={installation.mapPosition.left}
                $top={installation.mapPosition.top}
              >
                {installation.name}
              </ArtistLabel>
            ))}
          </div>
        </MapContainer>

        {/* Cards Section */}
        <CardsContainer>
          {installations.map((installation) => (
            <InstallationCard key={installation.id}>
              <div className="card-image">
                <img 
                  src={installation.image} 
                  alt={installation.name}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{installation.name}</h3>
                <p className="card-subtitle">{installation.subtitle}</p>
              </div>
            </InstallationCard>
          ))}
        </CardsContainer>
      </div>
    </InstallationsContainer>
  )
}

export default Installations
