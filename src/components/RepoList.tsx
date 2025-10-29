import React from 'react';
import Card from './Card';
import type { GitHubRepo } from '../types';

interface RepoListProps {
  repos: GitHubRepo[];
  bookmarks: number[];
  toggleBookmark: (id: number) => void;
  checked: boolean;
}

const RepoList: React.FC<RepoListProps> = ({
  repos,
  bookmarks,
  toggleBookmark,
  checked,
}) => {
  if (repos.length === 0) {
    return <p className="text-center mt-4">No Repositories Found</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {repos.map((repo) => (
        <Card
          key={repo.id}
          data={repo}
          isBookmarked={bookmarks.includes(repo.id)}
          toggleBookmark={toggleBookmark}
          checked={checked}
        />
      ))}
    </div>
  );
};

export default RepoList;
