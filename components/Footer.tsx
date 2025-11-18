"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuCopy } from "react-icons/lu";
import { useStore } from "./State";

type Props = {};

interface LanguagesState {
    language: string;
    val: boolean;
}

const EMAIL = "hannakelemen1@gmail.com";

export default function Footer({}: Props) {
    const language = useStore((state: LanguagesState) => state.language);
    const val = useStore((state: LanguagesState) => state.val);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <footer className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white/80 px-6 py-6 shadow-xl backdrop-blur">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        {val && (
                            <p className="text-xs uppercase tracking-[0.4em] text-rose-300">
                                {language === "eng"
                                    ? "Get in touch"
                                    : "Kapcsolatfelvétel"}
                            </p>
                        )}
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-mono text-slate-600">
                            <span>{EMAIL}</span>
                            <CopyToClipboard text={EMAIL} onCopy={handleCopy}>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 rounded-full border border-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-rose-400 transition hover:border-rose-200 hover:text-rose-500"
                                >
                                    <LuCopy />
                                    {copied
                                        ? language === "hun"
                                            ? "Másolva"
                                            : "Copied!"
                                        : language === "hun"
                                          ? "Másolás"
                                          : "Copy"}
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.instagram.com/hanna_kelemen_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200"
                        >
                            <Image
                                width={22}
                                height={22}
                                src="/instagram.png"
                                alt="Instagram"
                                className="object-contain"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/hanna.kelemen.71"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200"
                        >
                            <Image
                                width={22}
                                height={22}
                                src="/facebook.png"
                                alt="Facebook"
                                className="object-contain"
                            />
                        </a>
                        <Link
                            href="https://gofund.me/f4a57d59"
                            target="_blank"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200"
                        >
                            <Image
                                src="/gofundme.png"
                                alt="GoFundMe"
                                width={28}
                                height={28}
                                priority={true}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
