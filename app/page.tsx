"use client";

import { Button } from "@/components/button";
import Title from "@/components/stack";

export default function FrontPages() {
  const texts = [
    "As a friendly Full Stack Developer, I can help you solve your problems. I primarily work with PHP but dedicate time to practicing JavaScript, often spending my nights and sometimes my days learning both JavaScript and PHP.",
    "I often work indoors while listening to music on Spotify, enjoying a cup of coffee in the evening, and sometimes in the morning or during the day. I spend a lot of time in front of the computer, typing line by line, and I occasionally exercise in the afternoons."
  ];

  return (
    <section className="text-left space-y-6">
      <Title>I'M IDA BAGUS PERAWITA YASA</Title>

      {/* Menerapkan animasi pada setiap paragraf */}
      {texts.map((text, index) => (
        <p
          key={index}
          className="paragraf text-white text-lg"
          style={{
            '--index': index.toString(),
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: text }} 
        />
      ))}

      <Button title="see more me" href="/About"/>
    </section>
  );
}
