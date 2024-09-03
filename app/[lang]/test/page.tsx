import Image from "next/image";
import { Locale } from "@/config/i18n.config";
import {getDictionaryServerOnly} from '@/dictionaries/default-dictionary-server-online';
import Button from "@/components/Modal";
  
export default function Test({params} : {params: {lang : Locale}}) {
  console.log("test",params);
  const {dictionary} = getDictionaryServerOnly(params.lang);
  return (
    <main>
      Teste
      {dictionary.translation.created}
    </main>
  );
}
