'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import classes from '@/app/ui/NavLinks/NavLink.module.css';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  { name: 'Login', href: '/login' }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(link => {
        return (
          <Link key={link.name} href={link.href} className={clsx(classes.link, pathname === link.href && classes['link-active'])}>
            <p className={classes['link-text']}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
