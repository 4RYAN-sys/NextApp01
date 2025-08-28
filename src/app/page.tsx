// app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6 text-blue-900">
      <h1 className="text-5xl font-bold mb-4">Halo, Saya Aryan Pratama S.</h1>
      <p className="text-xl max-w-xl text-center mb-8">
        Selamat datang di website pribadi saya. Saya seorang developer yang
        suka membuat aplikasi web modern dan efisien.
      </p>
      <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
      >
        Hubungi Saya
      </a>
    </main>
  );
}
