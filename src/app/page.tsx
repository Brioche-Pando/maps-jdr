"use client";

import Map from "@/components/Map";
import places from "@/data/places";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Map places={places} />
    </main>
  );
}
