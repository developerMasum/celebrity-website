"use client";
import { XCircle } from "lucide-react";

type RightStaticMenuProps = {
  showCategories: boolean;
  showAbout: boolean;
  setShowCategories: (value: boolean) => void;
  setShowAbout: (value: boolean) => void;
  handleClose: () => void;
};

export default function RightStaticMenu({
  showCategories,
  showAbout,
  setShowCategories,
  setShowAbout,
  handleClose,
}: RightStaticMenuProps) {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 pr-4">
      <div className="flex flex-col items-end gap-12">
        {/* Categories Button */}
        <div className="h-6">
          {showCategories ? (
            <button
              onClick={handleClose}
              className="text-white hover:text-yellow-500 flex items-center gap-2"
            >
              <XCircle size={18} /> Close
            </button>
          ) : (
            <button
              onClick={() => {
                setShowCategories(true);
                setShowAbout(false);
              }}
              className="text-white hover:text-yellow-500 rotate-90 origin-right whitespace-nowrap"
            >
              Categories
            </button>
          )}
        </div>

        {/* About Button */}
        <div className="h-6">
          {!showCategories &&
            (showAbout ? (
              <button
                onClick={handleClose}
                className="text-white hover:text-yellow-500 flex items-center gap-2"
              >
                <XCircle size={18} /> Close
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAbout(true);
                  setShowCategories(false);
                }}
                className="text-white hover:text-yellow-500 rotate-90 origin-right whitespace-nowrap"
              >
                About
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
