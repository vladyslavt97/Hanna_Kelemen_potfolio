"use client"
import Gallery from "@/components/Gallery"
import { useStore } from "@/components/State";
import { useState } from "react";
import { motion } from "framer-motion";
type Props = {}

interface languagesState {
  language: string,
}

export default function Page({}: Props) {
  const language = useStore((state: languagesState) => state.language);
  
  return (
    <div className="bg-amber-400 rounded-2xl m-2.5 p-4 h-screen flex flex-col justify-center gap-10">
        <div>
          <motion.h2 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2, delay: 1}} 
            className="text-center font-bold text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">    {language === "hun" ? "Képtár" : "Gallery"}
            </motion.h2>
            <Gallery/>
          </div>
    </div>
  )
}