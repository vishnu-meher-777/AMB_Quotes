
import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-stone-600 rounded-full shadow-md hover:shadow-lg hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      aria-label="Get new inspiration"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-stone-500 group-hover:text-rose-500 transition-colors duration-300 group-hover:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h5M20 20v-5h-5M4 4l5 5M20 20l-5-5M4 20h5v-5M20 4h-5v5"
        />
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M3 15l6-6m12 12l-6-6" />
      </svg>
      <span className="text-lg font-medium">New Inspiration</span>
    </button>
  );
};

export default ActionButton;
