import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#002B5B] flex justify-between items-center p-4">
      {/* Logo */}
      <div className="text-white text-xl font-bold">whitepace</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-white text-sm font-medium">
        <Link href="/products" className="hover:text-[#FFD700]">Products</Link>
        <Link href="/solutions" className="hover:text-[#FFD700]">Solutions</Link>
        <Link href="/resources" className="hover:text-[#FFD700]">Resources</Link>
        <Link href="/pricing" className="hover:text-[#FFD700]">Pricing</Link>
      </div>

      {/* Login Button */}
      <button className="bg-[#FFE492] text-[#002B5B] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
