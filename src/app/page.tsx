"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import addData from "@/firebase/firestore/addData"

export default function Home() {
  const router = useRouter();

  const handleForm = async () => {
    const data = {
      name: "John Doe",
      email: "test@gmail.com"
    }
    const {res, err} = await addData("users", data, 'user-id')
    console.log(res);
    
    if (err) {
      console.error(err)
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={()=>handleForm()}>Submit new user</button>
    </div>
  );
}
