function Header(): any {
  return (
    <div className="navbar bg-base-100 rounded">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Example Website</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>About Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
