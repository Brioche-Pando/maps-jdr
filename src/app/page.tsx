'use client'

import Map from "./Map";
import places from "@/data/places";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='container mx-auto'>
          <h1 className='text-4xl font-bold text-center my-8'>
            Carte Interactive JDR
          </h1>
          <Map places={places} />
        </div>
      </div>
    </main>
  );
}
