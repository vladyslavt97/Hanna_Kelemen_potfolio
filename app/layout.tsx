import "./globals.css";
import { Assistant } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const assistant = Assistant({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["normal"],
});

export const metadata = {
    title: "Hanna Kelemen",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${assistant.className} bg-gradient-to-br from-rose-50 via-white to-rose-100 text-slate-900 antialiased`}
            >
                <div className="relative min-h-screen pb-12">
                    <Header />
                    <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
