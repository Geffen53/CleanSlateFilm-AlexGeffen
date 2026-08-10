'use client';

import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return <Navbar currentPath={pathname} onNavigate={handleNavigate} />;
}
