import Link from 'next/link';
import Logo from './logo';
import NavLink from './navLink';
import ThemeSwitch from './themeSwitch';

const navLinks = [
  {
    id: 'episodes',
    href: '/episodes',
    label: 'Эпизоды'
  },
  {
    id: 'about',
    href: '/about',
    label: 'О нас'
  }
];

const Navbar: React.FC = () => {
  return (
    <nav className="drop-shadow-md">
      <div className="container flex items-center justify-between p-6">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map(link => {
            return (
              <NavLink key={link.id} href={link.href} label={link.label} />
            );
          })}

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
