import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import Navigation from "./Navigation";

type Props = {};

export default function Header({}: Props) {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-rose-100/60 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 sm:text-sm"
                >
                    Hanna Kelemen
                </Link>
                <div className="flex items-center gap-4">
                    <LanguageSwitch />
                    <Navigation />
                </div>
            </div>
        </header>
    );
}
