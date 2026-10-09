'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`menu-toggle${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
        <Link className="btn mobile-menu-cta" href="/contact" onClick={() => setOpen(false)}>
          Get Noticed
        </Link>
      </div>
    </>
  );
}
