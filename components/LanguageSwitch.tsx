"use client";
import { useEffect } from "react";
import { useStore } from "./State";

type Props = {};

interface LanguagesState {
    language: string;
    setLanguage: (language: string) => void;
    setLoaded: (val: boolean) => void;
}

export default function LanguageSwitch({}: Props) {
    const language = useStore((state: LanguagesState) => state.language);
    const setLanguage = useStore(
        (state: LanguagesState) => state.setLanguage
    );
    const setLoaded = useStore((state: LanguagesState) => state.setLoaded);

    useEffect(() => {
        const browserLanguage =
            typeof window !== "undefined" ? navigator.language : "";
        setLoaded(true);
        if (browserLanguage.toLowerCase().includes("hu")) {
            setLanguage("hun");
        } else {
            setLanguage("eng");
        }
    }, [setLanguage, setLoaded]);

    const options = [
        { value: "hun", label: "HUN" },
        { value: "eng", label: "ENG" },
    ] as const;

    return (
        <div className="flex overflow-hidden rounded-full border border-rose-100 bg-white/80 text-[10px] font-semibold uppercase tracking-widest shadow-sm sm:text-xs">
            {options.map((option) => {
                const isActive = language === option.value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setLanguage(option.value)}
                        className={`px-3 py-1 transition ${
                            isActive
                                ? "bg-gradient-to-r from-rose-500 to-orange-400 text-white"
                                : "text-rose-400 hover:text-rose-500"
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
