import SocialMediaButtons from "./social_media_buttons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="h-32 bg-black text-white opacity-60 shadow-md">
        <div className="flex items-center h-full justify-between">
        <a href="#" className="px-20 hover:underline">
              &copy; {currentYear} localhost
            </a>
          <div className="px-20">
            <SocialMediaButtons />
          </div>
        </div>
      </div>
    </footer>
  );
}
