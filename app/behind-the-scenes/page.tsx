"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
type Props = {}

interface Post {
  id: string;
  caption: string;
  media_url: string;
}

export default function Page({}: Props) {

  const[posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch('/api/instagram_posts')
        .then(response => response.json())
        .then(data => {
            setPosts(data.filtered)
        })
        .catch(error => {
            console.error(error);
        });
  }, [])
  
  
  // if(posts[1]){
  //   console.log(posts[1].media_url);
  // }
  
  return (
    <div className="bg-pink-50 rounded-2xl m-2.5 p-4 min-h-[97vh]">
      <div className="relative top-12">
        <h1>My daily life on Insta...</h1>
        <div className="flex flex-row justify-center items-center">
        <Image src="/avatar.jpeg" alt="avatar" width={50} height={50} className="rounded-full p-2 "/>
        <Link href="https://www.instagram.com/hanna_kelemen_/"><button className="bg-gray-200 px-5 py-2 font-bold rounded-xl h-8 flex items-center">Follow</button></Link>
        </div>
      </div>

      <div className="flex justify-center">
        {posts.length === 0 ?
        <div className="flex justify-center items-center h-96">
          <ClipLoader color="#36d7b7" />
        </div>
        :  
        <div className="flex flex-col gap-10 relative top-20 mb-20">
        {posts.map(post =>{
          const isVideo = post.media_url.includes("mp4");
            const regex = /@(\S+)/g;
            const modifiedCaption = post.caption.match(regex);
            
          //why?
          return (
          <div key={post.id} className="rounded-xl bg-white max-w-[400px] flex flex-col justify-center items-center p-4">
            {!isVideo ? 
            <img src={post.media_url} alt={post.id} width={100} height={100} className="rounded-lg"/>
            : 
            <video controls src={post.media_url} className="rounded-xl"/>}
            {/* <h1>{post?.caption}</h1> */}
            <h1>
                  {post.caption.split(' ').map((word, index) =>
                    modifiedCaption?.includes(word) ? (
                      <span key={index} className="text-blue-600">
                        {word}{' '}
                      </span>
                    ) : (
                      word + ' '
                    )
                  )}
                </h1>
          </div>
            );
        })}
        </div>
        }
      </div>
    </div>
  )
}
