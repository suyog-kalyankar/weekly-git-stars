import { Grid, TextField, Typography } from "@mui/material";
import RadioBtnGroup from "../components/RadioBtnGroup";
import {
  LANGUAGE_FILTER_LABEL,
  REPOSITORIES,
  STARRED_DROPDOWN_VALUES,
} from "../constants/AppConstants";
import { ChangeEvent } from "react";
import { RepositoryHeaderProps } from "../types";

const RepositoryHeader = ({
  language,
  setLanguage,
  onRadioBtnChange,
}: RepositoryHeaderProps) => {
  const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };

  const handleRadionBtnChange = (radioValue: string) => {
    onRadioBtnChange(radioValue);
  };

  return (
    <Grid>
      <Typography m="1rem" variant="h5">
        {REPOSITORIES}
      </Typography>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <RadioBtnGroup
            radionValues={STARRED_DROPDOWN_VALUES}
            onBtnChange={handleRadionBtnChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label={LANGUAGE_FILTER_LABEL}
            type="search"
            value={language}
            onChange={handleLanguageChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RepositoryHeader;
