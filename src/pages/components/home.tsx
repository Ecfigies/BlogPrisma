import { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Carrosel from "./carrosel";

const Home = () => {
  // const saveData = localStorage.getItem("user");
  // const getId = localStorage.getItem("id");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [information, setInformation] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const cancelButtonRef = useRef(null);

  const handleSubmit = () => {
    axios.post("/api/users", {
      text: text,
      // userId: getId,
    });
  };

  const showList = () => {
    axios
      .get("http://localhost:3000/api/users", {
        data,
      })
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    showList();
  }, []);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  function nextSlide() {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("-translate-x-full");

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove("translate-x-full");
    nextSlide.classList.add("translate-x-0");
  }

  function previousSlide() {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("translate-x-full");

    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove("-translate-x-full");
    previousSlide.classList.add("translate-x-0");
  }

  let menuRef = useRef<HTMLDivElement | null>(null);
  document.addEventListener("click", (event) => {
    if (!menuRef.current?.contains(event.target as Node)) {
      setMenuOpened(false);
    }
  });

  return (
    <div>
      <Navbar user="Alan" />
      <Carrosel />

      <div className=" fixed sr-onlyflex justify-center m-10">
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded fixed bottom-0 right-2 m-20	"
          onClick={handleModalOpen}
        >
          +
        </button>

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            open={open}
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

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Create post
                      </Dialog.Title>
                    </div>

                    <div className="mb-3 pt-0">
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={10}
                          onChange={(e) => setText(e.target.value)}
                          cols={10}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Your post here"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleSubmit}
                    >
                      Send
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
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default Home;
