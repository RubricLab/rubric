"use client";

import { toast } from "./ToastProvider";
import { copyToClipboard } from "./utils";

export const ContactButton = ({ body }: { body: string }) => {
  return (
    <button
      className="bg-orange-600 hover:bg-orange-500 transition-colors duration-200 text-3xl font-extralight py-4 px-6 text-white w-full sm:w-fit rounded-full center"
      onClick={() => {
        copyToClipboard(body, {
          onSuccess: () => {
            toast.success("Copied to clipboard!");
          },
          onError: (err) => {
            toast.error(err?.message || "Failed to copy. Please try manually.");
          },
        });
      }}
    >
      {body}
    </button>
  );
};
