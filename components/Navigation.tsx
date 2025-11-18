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
                        <motion.nav
                            id="main-navigation"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-20 left-0 right-0 z-40 mx-auto w-full max-w-sm rounded-3xl border border-rose-100 bg-white/90 p-6 text-sm shadow-2xl backdrop-blur md:max-w-md"
                        >
                            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-rose-300">
                                Menu
                            </p>
                            <div className="flex flex-col gap-3">
                                {NAV_LINKS.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.25,
                                                delay: 0.05 * index,
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-medium transition ${
                                                    isActive
                                                        ? "border-transparent bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-lg"
                                                        : "border-rose-100/80 text-slate-600 hover:border-rose-200 hover:text-rose-500"
                                                }`}
                                            >
                                                {language === "hun"
                                                    ? item.label.hun
                                                    : item.label.eng}
                                                <span
                                                    aria-hidden
                                                    className="text-xs tracking-widest text-rose-300"
                                                >
                                                    →
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.nav>
                        <motion.button
                            aria-label="Close navigation"
                            type="button"
                            className="fixed inset-0 z-30 bg-slate-900/50"
                            onClick={closeMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
