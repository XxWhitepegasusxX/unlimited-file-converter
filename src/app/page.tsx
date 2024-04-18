import Dropzone from "@/components/custom/dropzone";
import React from "react";

export default function Home() {
  return (
    <main className="space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Unleash your creativity with <span className="font-bold text-orange-600">Converter</span> – the ultimate online tool for unlimited and free multimedia
          conversion. Transform images, audio, and videos effortlessly, without restrictions. Start converting
          now and elevate your content like never before!
        </p>
      </div>

      <Dropzone/>
    </main>
  );
}
