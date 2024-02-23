import { Grid, Typography } from "@mui/material";
import useGetRepositories from "../hooks/useGetRepositories";
import { Repository } from "../types";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import {
  ERROR_MESSAGE,
  NO_REPO_AVAILABLE,
  STARRED_REPO,
} from "../constants/AppConstants";
import { getFilteredRepos } from "../util/util";
import RepositoryContent from "./RepositoryContent";
import useDebounce from "../hooks/useDebounce";
import RepositoryHeader from "./RepositoryHeader";

const Repositories = () => {
  const { repositories, isLoading, error } = useGetRepositories();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [starredRepositoryIDs, setStarredRepositoryIDs] = useState<number[]>(
    []
  );
  const [radioBtnValue, setRadioBtnValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const { value } = useDebounce(language);

  useEffect(() => {
    const localStorageRepoIds = localStorage.getItem("repoIds");
    if (localStorageRepoIds && localStorageRepoIds !== null) {
      setStarredRepositoryIDs(JSON.parse(localStorageRepoIds));
    } else {
      localStorage.setItem("repoIds", "");
    }
  }, []);

  useEffect(() => {
    if (value && radioBtnValue === STARRED_REPO) {
      const filteredRepositories = getFilteredRepos(repositories);
      const filterRepositoriesWithLanguage = filteredRepositories?.filter(
        (repo: Repository) => repo?.language?.includes(value)
      );
      setRepos(
        filterRepositoriesWithLanguage ? filterRepositoriesWithLanguage : []
      );
    } else if (!value && radioBtnValue === STARRED_REPO) {
      const filteredRepositories = getFilteredRepos(repositories);
      setRepos(filteredRepositories ? filteredRepositories : []);
    } else if (value && radioBtnValue !== STARRED_REPO) {
      const filterRepositoriesWithLanguage = repositories?.filter(
        (repo: Repository) => repo?.language?.includes(value)
      );
      setRepos(filterRepositoriesWithLanguage);
    } else if (repositories?.length) {
      setRepos(repositories);
    }
  }, [value, radioBtnValue, repositories]);

  const handleStarRadionBtnChange = (radioValue: string) => {
    setRadioBtnValue(radioValue);
  };

  if (isLoading && !repos?.length) {
    return <Loader />;
  }

  if (error && !isLoading) {
    return <Typography variant="body2">{ERROR_MESSAGE}</Typography>;
  }

  return (
    <Grid container justifyContent="center" flexDirection="column">
      <RepositoryHeader
        language={language}
        setLanguage={setLanguage}
        onRadioBtnChange={handleStarRadionBtnChange}
      />
      <Grid item m="1rem">
        <Grid container gap="1rem">
          {repos?.length ? (
            repos?.map((repository: Repository) => {
              return (
                <RepositoryContent
                  repository={repository}
                  starredRepos={starredRepositoryIDs}
                  key={repository.id}
                  setStarredRepoIds={setStarredRepositoryIDs}
                />
              );
            })
          ) : (
            <Grid className="no-repositories">
              <Typography>{NO_REPO_AVAILABLE}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Repositories;
