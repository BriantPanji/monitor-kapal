import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans, jetbrains } from "@/fonts";
import Navbar from "@c/Navbar";



export const metadata: Metadata = {
  title: "Monitor Kapal",
  description: "Pantau kapal secara real-time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css" />
      </head>
      <body
        className={ `${geistSans.variable} ${geistMono.variable} ${jetbrains.variable} antialiased max-w-full min-w-full overflow-x-hidden min-h-screen h-screen relative` }
      >
        <Navbar />
        <main className="min-w-full max-w-full w-full h-[98vh] min-h-[98vh] max-h-[98vh] py-2 lg:pl-64 transition-all overflow-clip">
          <div className="w-full h-full min-h-screen min-w-full max-w-full flex items-start flex-col gap-0.5 pr-2 max-lg:pl-2 rounded-md">
            { children }
          </div>
        </main>
      </body>
    </html>
  );
}
