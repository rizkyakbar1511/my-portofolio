import Image from "next/image";
import "./about.scss";

export default function About() {
  return (
    <section id="about" className="about">
      <Image className="about__image" src="/profile.jpg" alt="profile" width={300} height={300} />
      <div className="about__text">
        <h2 className="about__title">About Me</h2>
        <p className="about__desc">
          Hi, I&apos;m Akbar!
          <br />
          I&apos;m a passionate frontend developer with a knack for building beautiful and
          interactive user interfaces. I enjoy crafting user experiences that are not only
          functional but also visually appealing and engaging.
        </p>
      </div>
    </section>
  );
}
