"use client";

export const ContactButton = ({ body }: { body: string }) => {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-3xl font-thin p-5 text-white  w-full sm:w-fit rounded-full center"
      onClick={() => {
        navigator.clipboard.writeText(body);
        alert("Email copied to clipboard");
      }}
    >
      {body}
    </button>
  );
};
