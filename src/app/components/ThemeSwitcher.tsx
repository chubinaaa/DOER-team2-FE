"use client";
import { useEffect, useState } from "react";
import { ContrastIcon } from "../icons/ContrastIcon";

type TProps = { onClick: () => void };
export const ThemeSwitcher: React.FC<TProps> = ({ onClick }) => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const savedTheme = localStorage.getItem("user-theme") ?? "light";
        setTheme(savedTheme);
    }, []);
    const handler = () => {
        onClick();
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("user-theme", newTheme);
        setTheme(newTheme);
    };

    return <ContrastIcon onClick={handler} className="text-white dark:text-black" />;
};
