"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "./State";

type Props = {};

interface NavigationState {
    open: boolean;
    setOpen: (open: boolean) => void;
}

interface LanguageState {
    language: string;
}

const NAV_LINKS = [
    {
        href: "/",
        label: {
            hun: "Kezdőlap",
            eng: "Home",
        },
    },
    {
        href: "/biography",
        label: {
            hun: "Életrajz",
            eng: "Biography",
        },
    },
    {
        href: "/gallery",
        label: {
            hun: "Képtár",
            eng: "Gallery",
        },
    },
    {
        href: "/videos",
        label: {
            hun: "Videók",
            eng: "Videos",
        },
    },
] as const;

export default function Navigation({}: Props) {
    const pathname = usePathname();
    const language = useStore((state: LanguageState) => state.language);
    const open = useStore((state: NavigationState) => state.open);
    const setOpen = useStore((state: NavigationState) => state.setOpen);

    const toggle = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <>
            <button
                type="button"
                className="relative inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-rose-100 bg-white/80 shadow-sm transition hover:border-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
                onClick={toggle}
                aria-expanded={open}
                aria-label={open ? "Close navigation" : "Open navigation"}
            >
                <span
                    className={`h-0.5 w-5 rounded-full bg-rose-500 transition-transform ${
                        open ? "translate-y-1.5 rotate-45" : ""
                    }`}
                />
                <span
                    className={`h-0.5 w-4 rounded-full bg-rose-500 transition-all ${
                        open ? "opacity-0" : ""
                    }`}
                />
                <span
                    className={`h-0.5 w-5 rounded-full bg-rose-500 transition-transform ${
                        open ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close navigation backdrop"
                            className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 70, damping: 15 }}
                            className="fixed inset-y-0 right-0 z-50 w-full bg-gradient-to-b from-rose-600 via-rose-500 to-orange-400 px-6 py-10 text-white md:w-2/3 lg:w-1/3"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-xs uppercase tracking-[0.6em] text-white/70">
                                    {language === "hun" ? "Menü" : "Menu"}
                                </p>
                                <button
                                    type="button"
                                    onClick={closeMenu}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-lg"
                                    aria-label="Close navigation"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="mt-12 flex flex-col gap-6 text-2xl font-semibold">
                                {NAV_LINKS.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.1 * index,
                                                duration: 0.35,
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className={`flex items-center justify-between rounded-2xl px-3 py-2 transition ${
                                                    isActive
                                                        ? "bg-white/20 text-white"
                                                        : "text-white/80 hover:bg-white/10"
                                                }`}
                                            >
                                                {language === "hun"
                                                    ? item.label.hun
                                                    : item.label.eng}
                                                <span aria-hidden className="text-base">
                                                    ↗
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
