"use client";
import videos from "../../videos.json";
import interviews from "../../interviews.json";
import { useStore } from "@/components/State";

type Props = {};

interface languagesState {
    language: string;
}

const sectionClass =
    "rounded-[32px] border border-rose-100 bg-white/90 p-6 shadow-xl";

export default function Page({}: Props) {
    const language = useStore((state: languagesState) => state.language);

    const sections = [
        {
            title: language === "hun" ? "Videók" : "Videos",
            data: videos,
        },
        {
            title: language === "hun" ? "Interjúk" : "Interviews",
            data: interviews,
        },
    ];

    return (
        <div className="space-y-8">
            {sections.map((section) => (
                <section key={section.title} className={sectionClass}>
                    <h1 className="text-center text-2xl font-semibold text-rose-500">
                        {section.title}
                    </h1>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {section.data.map((video, index) => (
                            <div
                                key={`${section.title}-${index}`}
                                className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-lg"
                            >
                                <div className="aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.video}`}
                                        frameBorder="0"
                                        loading="lazy"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={`${section.title}-${index}`}
                                        className="h-full w-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
