"use client";

import {
  Toast,
  ToastIcon,
  Toaster,
  toast as reactHotToast,
  resolveValue,
} from "react-hot-toast";

/**
 * Usage: simply import `toast` and call `toast.success("Your text")` in your component.
 */
const ToastProvider = () => {
  return (
    <Toaster position="bottom-left">
      {(toast: Toast) => (
        <div className="center gap-4 w-fit border-2 border-stone-300/80 p-4 pr-6 bg-stone-100 shadow-2xl rounded-full">
          <ToastIcon toast={toast} />
          {resolveValue(toast.message, toast)}
        </div>
      )}
    </Toaster>
  );
};

export default ToastProvider;

export const toast = reactHotToast;
