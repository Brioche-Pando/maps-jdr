"use client";

import places from "@/data/places";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Map places={places} />
    </main>
  );
}
