
// "use client";
import Image from "next/image";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
import Link from "next/link";

export default function Home() {
  // const state = useSelector((state:RootState)=> state.counter.counter)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      This is the landing page.


{/* {state}
<Link href="/counter">Counter</Link> */}
    </h1>
    </main>
  );
}
