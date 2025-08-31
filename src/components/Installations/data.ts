export interface Installation {
  id: number
  name: string
  subtitle: string
  image: string
  mapPosition: {
    left: string
    top: string
  }
}

// Installation data based on the Figma design
export const installationsData: Installation[] = [
  {
    id: 1,
    name: "SheFi Cohort 14",
    subtitle: "Spark",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
    mapPosition: { left: "20px", top: "408px" },
  },
  {
    id: 2,
    name: "LLSky",
    subtitle: "Green Dreams",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
    mapPosition: { left: "240px", top: "67px" },
  },
  {
    id: 3,
    name: "Canessa",
    subtitle: "Create/Destroy",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
    mapPosition: { left: "231px", top: "210px" },
  },
  {
    id: 4,
    name: "Ai Fusion",
    subtitle: "AI Fusion Collective Exhibition",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
    mapPosition: { left: "606px", top: "91px" },
  },
  {
    id: 5,
    name: "oArtistaNFT",
    subtitle: "Pixels & Beyond",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
    mapPosition: { left: "374px", top: "426px" },
  },
  {
    id: 6,
    name: "Farcaster by AwedJob",
    subtitle: "Farcaster Featured Artists",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
    mapPosition: { left: "638px", top: "470px" },
  },
]
