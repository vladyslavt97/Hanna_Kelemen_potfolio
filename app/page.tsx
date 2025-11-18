"use client";
import { useStore } from "@/components/State";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface languagesState {
    language: string;
}

export default function Home() {
    const language = useStore((state: languagesState) => state.language);

    return (
        <main className="space-y-10">
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid gap-10 rounded-[32px] border border-rose-100 bg-white/80 p-6 shadow-xl sm:p-10 lg:grid-cols-[1.05fr,0.95fr]"
            >
                <div className="space-y-8">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-semibold text-rose-500 sm:text-5xl"
                    >
                        Kelemen Hanna
                    </motion.h1>
                    <p className="text-base text-slate-600">
                        {language === "hun"
                            ? "Színésznő és énekes; elkötelezett a film, a színház és a zene világa iránt."
                            : "Actress and singer dedicated to the worlds of film, theatre, and music."}
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4 rounded-[28px] border border-rose-100 bg-gradient-to-r from-rose-500 to-orange-400 p-5 text-white shadow-xl"
                    >
                        <p className="text-xs uppercase tracking-[0.6em] text-white/80">
                            {language === "hun" ? "Adománygyűjtés" : "Fundraiser"}
                        </p>
                        <h2 className="text-2xl font-semibold leading-tight">
                            {language === "hun"
                                ? "Segíts befejezni tanulmányaimat Glasgow-ban."
                                : "Help me finish my studies in Glasgow."}
                        </h2>
                        <p className="text-sm text-white/80">
                            {language === "hun"
                                ? "Minden támogatás közelebb visz a diploma megszerzéséhez."
                                : "Every contribution brings me closer to graduation."}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="https://gofund.me/f4a57d59"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-rose-500 shadow-lg transition hover:scale-105"
                            >
                                {language === "hun" ? "Adományozok" : "Donate now"}
                            </Link>
                            <Link
                                href="https://gofund.me/f4a57d59"
                                target="_blank"
                                className="inline-flex items-center rounded-full bg-white/0 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                {language === "hun" ? "Részletek" : "Read more"}
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative overflow-hidden rounded-[28px] border border-rose-100 bg-gradient-to-b from-rose-50 via-white to-rose-100 p-2 shadow-2xl"
                >
                    <Image
                        src="/CV.png"
                        alt=""
                        width={1000}
                        height={1000}
                        priority={true}
                        className="h-full max-h-[520px] w-full rounded-[24px] object-cover"
                        style={{ objectPosition: "top" }}
                    />
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 text-xs">
                        <Link
                            href="https://www.canva.com/design/DAGS0vSLIQA/C3js0bytAzTqQMcB_ipDPA/edit?utm_content=DAGS0vSLIQA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 font-semibold text-rose-500 shadow"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View my CV
                        </Link>
                    </div>
                </motion.div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-[28px] border border-rose-100 bg-white/80 p-6 shadow-xl"
            >
                <h1 className="text-sm font-semibold uppercase tracking-[0.6em] text-rose-300">
                    {language === "hun" ? "Cikkek" : "Articles"}
                </h1>
                <p className="mt-4 text-base text-slate-600">
                    {language === "hun"
                        ? "Elkezdődött a Majdnem menyasszony forgatása..."
                        : "Filming of Almost the Bride has begun... "}
                    <Link
                        href="https://kultura.hu/elkezdodott-a-majdnem-menyasszony-forgatasa/"
                        className="font-semibold text-rose-500"
                    >
                        {language === "hun" ? "Olvass tovább" : "read more"}
                    </Link>
                </p>
            </motion.section>
        </main>
    );
}
