import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CritterNameForm from "./CritterNameForm";

const CritterContainer = ({ name, born, moodVal }) => {
  const [displayModal, setDisplayModal] = useState(false);
  // convert json date/timestamp to Date
  born = new Date(born);
  // get how many days ago critter was born
  const current = new Date();
  const daysAgo = Math.ceil(
    (current.getTime() - born.getTime()) / (1000 * 60 * 60 * 24)
  );

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
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-full min-w-0 min-h-0 space-y-4 shrink">
      <figure className="flex flex-col justify-center items-center h-full text-center text-indigo-500 border-2 border-indigo-500 aspect-[3/4] max-h-80">
        <p>Critter Image Placeholder</p>
      </figure>
      <ul className="text-xl leading-loose md:text-base md:leading-normal">
        <li>
          <strong className="text-indigo-600">Name:</strong> {name}{" "}
          <PencilIcon className="inline w-5 text-indigo-600 min-h-[42px] min-w-[42px] md:min-h-0 md:min-w-0 hover:text-indigo-400 active:text-indigo-800" 
           onClick={()=> {setDisplayModal(true)}}
          />
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
    {displayModal ? (
        <modal>
          <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*body*/}

                  <div className="p-10 ">
                    <div>
                      <div className="flex flex-wrap justify-center gap-1 px-2 display">
                        <CritterNameForm />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-2 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setDisplayModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </div>
        </modal>
      ) : null}
   
  </>
  );
};

export default CritterContainer;
