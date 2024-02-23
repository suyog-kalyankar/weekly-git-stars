import { Avatar, Chip } from "@mui/material";
import { AvtarChipProps } from "../types";

const AvtarChip = ({ avtarUrl, userName }: AvtarChipProps) => {
  return (
    <Chip
      data-testid="avtar-chip"
      avatar={<Avatar alt="avtar-img" src={avtarUrl} />}
      className="chip"
      label={userName}
    />
  );
};

export default AvtarChip;
