import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AsideLeft from '@/components/Aside-left/AsideLeft';
import { Toaster } from 'react-hot-toast';
import { DictionaryProvider } from '../context/DictionaryContext';
import { Locale } from '@/config/i18n.config';
import ButtonTop from '@/components/btn-top/ButtonTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio | Lucas Diello',
  description: `
  Desenvolvedor de software fullstack, com foco em React, Next.js, Node.js, Express, MongoDB, MySQL, e outras tecnologias.
  `,
  keywords: 'Lucas Diello, Lucas, Diello, Desenvolvedor, Software, Fullstack, React, Next.js, Node.js, Express, MongoDB, MySQL, Front End, Back End, Web, Web Developer, Web Development, Portfolio, Portfólio, Projetos, Projects, Blog, Artigos, Articles, Contato, Contact, Sobre, About',
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} flex bg-[#17161a]`}>
        <Toaster   position="bottom-center"
  reverseOrder={false}
  />
  <ButtonTop />
  <DictionaryProvider lang={params.lang}>
        <AsideLeft />
        {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
