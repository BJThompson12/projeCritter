import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const FaqCard = ({ question, children }) => {
  return (
    <article className="font-medium max-w-xl p-6 border-4 border-black rounded-lg shadow-[0.4rem_0.4rem_#a7f3d0] bg-indigo-100 basis-1/3 grow w-full min-w-0 self-center md:self-stretch">
      <h3 className="mb-2 text-xl font-bold text-left text-black">
        <QuestionMarkCircleIcon className="inline w-6 h-6 mb-1 mr-2 text-indigo-600" />
        {question}
      </h3>
      {children}
    </article>
  );
};

export default FaqCard