import SocialMediaButtons from "./social_media_buttons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="h-32 bg-primary opacity-70 shadow-md p-5 justify-center items-center">
        <div className="h-full flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-center md:flex-wrap md:gap-6">
          <a href="#" className="font-sans px-20 text-primary-content hover:underline justify-center my-2">
            &copy; {currentYear} localhost
          </a>
          <div className="px-20 justify-center my-2">
            <SocialMediaButtons />
          </div>
        </div>
      </div>
    </footer>
  );
}
