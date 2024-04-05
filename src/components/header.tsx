function Header(): any {
  return (
    <div className="p-5 sticky top-0 z-10 px-5" role="banner">
      <div className="navbar bg-base-100 rounded-3xl opacity-80">
        {/* <div className="flex-none lg:hidden md:hidden sm:block sm:px-2">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div> */}
        <div className="flex-1">
          <a href="#" className="btn btn-ghost text-xl font-sans">
            localhost
          </a>
        </div>
        <div className="flex-none hidden lg:block md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>about us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
