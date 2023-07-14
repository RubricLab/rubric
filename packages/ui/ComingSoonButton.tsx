"use client";

export const ComingSoonButton = () => {
  return (
    <button
      className="bg-orange-600 text-white rounded-full"
      onClick={() => alert("Coming soon")}
    >
      Coming soon.
    </button>
  );
};
