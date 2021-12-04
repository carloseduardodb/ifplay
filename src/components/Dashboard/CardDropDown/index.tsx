import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  id: number;
};

const CardDropDown = ({ id }: Props) => {
  const { setDispatch, dispatch } = useDispatchGlobalEvent();

  // evento para envio de dados para api
  const handleClick = () => {
    api
      .delete(`teacher/playlist/${id}`)
      .then(() => {
        setDispatch(!dispatch);
      })
      .catch(() => {});
  };

  return (
    <Menu as="div" className="text-left absolute right-0 mr-5">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <HiChevronDown size={30} aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={handleClick}
                  className={classNames(
                    active ? "bg-gray-100 text-red-900" : "text-red-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Apagar
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CardDropDown;
