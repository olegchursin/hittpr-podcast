import Link from 'next/link';

interface INavLink {
  readonly href: string;
  readonly label: string;
}

const NavLink: React.FC<INavLink> = ({ href, label }) => {
  return (
    <Link href={href}>
      <span className="relative inline-block cursor-pointer px-2 text-sm uppercase before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-600 hover:before:bg-pink-500 active:before:bg-pink-700 md:text-base">
        <span className="relative text-white">{label}</span>
      </span>
    </Link>
  );
};

export default NavLink;
