"use client";

import places from "@/data/places";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Map places={places} />
    </main>
  );
}
