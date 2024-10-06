'use client';
import { useParams, usePathname } from 'next/navigation';
import { locales } from './locales';
export const Lang = () => {
  const { lang } = useParams();
  const pathname = usePathname();
  const getPathname = (lng: string) => {
    const path = pathname.split('/' + lang).join('');
    return '/' + lng + path;
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    window.location.href = getPathname(newLang);
  };
  return (
      <select value={lang} onChange={handleChange} className="border pr-3 text-xs bg-inherit text-white">
        {locales.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.ico}
          </option>
        ))}
      </select>
  );
};
