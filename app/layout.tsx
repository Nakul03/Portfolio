import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nakul Pise - Full Stack & DevOps Developer',
  description: 'Portfolio of Nakul Pise, a passionate Full Stack and DevOps Developer specializing in modern web technologies and cloud infrastructure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-orbitron bg-black text-cyan-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}