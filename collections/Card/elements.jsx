import styled from "styled-components";

import {
  SectionContainer,
  SectionTinyHeading,
  SectionParagraph,
  SectionInnerHeading,
} from "~/components";

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
`;

export const CardTitle = styled((props) => <SectionTinyHeading {...props} />)`
  margin: 0;
  font-size: 1.125rem;
  line-height: 2rem;
  color: black;
  font-weight: bold;
  transition: color 0.25s ease, underline 0.25s ease;

  @media screen and (max-width: 1024px) {
    line-height: 1.5rem;
  }
`;

export const CardParagraph = styled(({ index, ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
  width: ${({ index }) => (index === 0 ? 16 : index === 1 ? 18 : 20)}rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;

  @media screen and (max-width: 1024px) {
    width: ${({ index }) => (index === 0 ? 14.2 : index === 1 ? 16 : 18)}rem;
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
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

  @media screen and (max-width: 1024px) {
    max-width: 35%;
  }
`;
