"use client"
import React, { useState } from 'react';
import brImage from "../images/brazil_18295.png";
import enImage from "../images/usa_18285.png";
import Image from 'next/image';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';

const SwitcherLanguage = () => {
    
    const [currentLanguage, setCurrentLanguage] = useState("pt");
    const {dictionary} = getDictionaryUseClient(currentLanguage);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "pt" ? "en" : "pt";
        setCurrentLanguage(newLanguage);
    };

    return (
        <div className="z-50 bottom-10 right-10 fixed shadow-xl btn-language">
            <button
                type="button"
                className="border-none bg-inherit"
                aria-label="Mudar linguagem"
                onClick={handleChangeLanguage}
            >
                {currentLanguage === "pt" ? (
                    <Image src={enImage} alt="English" className="w-14 h-14 cursor-pointer" />
                ) : (
                    <Image src={brImage} alt="Português" className="w-14 h-14 cursor-pointer" />
                )}
            </button>
        </div>
    );
};

export default SwitcherLanguage;
