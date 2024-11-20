import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary flex justify-between items-center p-4 text-white">
      <h1 className="text-2xl font-bold">whitepace</h1>
      <div className="flex space-x-4">
        <Link href="/products" className="hover:text-secondary">
          Products
        </Link>
        <Link href="/solutions" className="hover:text-secondary">
          Solutions
        </Link>
        <Link href="/resources" className="hover:text-secondary">
          Resources
        </Link>
        <Link href="/pricing" className="hover:text-secondary">
          Pricing
        </Link>
      </div>
      <button className="bg-secondary text-primary px-4 py-2 rounded-md font-bold hover:bg-yellow-400">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
