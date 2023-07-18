"use client";

import { toast } from "./ToastProvider";

export const ComingSoonButton = () => {
  return (
    <button
      className="bg-orange-600 text-white p-4 px-6 font-light rounded-full"
      onClick={() => toast.success("Coming soon")}
    >
      Coming soon.
    </button>
  );
};
