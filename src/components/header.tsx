import Link from "next/link";


type HeaderProps = {
  links: { href: string; text: string }[];
};


function Header({ links }: HeaderProps): JSX.Element {
  return (
    <div className="p-5 sticky top-0 z-10 px-5" role="banner">
      <div className="navbar bg-primary rounded-3xl opacity-70">
        <div className="flex-none lg:hidden md:hidden sm:block sm:px-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              aria-label="burgerMenu"
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            {links.map((link, index) => (
                <li
                  key={index}
                  className="font-sans text-base-content"
                  aria-label="burgerMenu"
                >
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Link
            href="/home"
            className="btn btn-ghost text-primary-content text-2xl font-bold font-sans"
          >
            localhost
          </Link>
        </div>
        <div className="flex-none hidden lg:block md:block">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
                <li
                  key={index}
                >
                  <Link
                    href={link.href}
                    className="btn btn-ghost text-accent text-lg font-sans"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
