import styled from "styled-components";

import {
  SectionContainer,
  SectionTinyHeading,
  SectionParagraph,
  SectionInnerHeading,
} from "~/components";

export const CardsContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  margin: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: flex-start;
`;

export const CardContainer = styled(({ backgroundColor, ...props }) => (
  <div {...props} />
))`
  height: fit-content;
  padding: 1rem 2rem 1rem 0;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px transparent;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 0 0 1px #006efd;
    cursor: pointer;
  }

  &:hover .card-title {
    color: #006efd;
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    transform: scale(0.95);
    transform-origin: left top;
  }
`;

export const CardTitle = styled((props) => <SectionTinyHeading {...props} />)`
  margin: 0;
  font-size: 1.125rem;
  line-height: 2rem;
  color: black;
  font-weight: bold;
  transition: color 0.25s ease, underline 0.25s ease;
`;

export const CardParagraph = styled(({ width, ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
  width: ${({ width }) => width}rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const CardTextContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
`;

export const CardImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImageWrapper = styled(({ ...props }) => <div {...props} />)`
  max-width: 38%;
`;
