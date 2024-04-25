import {
  StyledContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTitle,
  StyledTextContainer,
  StyledContentContainer,
} from "./elements";

import Image from "next/image";

export const MainSection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledContentContainer>
        <StyledImageContainer>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </StyledImageContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
