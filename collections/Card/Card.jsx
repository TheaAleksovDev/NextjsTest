import {
  CardContainer,
  CardTitle,
  CardImage,
  CardParagraph,
  CardTextContainer,
  CardImageContainer,
  CardImageWrapper,
} from "./elements";
import Image from "next/image";

export const Card = (props) => {
  const getWidth = () => {
    return props.i === 0 ? 15.7 : props.i === 1 ? 18 : 20;
  };

  const getBackgroundColor = () => {
    return props.i === 0 ? "#f9f9f9" : props.i === 1 ? "#F4F4F4" : "#F1F1F1";
  };

  console.log(`${getWidth()}`);
  return (
    <CardContainer backgroundColor={getBackgroundColor()}>
      <CardImageContainer>
        <CardImageWrapper>
          <Image src={props.img}></Image>
        </CardImageWrapper>
      </CardImageContainer>
      <CardTextContainer>
        <CardTitle className="card-title">{props.title}</CardTitle>
        <CardParagraph
          width={getWidth()}
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></CardParagraph>
      </CardTextContainer>
    </CardContainer>
  );
};
