"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {};

interface Post {
    id: string;
    caption: string;
    media_url: string;
}

export default function Page({}: Props) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("/api/instagram_posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.filtered);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="space-y-8">
            <section className="rounded-[32px] border border-rose-100 bg-white/90 p-6 shadow-xl">
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
                    <div>
                        <h1 className="text-2xl font-semibold text-rose-500">
                            My daily life on Insta...
                        </h1>
                        <p className="text-sm text-slate-500">
                            @hanna_kelemen_
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/avatar.jpeg"
                            alt="avatar"
                            width={64}
                            height={64}
                            className="rounded-full border border-rose-100 p-1"
                        />
                        <Link
                            href="https://www.instagram.com/hanna_kelemen_/"
                            className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
                        >
                            Follow
                        </Link>
                    </div>
                </div>
            </section>

            <section className="rounded-[32px] border border-rose-100 bg-white/90 p-6 shadow-xl">
                {posts.length === 0 ? (
                    <div className="flex h-64 items-center justify-center">
                        <ClipLoader color="#f43f5e" />
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                        {posts.map((post) => {
                            const isVideo = post.media_url.includes("mp4");
                            const regex = /@(\S+)/g;
                            const modifiedCaption =
                                post.caption.match(regex) ?? [];

                            return (
                                <article
                                    key={post.id}
                                    className="flex flex-col gap-4 rounded-3xl border border-rose-100/70 bg-white/90 p-4 shadow-lg"
                                >
                                    {isVideo ? (
                                        <video
                                            controls
                                            src={post.media_url}
                                            className="h-80 w-full rounded-2xl object-cover"
                                        />
                                    ) : (
                                        <Image
                                            src={post.media_url}
                                            alt={post.id}
                                            width={600}
                                            height={600}
                                            unoptimized
                                            className="h-80 w-full rounded-2xl object-cover"
                                        />
                                    )}
                                    <p className="text-sm leading-relaxed text-slate-600">
                                        {post.caption.split(" ").map(
                                            (word, index) =>
                                                modifiedCaption.includes(word) ? (
                                                    <span
                                                        key={`${post.id}-${index}`}
                                                        className="text-rose-500"
                                                    >
                                                        {word}{" "}
                                                    </span>
                                                ) : (
                                                    word + " "
                                                )
                                        )}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
}
