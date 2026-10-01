import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/purplecowz-shield.png" alt="PurpleCowz Media" />
          <p className="muted">Bold creative. Local visibility. Marketing designed to make your business impossible to ignore.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/services">Services</Link>
          <Link href="/d1-community-partners">D1 Community Partners</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 PurpleCowz Media. All rights reserved.</span>
        <span>We Make You Stand Out.</span>
      </div>
    </footer>
  );
}
