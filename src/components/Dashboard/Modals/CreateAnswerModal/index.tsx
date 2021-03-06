/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiSave } from "react-icons/hi";
import { FiAperture } from "react-icons/fi";
import api from "../../../../services/api";
import { useRouter } from "next/router";
import { useDispatchGlobalEvent } from "../../../../hooks/useDispatchGlobalEvent";
import { toast } from "react-toastify";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CreateAnswerModal() {
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Teste");
  const [question1, setQuestion1] = useState("Teste");
  const [question2, setQuestion2] = useState("Teste");
  const [question3, setQuestion3] = useState("Teste");
  const [question4, setQuestion4] = useState("Teste");
  const [question1Rp, setQuestion1Rp] = useState<Boolean>(false);
  const [question2Rp, setQuestion2Rp] = useState<Boolean>(false);
  const [question3Rp, setQuestion3Rp] = useState<Boolean>(false);
  const [question4Rp, setQuestion4Rp] = useState<Boolean>(false);
  const { dispatch, setDispatch } = useDispatchGlobalEvent();

  const handleViewModal = (name: string) => {
    setOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question1Rp || !question2Rp || !question3Rp || !question4Rp) {
      toast.warn("Adicione uma resposta!");
      return;
    }
    setOpen(false);
    api
      .post("teacher/questions", {
        quizId: router.query.quizId,
        title: title,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        response: {
          question1Rp: question1Rp,
          question2Rp: question2Rp,
          question3Rp: question3Rp,
          question4Rp: question4Rp,
        },
      })
      .then(() => {
        setQuestion1Rp(false);
        setQuestion2Rp(false);
        setQuestion3Rp(false);
        setQuestion4Rp(false);
        toast.success("Quest??o criada com sucesso");
        setDispatch(!dispatch);
      })
      .catch(() => {
        toast.error("Erro ao criar quest??o");
      });
  };

  return (
    <>
      <button
        onClick={() => {
          handleViewModal("create-questions");
        }}
        className="flex items-center mt-9 w-5/12 font-semibold leading-none text-white py-4 px-10 bg-p-green rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-p-green focus:outline-none"
      >
        <FiAperture size={40} />
        Cadastrar Perguntas
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <form
                onSubmit={handleSubmit}
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <HiSave
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Digite o titulo da sua pergunta
                      </Dialog.Title>
                      <div className="mt-2 w-96">
                        <input
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          id="playlist-name"
                          name="playlist-name"
                          type="text"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Resposta"
                        />

                        <h4 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                          Respostas
                        </h4>
                        <hr />
                        <div className="bg-gray-700 mt-5 p-8 rounded-2xl">
                          <div>
                            <label
                              htmlFor="ask-1"
                              className="text-white font-semibold"
                            >
                              Alternativa 1
                            </label>
                            <div className="flex items-center">
                              <input
                                onChange={(e) => {
                                  setQuestion1(e.target.value);
                                }}
                                id="playlist-name"
                                name="playlist-name"
                                type="text"
                                required
                                className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Resposta"
                              />
                              <input
                                onClick={() => {
                                  setQuestion1Rp(!question1Rp);
                                  alert(question1Rp);
                                }}
                                type="checkbox"
                                className="ml-2"
                              />
                            </div>
                            <br />
                          </div>

                          <div>
                            <label
                              htmlFor="ask-1"
                              className="text-white font-semibold"
                            >
                              Alternativa 2
                            </label>
                            <div className="flex items-center">
                              <input
                                onChange={(e) => {
                                  setQuestion2(e.target.value);
                                }}
                                id="playlist-name"
                                name="playlist-name"
                                type="text"
                                required
                                className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Resposta"
                              />
                              <input
                                onClick={() => setQuestion2Rp(!question2Rp)}
                                type="checkbox"
                                className="ml-2"
                              />
                            </div>
                            <br />
                          </div>

                          <div>
                            <label
                              htmlFor="ask-1"
                              className="text-white font-semibold"
                            >
                              Alternativa 3
                            </label>
                            <div className="flex items-center">
                              <input
                                onChange={(e) => {
                                  setQuestion3(e.target.value);
                                }}
                                id="playlist-name"
                                name="playlist-name"
                                type="text"
                                required
                                className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Resposta"
                              />
                              <input
                                onClick={() => setQuestion3Rp(!question3Rp)}
                                type="checkbox"
                                className="ml-2"
                              />
                            </div>
                            <br />
                          </div>

                          <div>
                            <label
                              htmlFor="ask-1"
                              className="text-white font-semibold"
                            >
                              Alternativa 4
                            </label>
                            <div className="flex items-center">
                              <input
                                onChange={(e) => {
                                  setQuestion4(e.target.value);
                                }}
                                id="playlist-name"
                                name="playlist-name"
                                type="text"
                                required
                                className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Resposta"
                              />
                              <input
                                onClick={() => setQuestion4Rp(!question4Rp)}
                                type="checkbox"
                                className="ml-2"
                              />
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
