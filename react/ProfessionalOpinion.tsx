import React from "react";
import Title from "./components/shared/title";

interface ProfessionalOpinionProps {
  title: string;
  professional: string;
  opinion: string;
  img: string;
  fontSize: number;
}

const ProfessionalOpinion: StorefrontFunctionComponent<ProfessionalOpinionProps> = ({
  title,
  professional,
  opinion,
  img,
  fontSize,
}: ProfessionalOpinionProps) => {
  return (
    <div>
      <Title fontSize={fontSize}>{title}</Title>
      <div>
        <img src={img} />
        <h5>{professional}</h5>
        <p>{opinion}</p>
      </div>
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
    }
  }
};

export default ProfessionalOpinion;
