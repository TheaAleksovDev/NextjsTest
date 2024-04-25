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
    desc: "Complete **brief writing or simple guidance** on what to include, we've got you covered",
    img: "../../",
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
          <Card></Card>
          <Card></Card>

          <Card></Card>
        </CardsContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
