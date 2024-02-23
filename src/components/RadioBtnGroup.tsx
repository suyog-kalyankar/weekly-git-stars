import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
} from "@mui/material";
import { RadioBtnGroupProps } from "../types";
import { RADIO_BTN_GRP_LABEL } from "../constants/AppConstants";

const RadioBtnGroup = ({ radionValues, onBtnChange }: RadioBtnGroupProps) => {
  const handleChange = (e: SelectChangeEvent) => {
    onBtnChange(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{RADIO_BTN_GRP_LABEL}</FormLabel>
      <RadioGroup
        defaultValue="All"
        sx={{ flexDirection: "row" }}
        onChange={handleChange}
      >
        {radionValues?.map((val: string, index: number) => {
          return (
            <FormControlLabel
              value={val}
              key={index}
              control={<Radio />}
              label={val}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBtnGroup;
