import { PencilIcon } from "@heroicons/react/24/solid";

const CritterContainer = ({ name, born, moodVal }) => {
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
  );
};

export default CritterContainer;
