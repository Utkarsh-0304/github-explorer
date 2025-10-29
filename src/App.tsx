import React, { useCallback, useEffect, useState } from 'react';
import Card from './Card';
import type { GitHubApiResponse } from './types';

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

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

  const toggleBookmark = useCallback((id: number) => {
    let updated;
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
    } else {
      updated = [...bookmarks, id];
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarkedRepos', JSON.stringify(updated));
  }, [bookmarks]);

  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <input
        className="w-[50%] p-[0.7rem] bg-white rounded-md"
        autoFocus
        type="text"
        value={searchQuery}
        placeholder="Enter something here"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
      />
      {data && (
        <div className="mt-[1rem] flex gap-[0.4rem] text-center">
          <input
            type="checkbox"
            checked={checked}
            onClick={() => setIsChecked((prev) => !prev)}
          />
          All Bookmarked only
        </div>
      )}
      {data && !loading && !checked && (
        <div>{data?.items.length} Result(s)</div>
      )}
      {(error && <p className="text-red-500">{error}</p>) ||
        (loading && <p className="text-center">Loading...</p>) ||
        (data &&
          (data.items.length === 0 ? (
            <p>No Repositories Found</p>
          ) : (
            <div>
              {data.items.map((dat) => (
                <Card
                  key={dat.id}
                  data={dat}
                  isBookmarked={bookmarks.includes(dat.id)}
                  toggleBookmark={toggleBookmark}
                  checked={checked}
                />
              ))}
            </div>
          )))}
    </div>
  );
}

export default App;
