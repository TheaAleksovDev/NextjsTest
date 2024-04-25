import {
  StyledContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTitle,
  StyledTextContainer,
  StyledContentContainer,
} from "./elements";

import { Card } from "../../collections/Card";
import { CardsContainer } from "../../collections/Card/elements";

import Image from "next/image";

const cardsData = [
  {
    title: "Brief",
    desc: "Complete <span style='font-weight: bold;'>brief writing or simple guidance</span> on what to include, we've got you covered.",
    img: "/img/icons/Brief.png",
    img: {
      src: "/img/icons/Brief.png",
      alt: "brief-icon",
      width: 563,
      height: 587,
    },
  },
  {
    title: "Search",
    desc: "In-depth, agency search covering; <span style='font-weight: bold;'>criteria matching</span>, door knocking and due-dilligence vetting.",
    img: {
      src: "/img/icons/Search.png",
      alt: "search-icon",
      width: 584,
      height: 607,
    },
  },
  {
    title: "Pitch",
    desc: "Comperhensive <span style='font-weight: bold;'>pitch management</span> including comms, diary management and pitch hosting.",
    img: {
      src: "/img/icons/Pitch.png",
      alt: "pitch-icon",
      width: 512,
      height: 512,
    },
  },
];

export const MainSection = ({
  image,
  title,
  description,
  background,
  ...props
}) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledContentContainer backgroundUrl={background}>
        <StyledImageContainer>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </StyledImageContainer>
        <CardsContainer>
          {cardsData.map((card, i) => {
            return (
              <Card
                key={i}
                i={i}
                title={card.title}
                desc={card.desc}
                img={card.img}
              />
            );
          })}
        </CardsContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
