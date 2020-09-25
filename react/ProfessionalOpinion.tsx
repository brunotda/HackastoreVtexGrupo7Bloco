import React, { useState } from "react";
import Image from "./components/shared/image";
import Title from "./components/shared/title";
import './style.global.css'

interface ProfessionalOpinionProps {
  title: string;
  professional: string;
  opinion: string;
  img: string;
  fontSize: number;
  imageSize: number;
  titleColor: string;
  textDistance: number;
  characterLimit: number;
}

const ProfessionalOpinion: StorefrontFunctionComponent<ProfessionalOpinionProps> = ({
  title,
  professional,
  opinion,
  img,
  fontSize,
  imageSize,
  textDistance,
  characterLimit
}: ProfessionalOpinionProps) => {
  const [ showFullOpinion, setShowFullOpinion ] = useState(false);
  const formatedOpinionText = opinion ? [...opinion].reduce((acc, letter, index) => {
    if (index === characterLimit) return acc += '...';
    if (index > characterLimit) return acc;

    return acc += letter;
  }, '') : '';

  const handleClickOpinion = () => {
    setShowFullOpinion(!showFullOpinion);
  }

  return (
    <div className='opition__container'>
      <Title fontSize={fontSize ?? 20} margin={0}>{title}</Title>
      <div className='opinion__name-wrapper'>
        <Image src={img} size={imageSize ?? 20} />
        <Title fontSize={15} margin={textDistance}>{professional}</Title>
      </div>
        <p onClick={handleClickOpinion}>{showFullOpinion ? opinion : formatedOpinionText}</p>
    </div>
  );
};

ProfessionalOpinion.schema = {
  title: "Professional Opinion",
  description: "Opinião do profissional",
  type: "object",
  properties: {
    title: {
      title: "Título",
      description: "Título da Opinião profissional",
      type: "string",
      default: "Opinião Profissional",
    },

    img: {
      type: "string",
      title: "Imagem",
      widget: {
        "ui:widget": "image-uploader",
      },
    },

    professional: {
      title: "Profissional",
      description: "Nome do profissional",
      type: "string",
      default: null,
    },

    opinion: {
      title: "Opinião",
      description: "Opnião do profissional",
      type: "string",
      default: null,
    },

    fontSize: {
      title: "Tamanho da fonte",
      type: "number",
      default: 20,
    },

    imageSize: {
      title: "Tamanho da imagem",
      type: "number",
      default: 20,
    },

    textDistance: {
      title: "Espaçamento nome profissional",
      type: "number",
      default: 20,
    },

    characterLimit: {
      title: "Limite de caracteres da opinião",
      type: "number",
      default: 9999,
    },

  }
};

export default ProfessionalOpinion;
