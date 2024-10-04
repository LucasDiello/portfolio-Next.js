import AsideLeft from '@/components/Aside-left/AsideLeft';
import Projects from '@/components/projecst/Projects';
import { Locale } from '@/config/i18n.config';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';
import React from 'react';

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <main>
      <Projects />
    </main>
  );
}
