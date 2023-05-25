"use client";

import * as React from "react";

export const Button = () => {
  return (
    <button
      className="bg-orange-600 text-white rounded-full"
      onClick={() => alert("Coming soon")}
    >
      Coming soon.
    </button>
  );
};
