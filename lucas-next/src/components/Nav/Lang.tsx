// Lang.tsx
'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FlagKey, flag, locales } from './locales';
import { getPathname } from '@/app/utils/pathname';

export const Lang = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  return (
    <div className="group flex items-center">
      <button>{flag[lang as FlagKey]}</button>

      <ul className="absolute top-12 hidden flex-col gap-2 group-hover:flex">
        {locales.map((lng) => {
          if (lng.code === lang) return null;

          return (
            <li key={lng.code}>
              <Link href={getPathname(pathname, lang, lng.code)}>{lng.ico}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
