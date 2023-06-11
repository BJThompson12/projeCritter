import { XMarkIcon } from "@heroicons/react/24/solid";

const Modal = ({ children, displayModal, setDisplayModal }) => {
  const content = displayModal && (
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* background blocker */}
      <div className="fixed inset-0 z-40 bg-black opacity-30"></div>
      {/* modal body */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-2 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        {/* content */}
        <div className="flex flex-col items-center justify-start w-full bg-white border-4 border-black md:w-auto md:min-w-[20%] rounded-2xl overflow-hidden">
          {/* top bar */}
          <div className="flex items-center justify-between w-full bg-indigo-500 border-b-4 border-black">
            <div className="flex gap-3 pl-2">
              <div className="w-6 h-6 border-4 border-black rounded-full"></div>
              <div className="w-6 h-6 border-4 border-black rounded-full"></div>
              <div className="w-6 h-6 border-4 border-black rounded-full"></div>
            </div>
            <button
              className="min-h-[42px] min-w-[42px] md:w-10 md:h-10 stroke-black stroke-1 hover:text-white hover:stroke-white"
              type="button"
              onClick={() => setDisplayModal(false)}
              aria-label="Close"
            >
              <XMarkIcon />
            </button>
          </div>
          {/* content */}
          <div className="flex flex-wrap justify-center max-h-[90vh] gap-1 px-12 py-10 overflow-y-auto w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return content;
};

export default Modal;
