import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* Left */}
      <div className="">
        <Link href='/' className="font-bold text-xl text-blue-600">LAMASOCIAL</Link>
      </div>
      {/* Center */}
      <div className="hidden"></div>
      {/* Right */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;