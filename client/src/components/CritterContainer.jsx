import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CritterNameForm from "./CritterNameForm";
import "./CritterContainer.css"

const CritterContainer = ({ name, born, moodVal }) => {
  const [displayModal, setDisplayModal] = useState(false);

  // hover detection for wave animation
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  
  // birth date calculations
  born = new Date(born);
  const current = new Date();
  const daysAgo = Math.floor(
    (current.getTime() - born.getTime()) / (1000 * 60 * 60 * 24)
  );

  // get status from moodVal
  let status;
  if (moodVal <= 0) {
    status = "Happy";
  } else if (moodVal <= 2.5) {
    status = "Chipper";
  } else if (moodVal <= 5) {
    status = "Content";
  } else if (moodVal <= 7.5) {
    status = "Nervous";
  } else if (moodVal <= 8.75) {
    status = "Stressed";
  } else if (moodVal <= 10) {
    status = "Panicking";
  } else {
    status = "Wiped-Out";
  }

  // critter styling
  const critterLight = "#ffffff";
  const critterEyes = "#6366f1";
  const critterDark = "#000000";
  const critterMouth = "#FFCCCC";
  const critterStyles = {
    mouthline: {
      fill: "none",
      stroke: critterDark,
      strokeWidth: 12,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
    },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full min-w-0 min-h-0 space-y-4 shrink">
        <figure className="flex flex-col items-center justify-center w-full h-full min-h-0 text-indigo-500 max-h-80">
          <svg
            version="1.1"
            id="critter"
            viewBox="0 0 810 1080"
            preserveAspectRatio="xMinYMin meet"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={"blink " + status}
          >
            <g id="critter">
              <g id="leg-left" className="transformable">
                <path
                  fill={critterDark}
                  d="M339.99,806.34c5.07,50.46,5.81,103.41,1.8,153.98c-2.51,31.63-16.6,119.68-49.26,119.68s-46.75-88.05-49.26-119.68
			c-4.01-50.57-4.44-103.72,1.8-153.98C257.73,704.61,329.77,704.61,339.99,806.34z"
                />
              </g>
              <g id="leg-right" className="transformable">
                <path
                  fill={critterDark}
                  d="M565.31,806.34c5.07,50.46,5.81,103.41,1.8,153.98c-2.51,31.63-16.6,119.68-49.26,119.68s-46.75-88.05-49.26-119.68
			c-4.01-50.57-4.44-103.72,1.8-153.98C483.05,704.61,555.09,704.61,565.31,806.34z"
                />
              </g>
              <g id="arms" className="transformable">
                <g id="arm-left" className="transformable">
                  <path
                    fill={critterDark}
                    d="M335.05,683.15c-16.42,38.81-37.62,77.26-61.96,111.64c-15.22,21.5-63.78,77.81-92.1,61.56
                      c-28.33-16.25-4.23-86.59,6.65-110.59c17.39-38.37,38.93-76.81,65.09-109.85C305.66,569.06,368.15,604.9,335.05,683.15z"
                  />
                </g>
                <g
                  id="arm-right"
                  className={`transformable ${
                    hover && status !== "Wiped-Out" ? "wave" : undefined
                  }`}
                >
                  <path
                    fill={critterDark}
                    d="M474.95,683.15c16.42,38.81,37.62,77.26,61.96,111.64c15.22,21.5,63.78,77.81,92.1,61.56
                      c28.33-16.25,4.23-86.59-6.65-110.59c-17.39-38.37-38.93-76.81-65.09-109.85C504.34,569.06,441.85,604.9,474.95,683.15z"
                  />
                </g>
              </g>
              <g id="body">
                <g id="body-main" className="transformable">
                  <g>
                    <path
                      fill={critterLight}
                      d="M405,981.96c-31.55,0-63.73-11.05-90.62-31.12c-26.83-20.03-46.54-47.63-55.49-77.73
					c-9.22-31.02-10.16-65.38-2.8-102.13c6.11-30.5,18.14-63.52,35.75-98.17c20.96-41.22,57.6-90.37,113.15-90.37
					c55.55,0,92.19,49.14,113.15,90.37c17.61,34.65,29.64,67.68,35.75,98.17c7.37,36.75,6.43,71.11-2.8,102.13
					c-8.95,30.1-28.66,57.71-55.49,77.73C468.73,970.91,436.55,981.96,405,981.96z"
                    />
                    <path
                      fill={critterDark}
                      d="M405,576.44v12c52.51,0,87.61,47.36,107.8,87.09c17.36,34.16,29.21,66.67,35.22,96.63c7.17,35.78,6.28,69.17-2.67,99.24
					c-8.58,28.87-27.52,55.37-53.33,74.63c-25.86,19.3-56.77,29.93-87.03,29.93c-30.26,0-61.17-10.63-87.03-29.93
					c-25.8-19.26-44.74-45.77-53.33-74.63c-8.94-30.07-9.84-63.46-2.67-99.24c6-29.96,17.85-62.47,35.22-96.63
					c20.19-39.73,55.29-87.09,107.8-87.09V576.44 M405,576.44c-56.57,0-94.99,47.4-118.5,93.65
					c-31.66,62.29-53.98,135.36-33.36,204.73C272.38,939.5,337.03,987.96,405,987.96s132.62-48.45,151.86-113.14
					c20.63-69.37-1.7-142.44-33.36-204.73C499.99,623.84,461.57,576.44,405,576.44L405,576.44z"
                    />
                  </g>
                </g>
                <path
                  id="body-stripe"
                  fill={critterDark}
                  d="M286.5,670.08c-15.11,29.73-28.1,61.93-35.3,95c65.5-31.18,242.09-31.18,307.59,0
			c-7.2-33.07-20.18-65.27-35.3-95c-23.51-46.25-61.93-93.65-118.5-93.65C348.43,576.44,310.01,623.84,286.5,670.08z"
                />
              </g>
              <g id="head" className="transformable">
                <g id="ears" className="transformable">
                  <g id="ear-left">
                    <circle
                      fill={critterDark}
                      id="ear-outer"
                      cx="135"
                      cy="135"
                      r="135"
                    />
                  </g>
                  <g id="ear-right">
                    <circle
                      fill={critterDark}
                      id="ear-outer"
                      cx="675"
                      cy="135"
                      r="135"
                    />
                  </g>
                </g>
                <g id="head-main">
                  <g>
                    <path
                      fill={critterLight}
                      d="M405,650.69c-19.71,0-39.66-0.94-59.28-2.8c-99.79-9.45-183.1-35.65-240.93-75.78
					C39.24,526.61,6,464.1,6,386.31c0-101.87,40.05-197,112.77-267.87C192.97,46.13,294.62,6.31,405,6.31
					c110.38,0,212.03,39.82,286.23,112.13C763.95,189.3,804,284.44,804,386.31c0,77.79-33.24,140.3-98.79,185.8
					c-57.83,40.13-141.14,66.34-240.93,75.78C444.66,649.75,424.71,650.69,405,650.69z"
                    />
                    <path
                      fill={critterDark}
                      d="M405,12.31c55.56,0,108.62,10.01,157.7,29.76c46.96,18.89,88.79,46.03,124.33,80.67
					c35.08,34.19,62.54,74.2,81.61,118.91C788.12,287.31,798,335.98,798,386.31c0,75.71-32.37,136.56-96.21,180.87
					c-29.24,20.29-65.04,37.02-106.42,49.71c-39.32,12.06-83.61,20.48-131.65,25.03c-19.44,1.84-39.19,2.77-58.72,2.77
					s-39.28-0.93-58.72-2.77c-48.04-4.55-92.33-12.97-131.65-25.03c-41.38-12.69-77.19-29.42-106.42-49.71
					C44.37,522.87,12,462.02,12,386.31c0-50.33,9.88-99,29.35-144.67c19.07-44.71,46.53-84.71,81.61-118.9
					c35.55-34.64,77.38-61.78,124.33-80.67C296.38,22.32,349.44,12.31,405,12.31 M405,0.31c-234.43,0-405,174.89-405,386v0
					c0,169.84,155.27,249.58,345.15,267.56c19.91,1.88,39.88,2.83,59.85,2.83s39.94-0.94,59.85-2.83
					C654.73,635.89,810,556.15,810,386.31v0C810,175.19,639.43,0.31,405,0.31L405,0.31z"
                    />
                  </g>
                </g>
                <g id="face" className="transformable">
                  <g id="eyespots">
                    <ellipse
                      id="eyespot-left"
                      fill={critterDark}
                      transform="matrix(0.6725 -0.7401 0.7401 0.6725 -266.7297 292.2937)"
                      cx="196.89"
                      cy="447.51"
                      rx="125.74"
                      ry="100.83"
                    />

                    <ellipse
                      id="eyespot-right"
                      fill={critterDark}
                      transform="matrix(0.7401 -0.6725 0.6725 0.7401 -141.6056 528.5988)"
                      cx="613.11"
                      cy="447.51"
                      rx="100.83"
                      ry="125.74"
                    />
                  </g>
                  <g id="eyes-and-shine" className="transformable">
                    <g id="eyes">
                      <circle
                        id="eye-left"
                        className="transformable"
                        fill={critterEyes}
                        cx="246.12"
                        cy="439.14"
                        r="33.75"
                      />
                      <circle
                        id="eye-right"
                        className="transformable"
                        fill={critterEyes}
                        cx="563.88"
                        cy="439.14"
                        r="33.75"
                      />
                    </g>
                    <g id="eyeshine" className="transformable">
                      <circle
                        id="eyeshine-left"
                        className="transformable"
                        fill={critterLight}
                        cx="231.18"
                        cy="425.97"
                        r="9.57"
                      />
                      <circle
                        id="eyeshine-right"
                        className="transformable"
                        fill={critterLight}
                        cx="550"
                        cy="425.97"
                        r="9.57"
                      />
                    </g>
                  </g>
                  <g id="eyelids" className="hidden transformable">
                    <circle
                      id="eyelid-left"
                      className="transformable"
                      fill={critterDark}
                      stroke={critterDark}
                      strokeWidth="2px"
                      cx="246.12"
                      cy="439.14"
                      r="33.75"
                    />
                    <circle
                      id="eyelid-right"
                      className="transformable"
                      fill={critterDark}
                      stroke={critterDark}
                      strokeWidth="2px"
                      cx="563.88"
                      cy="439.14"
                      r="33.75"
                    />
                  </g>
                  <g id="eyes-ded" className="hidden">
                    <g id="eyes-ded-left">
                      <line
                        stroke={critterLight}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="269.98"
                        y1="415.28"
                        x2="222.25"
                        y2="463.01"
                      />
                      <line
                        stroke={critterLight}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="269.98"
                        y1="463.01"
                        x2="222.25"
                        y2="415.28"
                      />
                    </g>
                    <g id="eyes-ded-right">
                      <line
                        stroke={critterLight}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="587.75"
                        y1="415.28"
                        x2="540.02"
                        y2="463.01"
                      />
                      <line
                        stroke={critterLight}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="587.75"
                        y1="463.01"
                        x2="540.02"
                        y2="415.28"
                      />
                    </g>
                  </g>
                  <ellipse
                    id="nose"
                    fill={critterDark}
                    cx="405"
                    cy="540"
                    rx="38.67"
                    ry="21.33"
                  />
                  <polyline
                    id="mouth-sad"
                    style={critterStyles.mouthline}
                    className="hidden"
                    points="366.64,611.87 405,585.14 443.36,611.87"
                  />
                  <polygon
                    id="mouth-open"
                    className="hidden transformable"
                    fill={critterMouth}
                    stroke={critterDark}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="472.5,611.87 405,576.44 
				337.5,611.87 			"
                  />
                  <polyline
                    id="mouth"
                    style={critterStyles.mouthline}
                    className="transformable"
                    points="337.5,611.87 405,585.14 472.5,611.87"
                  />
                </g>
              </g>
            </g>
          </svg>
        </figure>
        <ul className="text-xl leading-loose md:text-base md:leading-normal">
          <li>
            <strong className="text-indigo-600">Name:</strong> {name}{" "}
            <PencilIcon
              className="inline w-5 text-indigo-600 min-h-[42px] min-w-[42px] md:min-h-0 md:min-w-0 hover:text-indigo-400 active:text-indigo-800"
              onClick={() => {
                setDisplayModal(true);
              }}
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
            <strong className="text-indigo-600">Status:</strong>{" "}
            {status.replace("-", " ")}
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
