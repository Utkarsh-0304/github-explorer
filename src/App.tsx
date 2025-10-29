import { useCallback, useEffect, useState } from 'react';
import type { GitHubApiResponse } from './types';
import useDebounce from './hooks/useDebounce';
import Search from './components/Search';
import RepoList from './components/RepoList';
import Status from './components/Status';

import Header from './components/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [data, setData] = useState<GitHubApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [checked, setIsChecked] = useState<boolean>(false);

  const debouncedSearchTerm = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      fetch(
        `https://api.github.com/search/repositories?q=${debouncedSearchTerm}&per_page=30`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const stored = localStorage.getItem('bookmarkedRepos');
    if (stored) setBookmarks(JSON.parse(stored));
  }, []);

  const toggleBookmark = useCallback(
    (id: number) => {
      let updated;
      if (bookmarks.includes(id)) {
        updated = bookmarks.filter((b) => b !== id);
      } else {
        updated = [...bookmarks, id];
      }
      setBookmarks(updated);
      localStorage.setItem('bookmarkedRepos', JSON.stringify(updated));
    },
    [bookmarks]
  );

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="p-4 w-full max-w-4xl">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          checked={checked}
          setIsChecked={setIsChecked}
          showCheckbox={data !== null}
        />
        <Status loading={loading} error={error} data={data} checked={checked} />
        {data && !loading && (
          <RepoList
            repos={data.items}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
            checked={checked}
          />
        )}
      </div>
    </div>
  );
}

export default App;
