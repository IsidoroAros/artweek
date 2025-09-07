import { FC, Fragment, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import { IoMdClose } from "react-icons/io"
import { RiLink } from "react-icons/ri"
import {
  artistCards,
  artistLocations,
  ArtistCard as ArtistCardType,
} from "./data"
import { Modal } from "../Modal"
import {
  ArtistCard,
  ArtistCardsContainer,
  ArtistCardsGrid,
  ArtistDescription,
  ArtistDetails,
  ArtistImage,
  ArtistInfo,
  ArtistLabel,
  ArtistLocation,
  ArtistLocationsContainer,
  ArtistModalContainer,
  ArtistName,
  BiggerPictureSectionContainer,
  MainTitle,
  MapContainer,
  MapOverlay,
  Subtitle,
  TitleSection,
} from "./BiggerPictureSection.styled"

const BiggerPictureSection: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeArtist, setActiveArtist] = useState<ArtistCardType | null>(null)

  const handleArtistClick = (artist: ArtistCardType) => {
    setActiveArtist(artist)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setActiveArtist(null)
  }

  return (
    <>
      <BiggerPictureSectionContainer>
        <TitleSection>
          <MainTitle>The bigger picture</MainTitle>
          <Subtitle>
            Zoom out to see how Art Week unfolds across Decentraland—with
            user-created parties, performances, and activations across Genesis
            City.
          </Subtitle>
        </TitleSection>

        <MapContainer>
          <MapOverlay>
            <ArtistLocationsContainer>
              {artistLocations.map((location) => (
                <Fragment key={location.id}>
                  <ArtistLocation
                    width={location.width}
                    height={location.height}
                    left={location.left}
                    top={location.top}
                  />
                  {location.name && (
                    <ArtistLabel
                      left={location.labelLeft}
                      top={location.labelTop}
                      width={location.labelWidth}
                      centered={location.labelCentered}
                    >
                      {location.name}
                    </ArtistLabel>
                  )}
                </Fragment>
              ))}
            </ArtistLocationsContainer>
          </MapOverlay>
        </MapContainer>

        <ArtistCardsContainer>
          <ArtistCardsGrid>
            {artistCards.map((artist) => (
              <ArtistCard
                key={artist.id}
                onClick={() => handleArtistClick(artist)}
              >
                <ArtistImage
                  src={artist.image}
                  alt={artist.artistName}
                  loading="lazy"
                />
                <ArtistInfo>
                  <ArtistDetails>
                    <ArtistName>{artist.artistName}</ArtistName>
                    <ArtistDescription>{artist.title}</ArtistDescription>
                  </ArtistDetails>
                </ArtistInfo>
              </ArtistCard>
            ))}
          </ArtistCardsGrid>
        </ArtistCardsContainer>
      </BiggerPictureSectionContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ArtistModalContainer>
          <div className="top">
            <h2>{activeArtist?.artistName}</h2>
            <p>{activeArtist?.title}</p>
            <img src={activeArtist?.image} alt={activeArtist?.artistName} />
          </div>
          <div className="middle">
            <p>{activeArtist?.description || "No description available"}</p>
            {activeArtist?.link && (
              <a
                href={activeArtist?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLink />
              </a>
            )}
          </div>
          <hr />
          <div className="bottom">
            <div>
              <h6>Studio</h6>
              <p>{activeArtist?.studio}</p>
            </div>
          </div>
          <hr />
          <div className="actions">
            <button onClick={handleCloseModal}>
              Close <IoMdClose />
            </button>
            <button
              onClick={() => {
                if (activeArtist?.jumpInLink) {
                  window.open(activeArtist.jumpInLink, "_blank")
                }
              }}
            >
              Jump in <GoArrowUpRight />
            </button>
          </div>
        </ArtistModalContainer>
      </Modal>
    </>
  )
}

export { BiggerPictureSection }
