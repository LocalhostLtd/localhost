import Heading from "@/components/Heading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/Form";
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
      <div className="m-[max(15vw,20px)] flex-1 items-center justify-center">
        <h1 className="font-sans text-accent text-5xl text-center drop-shadow-lg">
          Who we are
        </h1>
        <p className="font-sans text-base-content font-bold text-2xl text-center m-10 drop-shadow-lg">
          We’re a group of university students united on our common interest in
          web design and development.
        </p>
      </div>
      <div className="m-[max(15vw,20px)] flex-1 items-center justify-center">
        <h1 className="font-sans text-accent text-5xl text-center drop-shadow-lg">
          Our Goal
        </h1>
        <p className="font-sans text-base-content font-bold text-2xl text-center m-10 drop-shadow-lg">
          We’re a group of university students united on our common interest in
          web design and development.
        </p>
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
            [
              "",
              "long",
              "enter message here...",
              [],
            ],
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
