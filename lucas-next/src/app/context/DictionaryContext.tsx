"use client";
import React, { createContext, useContext, ReactNode } from 'react';
import { Locale } from '@/config/i18n.config';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';

interface DictionaryContextType {
  translation: Record<string, string>;
  lang: Locale;
}

export const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

export const DictionaryProvider = ({ lang, children }: { lang: Locale; children: ReactNode }) => {
  const { dictionary: { translation } } = getDictionaryUseClient(lang);

  return (
    <DictionaryContext.Provider value={{ translation, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
};
