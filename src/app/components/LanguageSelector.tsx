import React, { useState } from "react";
import { useTranslation } from "react-i18next";
type TProps = { isVisible: boolean; onClick: () => void };

export const LanguageSelector: React.FC<TProps> = ({ isVisible, onClick }) => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (language: string) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    };
    return (
        <>
            {isVisible && (
                <div className="absolute top-10 right-2 bg-[#F3F6FF] border border-solid border-[#F3F6FF] rounded-2xl shadow-md p-0">
                    {["ka", "en"].map((language) => (
                        <div
                            key={language}
                            onClick={() => {
                                changeLanguage(language);
                                onClick();
                            }}
                            className={`w-[145px] h-[43px] cursor-pointer rounded-[16px] flex items-center justify-center text-black ${
                                selectedLanguage === language
                                    ? "border border-[#15593A]"
                                    : "border border-transparent"
                            }`}
                        >
                            {language === "ka" ? "ქართული" : "English"}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
