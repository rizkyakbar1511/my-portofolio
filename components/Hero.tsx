"use client";

import Image from "next/image";
import usePlaySound from "@/hooks/usePlaySound";

export default function Hero() {
  const { audioRef, playSound } = usePlaySound();
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">Front End Developer</h1>
          <p className="hero__subtitle">
            Hi, I&apos;m Muhammad Rizki Akbar. A passionate <span>Front End Developer</span> based
            in 📍 Jakarta, Indonesia.
          </p>
          <div className="hero__links">
            <a
              onMouseEnter={playSound}
              className="hero__link"
              href="https://github.com/rizkyakbar1511"
              target="_blank"
            >
              <Image src="/github.png" alt="icon-github" width={30} height={30} />
            </a>
            <a
              onMouseEnter={playSound}
              className="hero__link"
              href="https://www.linkedin.com/in/muhammad-rizki-akbar/"
              target="_blank"
            >
              <Image src="/linkedin.png" alt="icon-linkedin" width={30} height={30} />
            </a>
            <a
              onMouseEnter={playSound}
              className="hero__link"
              href="https://www.instagram.com/rzakbar/"
              target="_blank"
            >
              <Image src="/instagram.png" alt="icon-instagram" width={30} height={30} />
            </a>
          </div>
          <div className="hero__tech-stack">
            <h1 className="hero__tech-stack-title">Tech Stack</h1>
            <ul className="hero__tech-stack-list">
              <li className="hero__tech-stack-item">
                <Image
                  src="/html.png"
                  alt="icon-html"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </li>
              <li className="hero__tech-stack-item">
                <Image src="/css.png" alt="icon-html" fill sizes="(max-width: 768px) 100vw, 33vw" />
              </li>
              <li className="hero__tech-stack-item">
                <Image
                  src="/javascript.png"
                  alt="icon-javascript"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </li>
              <li className="hero__tech-stack-item">
                <Image
                  src="/typescript.png"
                  alt="icon-typescript"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </li>
              <li className="hero__tech-stack-item">
                <Image
                  src="/nextjs.png"
                  alt="icon-next-js"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </li>
              <li className="hero__tech-stack-item">
                <Image
                  src="/react.png"
                  alt="icon-react"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </li>
              <li className="hero__tech-stack-item">
                <Image
                  src="/tailwind.png"
                  alt="icon-tailwind"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </li>
              <li className="hero__tech-stack-item">
                <Image
                  src="/sass.png"
                  alt="icon-sass"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__img">
          <Image src="/hero.jpg" alt="hero" fill sizes="(max-width: 768px) 100vw, 33vw" priority />
        </div>
      </div>
      <audio ref={audioRef} src="/hover.wav" preload="auto" hidden />
    </section>
  );
}
