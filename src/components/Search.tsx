import React from 'react';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  checked: boolean;
  setIsChecked: (checked: boolean) => void;
  showCheckbox: boolean;
}

const Search: React.FC<SearchProps> = ({
  searchQuery,
  setSearchQuery,
  checked,
  setIsChecked,
  showCheckbox,
}) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <input
        className="w-full max-w-lg p-3 bg-white rounded-md shadow-md"
        autoFocus
        type="text"
        value={searchQuery}
        placeholder="Search for a GitHub repository..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
      />
      {showCheckbox && (
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setIsChecked(!checked)}
            className="mr-2"
          />
          <span>All Bookmarked Only</span>
        </div>
      )}
    </div>
  );
};

export default Search;
