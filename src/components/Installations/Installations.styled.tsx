import styled from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

export const InstallationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 120px 0;
  background: ${theme.white};

  * {
    color: ${theme.black};
  }

  .installations__inner-container {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 0 24px;

    @media (max-width: ${breakpoints.md}) {
      gap: 32px;
      padding: 0 16px;
    }
  }

  .installations__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
    max-width: 800px;

    h2 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: -3px;
      color: ${theme.black};
      margin: 0;

      @media (max-width: ${breakpoints.md}) {
        font-size: 2.5rem;
        letter-spacing: -2px;
      }

      @media (max-width: ${breakpoints.s}) {
        font-size: 2rem;
        letter-spacing: -1px;
      }
    }
  }

  .installations__subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.5px;
    color: #43404A;
    text-align: center;
    max-width: 686px;
    margin: 0;

    @media (max-width: ${breakpoints.md}) {
      font-size: 16px;
    }

    @media (max-width: ${breakpoints.s}) {
      font-size: 14px;
    }
  }
`

export const MapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;

  .map-background {
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.lg}) {
      height: 500px;
    }

    @media (max-width: ${breakpoints.md}) {
      height: 400px;
    }

    @media (max-width: ${breakpoints.s}) {
      height: 300px;
    }
  }

  .map-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const ArtistLabel = styled.div<{ $left: string; $top: string }>`
  position: absolute;
  left: ${props => props.$left};
  top: ${props => props.$top};
  background: #EEDDDC;
  padding: 8px 12px;
  border-radius: 3.384px;
  font-family: "Inter", sans-serif;
  font-size: 15.228px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.423px;
  color: #161518;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;

  @media (max-width: ${breakpoints.lg}) {
    font-size: 12px;
    padding: 6px 10px;
    transform: scale(0.9);
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 10px;
    padding: 4px 8px;
    transform: scale(0.8);
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 8px;
    padding: 3px 6px;
    transform: scale(0.7);
  }
`

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0 16px;
    
    /* Hide scrollbar for webkit browsers */
    &::-webkit-scrollbar {
      display: none;
    }
    
    /* Hide scrollbar for firefox */
    scrollbar-width: none;
  }
`

export const InstallationCard = styled.div`
  display: flex;
  min-width: 180px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  max-width: 280px;

  @media (max-width: ${breakpoints.lg}) {
    min-width: 160px;
    max-width: 200px;
    flex-shrink: 0;
  }

  @media (max-width: ${breakpoints.s}) {
    min-width: 140px;
    max-width: 160px;
  }

  .card-image {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: 100%;

    .card-title {
      width: 100%;
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.5px;
      color: #161518;
      margin: 0;

      @media (max-width: ${breakpoints.s}) {
        font-size: 16px;
      }
    }

    .card-subtitle {
      width: 100%;
      font-family: "Inter", sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.5px;
      color: #716B7C;
      margin: 0;

      @media (max-width: ${breakpoints.s}) {
        font-size: 12px;
      }
    }
  }
`
