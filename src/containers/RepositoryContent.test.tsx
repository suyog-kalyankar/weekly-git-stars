import React from "react";
import { render, screen } from "@testing-library/react";
import RepositoryContent from "./RepositoryContent";

describe("RepositoryContent Component", () => {
  const repositoryMock = {
    id: 1,
    owner: {
      id: 25,
      login: "suyog",
      avatar_url: "https://github-repo.com/avatar.png",
    },
    language: "JavaScript",
    name: "test-repo",
    description: "This is a JavaScript repository",
  };

  const starredReposMock = [1, 2, 3];

  const setStarredRepoIdsMock = jest.fn();

  it("renders without crashing", () => {
    const { container } = render(
      <RepositoryContent
        key={repositoryMock.id}
        repository={repositoryMock}
        starredRepos={starredReposMock}
        setStarredRepoIds={setStarredRepoIdsMock}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("displays repository information correctly", () => {
    render(
      <RepositoryContent
        repository={repositoryMock}
        key={repositoryMock.id}
        starredRepos={starredReposMock}
        setStarredRepoIds={setStarredRepoIdsMock}
      />
    );

    expect(screen.getByText(repositoryMock.language)).toBeInTheDocument();
    expect(screen.getByText(repositoryMock.name)).toBeInTheDocument();
    expect(screen.getByText(repositoryMock.description)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      expect.stringContaining(repositoryMock.owner.login)
    );
  });
});
