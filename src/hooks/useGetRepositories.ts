import { useEffect, useState } from "react";
import { getRepositories } from "../services/repositoriesAPI";
import { RepoResponse, Repository } from "../types";

const useGetRepositories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRepositories = () => {
      getRepositories()
        .then((repos: RepoResponse) => {
          setRepositories(repos.items);
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };
    fetchRepositories();
  }, []);

  return { repositories, isLoading, error };
};

export default useGetRepositories;
