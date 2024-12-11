"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Logo from "./components/Logo";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useEffect, useState } from "react";
import { GlobeIcon } from "./icons/GlobeIcon";
import { LanguageSelector } from "./components/LanguageSelector";
import WelcomeMessage from "./components/WelcomeMessage";
import { Button } from "./components/Button";

export default function Home() {
    const [theme, setTheme] = useState("light");
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const storedTheme = localStorage.getItem("user-theme") ?? "light";
        setTheme(storedTheme);
    }, []);
    return (
        <I18nextProvider i18n={i18n}>
            <div className={`${theme === "dark" ? "dark" : "light"}`}>
                <div className="w-screen h-screen flex flex-col justify-between bg-gradient-to-br from-black/0 via-black/20 to-black/40 box-border">
                    <img
                        src="/background.png"
                        alt=""
                        className="absolute z-[-5] h-full w-auto object-cover object-[55%] top-0 left-0"
                    />
                    <div className="flex justify-between items-center w-[91%] m-auto mt-[22px]">
                        <Logo />
                        <div className="flex justify-between items-center gap-[14px]">
                            <ThemeSwitcher
                                onClick={() =>
                                    setTheme(localStorage.getItem("user-theme") ?? "light")
                                }
                            />
                            <GlobeIcon onClick={() => setIsVisible(!isVisible)} />
                            <LanguageSelector
                                isVisible={isVisible}
                                onClick={() => setIsVisible(!isVisible)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center flex-col gap-12 mb-[87px] w-[91%] m-auto">
                        <WelcomeMessage />
                        <Button
                            onClick={() => {
                                console.log("გაგრძელება იქნება....");
                            }}
                            label="გაგრძელება"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </I18nextProvider>
    );
}
