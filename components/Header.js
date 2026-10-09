import Link from 'next/link';
import MobileNav from './MobileNav';

const links = [
  ['Services', '/services'],
  ['D1 Community Partners', '/d1-community-partners'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['Contact', '/contact']
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="PurpleCowz Media home">
          <img src="/purplecowz-shield.png" alt="PurpleCowz Media" />
          <span>PurpleCowz Media</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link className="btn btn-small" href="/contact">Get Noticed</Link>
        <MobileNav links={links} />
      </div>
    </header>
  );
}
