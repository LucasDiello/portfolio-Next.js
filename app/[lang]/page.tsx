import Image from "next/image";
import { Locale } from "@/config/i18n.config";
import {getDictionaryServerOnly} from '@/dictionaries/default-dictionary-server-online';
import Button from "@/components/Modal";
  
export default function Home({params} : {params: {lang : Locale}}) {
  const {dictionary} = getDictionaryServerOnly(params.lang);
  console.log("home",params);
  console.log("dictionary",dictionary);
  return (
    <main>
      Home
      <Button />
      {dictionary.translation.created}
    </main>
  );
}
