"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import placeholderImage from "@/public/placeholder.png";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-white p-8">
      <Zoom>
        <Image src={placeholderImage} alt="Placeholder" />
      </Zoom>
  
      {/* Uncomment the following line to test react-medium-image-zoom with a tall page */}
      {/* <div className="h-2000 w-full bg-red-400 mt-7"/> */}
    </main>
  );
}
