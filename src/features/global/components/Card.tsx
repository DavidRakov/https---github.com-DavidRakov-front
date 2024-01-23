import { FC } from "react";
import { StyledCard } from "../styles/components/CardStyled";

type CardProps = {
  item: {
    id: number;
    title: string;
    body: string;
    image: string;
  };
};
export const Card: FC<CardProps> = ({ item: { id, title, body, image } }) => {
  const layout = id % 2 === 0 ? "row-reverse" : undefined;

  return (
    <StyledCard layout={layout}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};
