"use client";
import { Dot, X, XCircle } from "lucide-react";

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
    <div className="fixed top-0 right-0 h-screen w-20 z-50 bg-black/60 backdrop-blur-md rounded-l-lg flex items-center justify-center">
      <div className="flex flex-col items-center justify-between h-48 w-full">
        {/* Categories Button */}
        <div className="w-full text-center">
          {showCategories ? (
            // Show Close button ONLY replacing Categories button
            <button
              onClick={handleClose}
              className="text-white hover:text-yellow-500 flex flex-col items-center w-full"
            >
              <X size={18} />
              <span className="pl-8 transform rotate-90 origin-center text-sm block uppercase">
                Close
              </span>
            </button>
          ) : (
            // Show Categories button if not active
            <button
              onClick={() => {
                setShowCategories(true);
                setShowAbout(false);
              }}
              className="text-white hover:text-yellow-500 w-full"
            >
              <span className="transform rotate-90 origin-center text-sm block uppercase">
                Categories
              </span>
            </button>
          )}
        </div>

        {/* Dot Divider */}
        <Dot size={40} className="text-yellow-500 " />

        {/* About Button */}
        <div className="w-full text-center">
          {showAbout ? (
            // Show Close button ONLY replacing About button
            <button
              onClick={handleClose}
              className="text-white hover:text-yellow-500 flex flex-col items-center w-full"
            >
              <X size={18} />
              <span className="pl-8 transform rotate-90 origin-center text-sm block uppercase">
                Close
              </span>
            </button>
          ) : (
            // Show About button if not active
            <button
              onClick={() => {
                setShowAbout(true);
                setShowCategories(false);
              }}
              className="text-white hover:text-yellow-500 w-full"
            >
              <span className="transform rotate-90 origin-center text-sm block uppercase">
                About
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
