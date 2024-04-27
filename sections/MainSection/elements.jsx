import styled from "styled-components";
import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
} from "~/components";

import { Card as CardComponent } from "../../collections/Card";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  margin: 6rem auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;
  line-height: 3.2rem;

  @media screen and (min-width: 600px and max-width: 1024px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 600px) {
    line-height: 2rem;
    font-size: 1.5rem;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  text-align: center;
  line-height: 1.8rem;
  font-weight: 400;

  @media screen and (min-width: 600px and max-width: 1024px) {
    font-size: 1.15rem;
  }
  @media screen and (max-width: 600px) {
    line-height: 1.3rem;

    font-size: 0.9rem;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 20rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 600px and max-width: 1024px) {
    width: 17.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 14rem;
  }
`;

export const StyledContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  margin-top: 3rem;
  background: url(${({ background }) => background}) no-repeat;
  background-size: contain;
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    background-size: 150%;
    background-position-x: -4.5rem;
    width: 100%;
    gap: 3rem;
  }
`;

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

  @media screen and (max-width: 600px) {
    gap: 1.8rem;
  }
`;

export const Card = ({ ...props }) => {
  return <CardComponent {...props} />;
};
