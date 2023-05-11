"use client"
import { motion } from "framer-motion"
import Link from "next/link";
import { useStore } from "./State";

type Props = {}
interface openState {
    open: false;
  setOpen: (open: boolean) => void;
}

export default function Navigation({}: Props) {
    const open = useStore((state: openState) => state.open);
    const setOpen = useStore((state: openState) => state.setOpen);
    const styling = "w-7 bg-pink-500 h-0.5";

    const toggleOpen = (value: boolean) => {
        setOpen(value);
    }
    console.log('open', open);
    
  return (
    <div>
        <div className={`flex flex-col gap-1.5 right-8 top-5 z-50 ${open ? "fixed" : "absolute"}`} onClick={e => toggleOpen(!open)}>
            <motion.div className={styling}/>
            <motion.div className={styling}/>
            <motion.div className={styling}/>
        </div>
        {open && 
            <div className="h-screen bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100 w-full flex flex-col justify-center items-cneter gap-36 z-40 fixed top-0">
                <Link href="/" onClick={e => toggleOpen(false)}>Home</Link>
                <Link href="/gallery" onClick={e => toggleOpen(false)}>Gallery</Link>
                <Link href="/videos" onClick={e => toggleOpen(false)}>Videos</Link>
            </div>
        }
    </div>
  )
}