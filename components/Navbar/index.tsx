"use client";

import React from "react";
import Image from "next/image";
import usePlaySound from "@/hooks/usePlaySound";
import "./navbar.scss";

import classNames from "classnames";

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const { audioRef, playSound } = usePlaySound();
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => setIsShowMenu((prev) => !prev);

  React.useEffect(() => {
    if (!isShowMenu) return;

    const handleClickOutside = (ev: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(ev.target as Node)) {
        handleToggleMenu();
      }
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setIsShowMenu(false);
    };

    document.body.addEventListener("click", handleClickOutside);
    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShowMenu]);

  return (
    <nav className={classNames("nav", { show: isShowMenu })}>
      <a onClick={playSound} href="#" className="nav__logo">
        <Image src="/coding.png" alt="icon-coding" width={30} height={30} />
        <span>Akbar.dev</span>
      </a>
      <div ref={menuRef} className={classNames("nav__menu", { show: isShowMenu })}>
        <button onClick={handleToggleMenu} className="nav__close">
          <Image src="/close.png" width={20} height={20} alt="icon-close" />
        </button>
        <ul className="nav__list">
          <li>
            <a
              className="nav__link"
              onClick={() => {
                playSound();
                handleToggleMenu();
              }}
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              onClick={() => {
                playSound();
                handleToggleMenu();
              }}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              onClick={() => {
                playSound();
                handleToggleMenu();
              }}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              onClick={() => {
                playSound();
                handleToggleMenu();
              }}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button onClick={handleToggleMenu} className="nav__toggle">
        <Image src="/hamburger.png" width={30} height={30} alt="icon-hamburger" />
      </button>
      <audio ref={audioRef} src="/confirm.wav" preload="auto" hidden />
    </nav>
  );
}
