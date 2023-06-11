import { XMarkIcon } from "@heroicons/react/24/solid";
import "../components/CritterContainer.css";

const Home = () => {

  const critterStyles= {
    mouthline: {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12px",
    }
  }

  return (
    <section className="flex flex-col gap-10 md:flex-row items-center justify-center w-full h-full min-h-[78vh] md:min-h-[70vh] xl:min-h-[75vh]">
      <figure className="border-4 border-black rounded-lg w-64 h-64 min-w-[16rem] sm:w-80 sm:h-80 sm:min-w-[20rem] shadow-[0.4rem_0.4rem_#a7f3d0] bg-indigo-100 flex flex-col items-center overflow-hidden">
        <div className="flex items-center justify-between w-full bg-indigo-500 border-b-4 border-black">
          <div className="flex gap-3 pl-2">
            <div className="w-6 h-6 border-4 border-black rounded-full"></div>
            <div className="w-6 h-6 border-4 border-black rounded-full"></div>
            <div className="w-6 h-6 border-4 border-black rounded-full"></div>
          </div>
          <XMarkIcon className="min-h-[42px] min-w-[42px] w-10 h-10 stroke-black stroke-1" />
        </div>
        <figure className="w-full h-full max-w-[85%] flex flex-col items-center justify-center">
          <svg
            id="critter-head"
            viewBox="0 0 810 656.69"
            preserveAspectRatio="xMinYMin meet"
            className="homepage"
          >
            <g id="ears">
              <g id="ear-left">
                <circle id="ear-outer" cx="135" cy="135" r="135" />
              </g>
              <g id="ear-right">
                <circle
                  id="ear-outer-2"
                  data-name="ear-outer"
                  cx="675"
                  cy="135"
                  r="135"
                />
              </g>
            </g>
            <g id="head-main">
              <g>
                <path
                  fill="#ffffff"
                  d="m405,650.69c-19.71,0-39.66-.94-59.28-2.8-99.79-9.45-183.1-35.65-240.93-75.78C39.24,526.61,6,464.1,6,386.31c0-101.87,40.05-197,112.77-267.87C192.97,46.13,294.62,6.31,405,6.31s212.03,39.82,286.23,112.13c72.72,70.87,112.77,166,112.77,267.87,0,77.79-33.24,140.3-98.79,185.8-57.83,40.13-141.14,66.34-240.93,75.78-19.63,1.86-39.57,2.8-59.28,2.8Z"
                />
                <path d="m405,12.31c55.56,0,108.62,10.01,157.7,29.76,46.96,18.89,88.79,46.03,124.33,80.67,35.08,34.19,62.54,74.2,81.61,118.91,19.48,45.67,29.35,94.34,29.35,144.67,0,75.71-32.37,136.56-96.21,180.87-29.24,20.29-65.04,37.02-106.42,49.71-39.32,12.06-83.61,20.48-131.65,25.03-19.44,1.84-39.19,2.77-58.72,2.77s-39.28-.93-58.72-2.77c-48.04-4.55-92.33-12.97-131.65-25.03-41.38-12.69-77.19-29.42-106.42-49.71-63.84-44.31-96.21-105.16-96.21-180.87,0-50.33,9.88-99,29.35-144.67,19.07-44.71,46.53-84.71,81.61-118.9,35.55-34.64,77.38-61.78,124.33-80.67,49.09-19.75,102.15-29.76,157.7-29.76m0-12C170.57.31,0,175.19,0,386.31h0c0,169.84,155.27,249.58,345.15,267.56,19.91,1.88,39.88,2.83,59.85,2.83s39.94-.94,59.85-2.83c189.88-17.98,345.15-97.72,345.15-267.56h0C810,175.19,639.43.31,405,.31h0Z" />
              </g>
            </g>
            <g id="face">
              <g id="eyespots">
                <ellipse
                  id="eyespot-left"
                  cx="196.89"
                  cy="447.51"
                  rx="125.74"
                  ry="100.83"
                  transform="translate(-266.73 292.29) rotate(-47.74)"
                />
                <ellipse
                  id="eyespot-right"
                  cx="613.11"
                  cy="447.51"
                  rx="100.83"
                  ry="125.74"
                  transform="translate(-141.61 528.6) rotate(-42.26)"
                />
              </g>
              <g id="eyes-and-shine">
                <g id="eyes">
                  <circle
                    id="eye-left"
                    fill="#6366f1"
                    cx="246.12"
                    cy="439.14"
                    r="33.75"
                  />
                  <circle
                    id="eye-right"
                    fill="#6366f1"
                    cx="563.88"
                    cy="439.14"
                    r="33.75"
                  />
                </g>
                <g id="eyeshine">
                  <circle
                    id="eyeshine-left"
                    fill="#ffffff"
                    cx="231.18"
                    cy="425.97"
                    r="9.57"
                  />
                  <circle
                    id="eyeshine-right"
                    fill="#ffffff"
                    cx="550"
                    cy="425.97"
                    r="9.57"
                  />
                </g>
              </g>
              <g id="eyelids" className="hidden">
                <circle id="eyelid-left" cx="246.12" cy="439.14" r="33.75" />
                <circle id="eyelid-right" cx="563.88" cy="439.14" r="33.75" />
              </g>
              <ellipse id="nose" cx="405" cy="540" rx="38.67" ry="21.33" />
              <polygon
                id="mouth-open"
                className="hidden"
                style={critterStyles.mouthline}
                fill="#ffcccc"
                points="472.5 611.87 405 576.44 337.5 611.87 472.5 611.87"
              />
              <polyline
                id="mouth"
                style={critterStyles.mouthline}
                fill="none"
                points="337.5 611.87 405 585.14 472.5 611.87"
              />
            </g>
          </svg>
        </figure>
      </figure>
      <div className="w-full max-w-lg min-w-0 text-left">
        <div className="flex-1 bg-emerald-200 text-black p-4 mb-2 relative border-4 border-black w-fit mx-auto md:mx-0 shadow-[0.4rem_0.4rem_#c7d2fe]">
          <h2 className="text-3xl font-semibold text-center md:text-left">Let's work together!</h2>

          <div className="absolute top-0 left-[47.5%] md:top-[55%] md:left-0 transform -translate-y-[68%] md:-translate-x-[68%] rotate-45 w-4 h-4 bg-emerald-200 border-t-4 md:border-t-0 border-l-4 md:border-b-4 border-black"></div>
        </div>
        <p className="inline-block p-2 mt-4 text-lg leading-relaxed">
          Tired of feeling overwhelmed with your tasks? Let our project task
          tracker tool be your personal assistant and help you conquer your
          to-do list!
        </p>
      </div>
    </section>
  );
};

export default Home;
