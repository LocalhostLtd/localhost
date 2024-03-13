import Image from "next/image";

import facebook from "../../public/social-media-icons/facebook.svg";
import instagram from "../../public/social-media-icons/instagram.svg";
import linkedin from "../../public/social-media-icons/linkedin.svg";
import discord from "../../public/social-media-icons/discord.svg";

export default function SocialMediaButtons() {
  return (
    <div className="flex items-center">
      <a
        href="https://www.facebook.com/uoasesa"
        className="mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={facebook} height={30} alt="facebook-icon" />
      </a>
      <a
        href="https://www.instagram.com/sesa.uoa"
        className="mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={instagram} height={30} alt="instagram-icon" />
      </a>
      <a
        href="https://www.linkedin.com/company/ausesa"
        className="mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={linkedin} height={30} alt="linkedin-icon" />
      </a>
      <a
        href="https://discord.gg/93AW5tMSBc"
        className="mr-4 transition-transform duration-200 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={discord} height={30} alt="discord-icon" />
      </a>
    </div>
  );
}
