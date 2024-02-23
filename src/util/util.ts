import { format, subWeeks } from "date-fns";
import { BASE_URL, DATE_FORMAT } from "../constants/AppConstants";
import { Repository } from "../types";

export const getFilteredRepos = (repositories: Repository[]) => {
  const localStorageRepoIds = localStorage.getItem("repoIds");
  if (localStorageRepoIds) {
    const parsedRepoIds = JSON.parse(localStorageRepoIds);
    const filteredRepos = repositories?.filter((repo: Repository) =>
      parsedRepoIds.includes(repo.id)
    );
    return filteredRepos;
  }
};

export const getUserReposUrl = (loginName: string, repoName: string) => {
  return `${BASE_URL}/${loginName}/${repoName}`;
};

export const getWeeklyDates = () => {
  const today = new Date();
  const todaysDate = format(today, DATE_FORMAT);
  const lastweek = subWeeks(new Date(), 1);
  const formattedLastWeekDate = format(lastweek, DATE_FORMAT);
  return { todaysDate, formattedLastWeekDate };
};
