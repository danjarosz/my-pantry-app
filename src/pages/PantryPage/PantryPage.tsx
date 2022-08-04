import type { FC } from "react";
import { useParams } from "react-router-dom";

const PantryPage: FC = () => {
  const params = useParams();

  return (
    <div>
      <h1>
        Pantry Page: <span>{params?.pantryUuid}</span>
      </h1>
    </div>
  );
};

export default PantryPage;
