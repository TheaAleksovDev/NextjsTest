import {
  CardContainer,
  CardTitle,
  CardParagraph,
  CardTextContainer,
  CardImageContainer,
  CardImageWrapper,
} from "./elements";
import Image from "next/image";

export const Card = (props) => {
  const getBackgroundColor = () => {
    return props.i === 0 ? "#f9f9f9" : props.i === 1 ? "#F4F4F4" : "#F1F1F1";
  };

  const handleCardClick = () => {
    if (props.link) {
      window.open(props.link, "_blank");
    }
  };

  return (
    <CardContainer
      backgroundColor={getBackgroundColor()}
      onClick={handleCardClick}
    >
      <CardImageContainer>
        <CardImageWrapper>
          <Image src={props.img}></Image>
        </CardImageWrapper>
      </CardImageContainer>
      <CardTextContainer>
        <CardTitle className="card-title">{props.title}</CardTitle>
        <CardParagraph
          index={props.i}
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></CardParagraph>
      </CardTextContainer>
    </CardContainer>
  );
};
