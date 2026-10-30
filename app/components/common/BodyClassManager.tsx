"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyClassManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      document.body.classList.add('main');
    } else {
      document.body.classList.remove('main');
    }

    return () => {
      document.body.classList.remove('main');
    };
  }, [pathname]);

  return null;
}