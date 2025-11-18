"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStore } from "./State";
import GalleryCarousel from "./GalleryCarousel";

type Galleries = {
    modelling: string[];
    films: string[];
    theater: string[];
};

type Props = {
    galleries: Galleries;
};

const TAB_KEYS = ["modelling", "films", "theater"] as const;

export default function GalleryTabs({ galleries }: Props) {
    const language = useStore((state: { language: string }) => state.language);
    const [activeTab, setActiveTab] =
        useState<(typeof TAB_KEYS)[number]>("modelling");

    const labels: Record<(typeof TAB_KEYS)[number], string> = {
        modelling: language === "hun" ? "Model képek" : "Modelling",
        films: language === "hun" ? "Filmek" : "Films",
        theater: language === "hun" ? "Színházak" : "Theater",
    };

    const description = labels[activeTab];
    const images = galleries[activeTab] ?? [];

    return (
        <div className="space-y-8">
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-[32px] border border-rose-100 bg-white/90 p-6 shadow-xl"
            >
                <h2 className="text-center text-2xl font-semibold text-rose-500">
                    {language === "hun" ? "Képtár" : "Gallery"}
                </h2>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {TAB_KEYS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                                activeTab === tab
                                    ? "border-transparent bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-lg"
                                    : "border-rose-100 text-rose-500 hover:border-rose-200"
                            }`}
                            type="button"
                        >
                            {labels[tab]}
                        </button>
                    ))}
                </div>
            </motion.section>

            <GalleryCarousel images={images} description={description} />
        </div>
    );
}
