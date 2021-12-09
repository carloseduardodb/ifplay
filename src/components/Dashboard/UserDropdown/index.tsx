import React from "react";
import { createPopper } from "@popperjs/core";
import type { StrictModifiers } from "@popperjs/core";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../../hooks/useAuth";
import Router from "next/router";
import Link from "next/link";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<any>();
  const popoverDropdownRef = React.createRef<any>();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    Router.push("/login");
  };

  const openDropdownPopover = () => {
    createPopper<StrictModifiers>(
      btnDropdownRef.current,
      popoverDropdownRef.current,
      {
        placement: "bottom-start",
      }
    );
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <i className="w-full rounded-full align-middle border-none shadow-lg p-2 bg-p-green flex justify-center">
              <FiUser size={25} />
            </i>
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href="/dashboard/update-profile">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:text-p-green-dark"
            }
          >
            Atualizar perfil
          </a>
        </Link>
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:text-p-green-dark"
          }
          onClick={(e) => e.preventDefault()}
        >
          Sugerir funcionalidade
        </a>
        <Link href="/dashboard/settings">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:text-p-green-dark"
            }
          >
            Configurações
          </a>
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-red-500 flex items-center gap-x-2 hover:text-red-900"
          }
          onClick={() => handleSignOut()}
        >
          <FiLogOut />
          <li>Sair</li>
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
