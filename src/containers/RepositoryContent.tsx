import { Grid, Link, Typography } from "@mui/material";
import { RepositoryContentProps, StarredParams } from "../types";
import AvtarChip from "../components/AvtarChip";
import { REPO_LINK } from "../constants/AppConstants";
import { getUserReposUrl } from "../util/util";
import {
  BadgeOutlined,
  DescriptionOutlined,
  LanguageOutlined,
} from "@mui/icons-material";
import StarHandler from "../components/Star";

const RepositoryContent = ({
  repository,
  starredRepos,
  setStarredRepoIds,
}: RepositoryContentProps) => {
  const handleStarChange = (starredRepo: StarredParams) => {
    const localStorageRepoIds = localStorage.getItem("repoIds");
    let repositoryIds: number[];
    if (starredRepo.selected) {
      if (
        localStorageRepoIds &&
        localStorageRepoIds !== "undefined" &&
        localStorageRepoIds !== "null"
      ) {
        repositoryIds = [...JSON.parse(localStorageRepoIds), starredRepo.id];
      } else {
        repositoryIds = [starredRepo.id];
      }
    } else {
      repositoryIds =
        localStorageRepoIds &&
        JSON.parse(localStorageRepoIds)?.filter(
          (id: number) => id !== starredRepo.id
        );
    }
    localStorage.setItem("repoIds", JSON.stringify(repositoryIds));
    setStarredRepoIds(repositoryIds);
  };

  return (
    <Grid
      xs={12}
      item
      className="repo-content"
      sx={{
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Grid className="initial-content">
        <AvtarChip
          userName={repository?.owner?.login}
          avtarUrl={repository?.owner?.avatar_url}
        />
        <Typography className="center-align" variant="body2">
          <LanguageOutlined /> &nbsp; {repository?.language || "-"}
        </Typography>
      </Grid>
      <Grid className="mid-content">
        <Typography className="center-align" variant="body2">
          <BadgeOutlined /> &nbsp; {repository?.name || "-"}
        </Typography>
        <Typography className="center-align" variant="body2">
          <DescriptionOutlined /> &nbsp;{" "}
          {repository?.description || "No description available"}
        </Typography>
        <Link
          href={getUserReposUrl(repository.owner.login, repository?.name)}
          target="_blank"
          sx={{ color: "midnightblue" }}
        >
          {REPO_LINK}
        </Link>
      </Grid>
      <StarHandler
        selectedId={repository.id}
        onStarredChange={handleStarChange}
        starred={starredRepos?.includes(repository.id) ? true : false}
      />
    </Grid>
  );
};

export default RepositoryContent;
