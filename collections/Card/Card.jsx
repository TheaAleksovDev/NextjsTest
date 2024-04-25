import {
  CardContainer,
  CardTitle,
  CardImage,
  CardParagraph,
  CardTextContainer,
  CardImageContainer,
} from "./elements";
import Image from "next/image";

export const Card = () => {
  return (
    <CardContainer>
      <CardImageContainer>
        {/* <Image src={"../"}></Image> */}
      </CardImageContainer>
      <CardTextContainer>
        <CardTitle>Brief</CardTitle>
        <CardParagraph>
          Complete brief writing or simple guidance on what to include, we've
          got you covered.
        </CardParagraph>
      </CardTextContainer>
    </CardContainer>
  );
};
