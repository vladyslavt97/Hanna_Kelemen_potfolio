"use client";
import Image from "next/image";
import EngBio from "@/components/EngBio";
import HunBio from "@/components/HunBio";
import { useStore } from "@/components/State";
import { motion } from "framer-motion";

type Props = {};

interface languagesState {
    language: string;
}

export default function Page({}: Props) {
    const language = useStore((state: languagesState) => state.language);

    return (
        <div className="space-y-8">
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-[32px] border border-rose-100 bg-white/90 p-6 text-center shadow-xl"
            >
                <h1 className="text-2xl font-semibold text-rose-500">
                    {language === "hun" ? "Életrajz" : "Biography"}
                </h1>
                <div className="mt-6 flex justify-center">
                    <Image
                        src="/1.jpg"
                        alt=""
                        width={320}
                        height={320}
                        priority={true}
                        className="w-[280px] rounded-3xl shadow-lg"
                    />
                </div>
            </motion.section>

            {language === "hun" ? <HunBio /> : <EngBio />}
        </div>
    );
}
