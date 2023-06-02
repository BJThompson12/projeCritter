import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid";
import { RiAddLine } from "react-icons/ri";

const CritterContainer = ({ name, born, moodVal }) => {
  // collapse/expand state
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  }

  // convert json date/timestamp to Date
  born = new Date(born);
  // get how many days ago critter was born
  const current = new Date();
  const daysAgo = Math.ceil((current.getTime() - born.getTime()) / (1000 * 60 * 60 * 24));

  // get status from moodVal
  let status;
  if (moodVal >= 90) {
    status = "Happy";
  } else if (moodVal >= 75) {
    status = "Chipper";
  } else if (moodVal >= 50) {
    status = "Content";
  } else if (moodVal >= 40) {
    status = "Nervous";
  } else if (moodVal >= 25) {
    status = "Stressed";
  } else if (moodVal >= 10) {
    status = "Panicking";
  } else {
    status = "Wiped Out";
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col w-full grow shrink-0 basis-full ${
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
        {/* TODO: pencil edits critter name */}
        {open && (
          <div className="flex flex-col items-center justify-center w-full h-full min-w-0 min-h-0 space-y-4 shrink">
            <figure className="flex flex-col justify-center items-center h-full text-center text-indigo-500 border-2 border-indigo-500 aspect-[3/4] max-h-80">
              <p>Critter Image Placeholder</p>
            </figure>
            <ul className="text-xl leading-loose md:text-base md:leading-normal">
              <li>
                <strong className="text-indigo-600">Name:</strong> {name}{" "}
                <PencilIcon className="inline w-5 text-indigo-600 min-h-[42px] min-w-[42px] md:min-h-0 md:min-w-0 hover:text-indigo-400 active:text-indigo-800" />
              </li>
              <li>
                <strong className="text-indigo-600">Born:</strong>{" "}
                {`${new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                  born
                )} ${born.getDate()}, ${born.getFullYear()} (${daysAgo} day${
                  daysAgo !== 1 ? "s" : ""
                } ago)`}
              </li>
              <li>
                <strong className="text-indigo-600">Status:</strong> {status}
              </li>
            </ul>
          </div>
        )}
      </div>
      <button className="text-xl md:text-base w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-400 active:bg-indigo-800 min-h-[42px] min-w-[42px] md:min-w-fit md:min-h-fit">
        <RiAddLine className="inline-block text-white" />
        <span className="inline md:hidden"> Add Task</span>
        {/* hide text and only show + when the column is collapsed on desktop */}
        <span className="hidden md:inline">{open && " Add Task"}</span>
      </button>
    </div>
  );
};

export default CritterContainer;
