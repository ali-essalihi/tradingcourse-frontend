import { Link } from "react-router-dom";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";

export default function Navbar() {
  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <div className="container py-3 flex items-center justify-between">
        <Link to="/" aria-label="Homepage">
          <Logo />
        </Link>
        <ProfileButton />
      </div>
    </header>
  );
}
