import { styled } from "styled-components"
import { artistsAndCurators, studios } from "./data"
import { breakpoints, theme } from "../../utils/theme"
import { AnimatedCharacters } from "../animatedCharacters"
import { DownloadBtn } from "../DownloadBtn/DownloadBtn"
import logoOne from "../../../public/img/credits/logo-1.png"
import logoTwo from "../../../public/img/credits/logo-2.png"
import logoThree from "../../../public/img/credits/logo-3.png"
import logoFour from "../../../public/img/credits/logo-4.png"
import logoFive from "../../../public/img/credits/logo-5.png"

const CreditListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 48px;

  * {
    color: ${theme.black};
  }

  h2 {
    font-size: 3rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  h4 {
    font-size: 1.2rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    font-weight: 400;
    margin-top: 16px;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 48px;
  }
`

const CreditListContent = styled.div`
  display: flex;
  gap: 80px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 600;
`

const ColumnsContainer = styled.div`
  display: flex;
  gap: 40px;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Name = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${theme.paleBlack};

  @media (max-width: ${breakpoints.md}) {
    font-size: 1rem;
  }
`

const LogosContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  gap: 48px;
  padding-bottom: 120px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 160px;
  }
`

const PartnersTitle = styled.h3`
  font-size: 2.2rem;
  margin: 0;
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 600;
  color: ${theme.black};
  margin-bottom: 48px;
`

const CreditList = () => {
  // Split artists and curators into two columns
  const artistsColumn1 = artistsAndCurators.slice(
    0,
    Math.ceil(artistsAndCurators.length / 2)
  )
  const artistsColumn2 = artistsAndCurators.slice(
    Math.ceil(artistsAndCurators.length / 2)
  )

  // Split studios into two columns
  const studiosColumn1 = studios.slice(0, Math.ceil(studios.length / 2))
  const studiosColumn2 = studios.slice(Math.ceil(studios.length / 2))

  return (
    <>
      <CreditListContainer>
        <div>
          <h2>
            <AnimatedCharacters isVisible={true}>
              Credit List
            </AnimatedCharacters>
          </h2>
        </div>
        <CreditListContent>
          <Section>
            <SectionTitle>Artists & Curators</SectionTitle>

            <ColumnsContainer>
              <Column>
                {artistsColumn1.map((name, index) => (
                  <Name key={index}>{name}</Name>
                ))}
              </Column>
              <Column>
                {artistsColumn2.map((name, index) => (
                  <Name key={index}>{name}</Name>
                ))}
              </Column>
            </ColumnsContainer>
          </Section>

          <Section>
            <SectionTitle>Studios</SectionTitle>
            <ColumnsContainer>
              <Column>
                {studiosColumn1.map((name, index) => (
                  <Name key={index}>{name}</Name>
                ))}
              </Column>
              <Column>
                {studiosColumn2.map((name, index) => (
                  <Name key={index}>{name}</Name>
                ))}
              </Column>
            </ColumnsContainer>
          </Section>
        </CreditListContent>
        <h4>
          Alongside the artists and studios listed here, Art Week is made
          possible by the creativity and contributions of the Decentraland
          community.
        </h4>
        <CenteredDownloadButton>
          <DownloadBtn
            customText="DOWNLOAD DECENTRALAND"
            showAvailableOnText={false}
            variant="cosmicGlass"
          />
        </CenteredDownloadButton>
      </CreditListContainer>
      <PartnersTitle>Partners</PartnersTitle>
      <LogosContainer>
        <img src={logoOne} alt="logo" />
        <img src={logoTwo} alt="logo" />
        <img src={logoThree} alt="logo" />
        <img src={logoFour} alt="logo" />
        <img src={logoFive} alt="logo" />
      </LogosContainer>
    </>
  )
}

const CenteredDownloadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 48px auto 0;
  padding: 0 24px;

  a {
    color: white !important;

    * {
      color: white !important;
    }
  }

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`

export { CreditList }
