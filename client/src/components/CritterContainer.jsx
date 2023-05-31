import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid";

const CritterContainer = () => {
  // collapse/expand state
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div
      className={`flex flex-col w-full ${
        open ? `md:min-w-[277px] md:basis-1/4` : `md:min-w-fit md:basis-0`
      } bg-indigo-200 rounded-xl p-2 justify-between space-y-4 min-h-0`}
    >
      {/* collapse/expand button */}
      <button
        onClick={toggle}
        className="self-end text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-800 rounded min-h-[42px] min-w-[42px] md:min-w-fit md:min-h-fit md:max-h-fit md:p-0.5 shrink"
      >
        {/* up/down for mobile */}
        {open ? (
          <ChevronUpIcon className="block w-6 mx-auto md:hidden" />
        ) : (
          <ChevronDownIcon className="block w-6 mx-auto md:hidden" />
        )}
        {/* left/right for desktop */}
        {open ? (
          <ChevronLeftIcon className="hidden w-6 mx-auto md:block" />
        ) : (
          <ChevronRightIcon className="hidden w-6 mx-auto md:block" />
        )}
      </button>
      {/* image and stat list */}
      {open && <div className="flex flex-col items-center justify-center w-full h-full min-w-0 min-h-0 space-y-4 shrink">
        <figure className="flex flex-col justify-center items-center h-full text-center text-indigo-500 border-2 border-indigo-500 aspect-[3/4] max-h-80">
          <p>Critter Image Placeholder</p>
        </figure>
        <ul className="text-base">
          <li>
            <strong className="text-indigo-600">Name:</strong> Little Guy{" "}
            <PencilIcon className="inline h-5 text-indigo-600" />
          </li>
          <li>
            <strong className="text-indigo-600">Born:</strong> May 30, 2023 (3
            days ago)
          </li>
          <li>
            <strong className="text-indigo-600">Status:</strong> Stressed
          </li>
        </ul>
      </div>}
    </div>
  );
};

export default CritterContainer;
