import React from 'react';

// LoadingHS component – a custom loading animation inspired by the
// user‑provided HS SVG design. This implementation uses a simple SVG
// with a rotating ring and a subtle pulse effect. Feel free to replace
// the SVG contents with the exact asset when it becomes available.

export default function LoadingHS() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        className="animate-spin h-12 w-12 text-[#C0392B]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Loading"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.2"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
