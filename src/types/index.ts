type Owner = {
  id: number;
  avatar_url: string;
  login: string;
};

export type Repository = {
  id: number;
  language: string;
  name: string;
  owner: Owner;
  description: string;
};

export type RepoResponse = {
  total_count: number;
  items: Repository[];
  incomplete_results: boolean;
};

export type FilterProps = {
  isStarred: boolean;
};

export type RepoListProps = {
  repositories: Repository[];
};

export type StarredParams = {
  selected: boolean;
  id: number;
};

export type StarHandlerProps = {
  starred: boolean;
  onStarredChange: ({ selected, id }: StarredParams) => void;
  selectedId: number;
};

export type AvtarChipProps = {
  avtarUrl: string;
  userName: string;
};

export type RadioBtnGroupProps = {
  radionValues: string[];
  onBtnChange: (val: string) => void;
};

export type RepositoryContentProps = {
  repository: Repository;
  starredRepos: number[];
  key: number;
  setStarredRepoIds: (ids: number[]) => void;
};

export type RepositoryHeaderProps = {
  language: string;
  setLanguage: (language: string) => void;
  onRadioBtnChange: (radioValue: string) => void;
};
