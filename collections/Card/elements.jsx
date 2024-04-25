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
  justify-content: flex-start;
  align-items: center;
`;

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
  height: fit-content;
  padding: 1rem 3rem 1rem 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
  display: flex;
  border-radius: 0.5rem;
`;

export const CardTitle = styled((props) => <SectionTinyHeading {...props} />)`
  margin: 0;
  font-size: 1.125rem;
  line-height: 2rem;
  color: black;
  font-weight: bold;
`;

export const CardParagraph = styled((props) => <SectionParagraph {...props} />)`
  margin: 0;
  width: 15.7rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const CardTextContainer = styled(({ ...props }) => <div {...props} />)``;

export const CardImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 8rem;
`;
