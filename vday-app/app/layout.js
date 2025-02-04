import { Geist, Geist_Mono, Dancing_Script, Courgette, Bungee_Tint } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
})

const courgette = Courgette({
  variable: "--font-courgette",
  weight: '400',
  subsets: ["latin"],
})

const bungeeTint = Bungee_Tint({
  variable: "--font-bungee-tint",
  weight: '400',
  subsets: ["latin"],
})

export const metadata = {
  title: "Valentine's Day",
  description: "Will you be my Valetine?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${courgette.variable} ${bungeeTint.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
