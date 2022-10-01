import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

type Props = {
  isInfoModalOpen: boolean;
  setIsInfoModalOpen: (value: boolean) => void;
};

export const InfoModal = ({ isInfoModalOpen, setIsInfoModalOpen }: Props) => {
  return (
    <Transition.Root show={isInfoModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setIsInfoModalOpen(false)}
      >
        <div className="flex items-center justify-center min-h-full py-10 px-4 text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-neutral-900 light:bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-2xl w-full sm:p-6">
              <button
                onClick={() => setIsInfoModalOpen(false)}
                tabIndex={0}
                aria-pressed="false"
                className="text-white light:text-black absolute right-4 top-4 focus:outline-none"
              >
                <XCircleIcon className="h-6 w-6 cursor-pointer transition-transform duration-300 hover:scale-125" />
              </button>
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-white light:text-black"
                  >
                    How to get your user token
                  </Dialog.Title>
                  <div className="my-4 text-white">
                    <div className="mb-4 flex flex-col justify-center items-center">
                      <ul className="text-left p-4 list-disc">
                        <li>
                          Open the{" "}
                          <a
                            href="https://discord.com/app"
                            target="_blank"
                            rel="noreferrer"
                            className="underline font-bold"
                          >
                            Discord website
                          </a>{" "}
                          and login
                        </li>
                        <li>
                          Open the Chrome Dev Tools with the keyboard shortcut{" "}
                          <pre className="inline">F12</pre>
                        </li>
                        <li>
                          Go to the <strong>Network</strong> tab
                        </li>
                        <li>
                          Click the <strong>XHR</strong> button to filter to XHR
                          requests only
                        </li>
                        <li>
                          Do any action in Discord like{" "}
                          <strong>opening a channel</strong>
                        </li>
                        <li>
                          Click the <strong>science</strong> request that shows
                          up in the list
                        </li>
                        <li>
                          Go to the <strong>Headers</strong> tab
                        </li>
                        <li>
                          Find <strong>Authorization</strong> under{" "}
                          <strong>Request Headers</strong> and copy your token
                          (make sure you copy the entire token and don't copy
                          any spaces)
                        </li>
                      </ul>
                      <img
                        src="/authorization.png"
                        alt="info-modal-help"
                        className="mt-4 w-full max-w-md"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setIsInfoModalOpen(false)}
                    type="button"
                    className="mx-auto mt-4 h-11 w-28 flex items-center justify-center rounded-md border border-transparent bg-blue text-base font-bold text-white shadow-sm hover:bg-dark-blue outline-none"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
