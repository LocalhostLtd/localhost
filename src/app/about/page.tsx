"use client"

import Heading from "@/components/Heading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/Form";
import Rotatable from "@/components/RotatableComponent";
import HomeBackground from "../../../public/homeBackgroundGreen.png";

// below are possible ways to add the coloured overlay using css (which would make it easy to change themes)
// currently the green background is part odf the image because text appears behind the coloured overlay otherwise.
// , boxShadow: "inset 0 0 0 1000px rgba(0,55,0,.2)"
// <div className="fixed top-0 left-0 w-48 h-full z-0 bg-base-100 z-0 opacity-80"></div>

export default function About() {
  const mainText = "Need a website? Leave it to us.";
  const subText = "We're a group of developers";
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${HomeBackground.src})` }}
    >
      <Header
        links={[
          { href: "/home", text: "home" },
        ]}
      />
      <div className="flex ml-10">
        <div className="w-1/3 flex">
          <Rotatable />
        </div>

          <div className="w-2/3">
          <div className="mx-[max(10vw,20px)] my-[max(3vw,20px)] flex-1 items-center justify-center">
            <h1 className="font-sans text-accent text-5xl text-center drop-shadow-lg my-[max(1vw,20px)]">
              Who we are
            </h1>
            <p className="font-sans text-base-content font-bold text-2xl text-center mx-10 drop-shadow-lg">
              We are a group of university students united on our common
              interest in web design and development.
            </p>
          </div>
          <div className="mx-[max(10vw,20px)] my-[max(7vw,20px)] flex-1 items-center justify-center">
            <h1 className="font-sans text-accent text-5xl text-center drop-shadow-lg my-[max(1vw,20px)]">
              Our Goal
            </h1>
            <p className="font-sans text-base-content font-bold text-2xl text-center mx-10 drop-shadow-lg">
              To bring websites to local businesses extremely fast, and
              reliable. Offering cost-effective and efficient web development
              services
            </p>
          </div>

        
        </div>
      </div>
      <Heading title="contact us" />
      <div className="flex justify-center">
        <Form
          id="1"
          name=""
          inputs={[
            ["name", "short", "", []],
            ["email", "email", "", []],
            ["topic", "short", "", []],
            ["", "long", "enter message here...", []],
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
