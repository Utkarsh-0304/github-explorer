import { memo } from 'react';
import type { GitHubRepo } from './types';
import { MdOutlineStar, MdOutlineStarOutline } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';
import { colors } from './colors.ts';

interface CardProps {
  data: GitHubRepo;
  isBookmarked: boolean;
  toggleBookmark: (id: number) => void;
  checked: boolean;
}

function Card({ data, isBookmarked, toggleBookmark, checked }: CardProps) {
  return (
    ((checked && isBookmarked) || !checked) && (
      <div className="mt-[1rem] p-[1rem] border border-gray-300 rounded rounded-[8px] flex flex-col gap-[2rem] bg-white shadow-md min-w-[400px] max-w-[550px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1rem]">
            <img
              src={data.owner.avatar_url}
              className="w-[40px] h-[40px] rounded-[50%]"
            />
            <a href={data.owner.html_url} className="hover:underline">
              {data.owner.login}/{data.name}
            </a>
          </div>
          <div
            className="flex items-center gap-[0.2rem] border border-gray-500 px-3 py-2 cursor-pointer bg-[#f1f1f1] select-none rounded-[2px]
          "
            onClick={() => toggleBookmark(data.id)}
          >
            {isBookmarked ? (
              <MdOutlineStar size={20} />
            ) : (
              <MdOutlineStarOutline size={20} />
            )}
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </div>
        </div>
        {data.description}
        <div className="flex items-center gap-[1rem]">
          {data.language && (
            <span className="flex gap-[0.5rem] items-center">
              <FaCircle color={colors[data.language]} size={10} />
              {data.language}
            </span>
          )}
          <span className="flex gap-[0.2rem] items-center">
            <MdOutlineStarOutline />
            {data.stargazers_count}
          </span>
        </div>
      </div>
    )
  );
}

export default memo(Card);
