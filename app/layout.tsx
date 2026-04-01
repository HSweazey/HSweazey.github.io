import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hannah Sweazey Portfolio",
  description: "Data Science Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        
        <div className="max-w-5xl mx-auto pt-12 px-6">
          
          {/* 1. The New Global Dark Blue Header */}
          <header className="bg-[#2c3e5d] text-white p-10 rounded-t-xl shadow-sm">
            <h1 className="text-5xl font-extrabold mb-3 tracking-tight">Hannah Sweazey</h1>
            <h2 className="text-xl text-gray-300 mb-6 font-light">
              Data Science Undergraduate Senior | Computer Science Concentration
            </h2>
            <p className="text-gray-100 leading-relaxed mb-8 max-w-3xl text-lg">
              Hello! I am currently a senior at the College of William and Mary. Through my research, I specialize in the use of machine learning, LLMs for coding and malware identification, and data visualization. My concentration in computer science has also exposed me to developing data structures, data containers, and overall code optimization. I have collaborated with peers on many different types of technical projects while also documenting individual ones.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/HSweazey" className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-2 px-6 rounded shadow">
                GitHub
              </a>
              <a href="/files/Sweazey_Resume.pdf" className="border border-white hover:bg-white/10 transition-colors text-white font-semibold py-2 px-6 rounded">
                Resume
              </a>
            </div>
          </header>

          {/* 2. The Navigation Bar */}
          <nav className="flex space-x-8 p-4 px-10 bg-white border-x border-b border-gray-200 shadow-sm rounded-b-xl mb-8">
            <Link href="/" className="text-gray-500 hover:text-blue-600 font-semibold transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-blue-600 font-semibold transition-colors">
              About Me
            </Link>
            {/* Added the Blog Link here! */}
            <Link href="/blog" className="text-gray-500 hover:text-blue-600 font-semibold transition-colors">
              Posts
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-600 font-semibold transition-colors">
              Contact Me
            </Link>
          </nav>

          {/* 3. Your individual page content renders here */}
          <main className="pb-20">
            {children} 
          </main>

        </div>
      </body>
    </html>
  );
}