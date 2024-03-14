function Header(): any {
  return (
    <div className="navbar bg-base-100 rounded-3xl sticky top-0 z-10 px-5 bg-opacity-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Example Website</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>about us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
