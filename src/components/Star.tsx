import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { StarHandlerProps } from "../types";

const StarHandler = ({
  starred,
  onStarredChange,
  selectedId,
}: StarHandlerProps) => {
  const [isStarred, setIsStarred] = useState<boolean>(() => starred);

  const handleChange = () => {
    setIsStarred(() => {
      onStarredChange({ selected: !isStarred, id: selectedId });
      return !isStarred;
    });
  };

  return (
    <Button
      onClick={handleChange}
      className="star-btn"
      variant="contained"
      role="star-btn-role"
      startIcon={isStarred ? <Star className="star-icon" /> : <Star />}
    >
      {isStarred ? "Starred" : "Star"}
    </Button>
  );
};

export default StarHandler;
