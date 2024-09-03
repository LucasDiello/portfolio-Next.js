import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { i18n } from "@/config/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desenvolvedor Web | Lucas Diello",
  description:
    "Portfólio Desenvolvedor web com experiência em front end e back end. Criação de sites, interfaces chamativas e APIs REST usando React, Next.js, Java e mais.",
};

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}
export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode, params: { lang: string }
}>) {

  return (
    <html lang={params.lang}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfólio Desenvolvedor web com experiência em front end e back end. Criação de sites, interfaces chamativas e APIs REST usando React, Next.js, Java e mais."
        />
        <meta
          name="keywords"
          content="front end, back end, portfólio front end, desenvolvedor web, portfólio, HTML, CSS, JavaScript, projetos web, desenvolvimento de sites, freelancer, desenvolvedor React.js, desenvolvedor Next.js, desenvolvedor Java, desenvolvedor web freelancer, desenvolvedor web full stack"
        />
        <meta name="author" content="Lucas Diello" />
        <meta name="type" content="website" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Portfólio | Lucas Diello" />
        <meta
          property="og:description"
          content="Portfólio Desenvolvedor web com experiência em front end e back end. Criação de sites, interfaces chamativas e APIs REST usando React, Next.js, Java e mais."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.lucasdiello.com" />
        <meta
          property="og:image"
          content="https://i.ibb.co/0ZfV2yz/Untitled-Project-1.jpg"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MP9GX3SNNR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MP9GX3SNNR');
            `,
          }}
        />
        <link rel="icon" type="image/png" href="./src/images/homem.png" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
