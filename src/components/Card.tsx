import { memo } from 'react';
import type { GitHubRepo } from '../types.ts';
import { MdOutlineStar, MdOutlineStarOutline } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';
import { colors } from '../colors.ts';

interface CardProps {
  data: GitHubRepo;
  isBookmarked: boolean;
  toggleBookmark: (id: number) => void;
  checked: boolean;
}

function Card({ data, isBookmarked, toggleBookmark, checked }: CardProps) {
  return (
    ((checked && isBookmarked) || !checked) && (
      <div className="m-auto p-4 border border-gray-200 rounded-lg flex flex-col gap-4 bg-white shadow-md w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={data.owner.avatar_url}
              className="w-12 h-12 rounded-full"
            />
            <a
              href={data.owner.html_url}
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {data.owner.login}/{data.name}
            </a>
          </div>
          <button
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer select-none rounded-md text-white ${isBookmarked ? 'bg-blue-600' : 'bg-gray-600'
              } hover:bg-blue-700`}
            onClick={() => toggleBookmark(data.id)}
          >
            {isBookmarked ? (
              <MdOutlineStar size={20} />
            ) : (
              <MdOutlineStarOutline size={20} />
            )}
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
        <p className="text-gray-700">{data.description}</p>
        <div className="flex items-center gap-4 text-gray-600">
          {data.language && (
            <span className="flex items-center gap-2">
              <FaCircle color={colors[data.language]} size={12} />
              {data.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <MdOutlineStarOutline />
            {data.stargazers_count}
          </span>
        </div>
      </div>
    )
  );
}

export default memo(Card);
