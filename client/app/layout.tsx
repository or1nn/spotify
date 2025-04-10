import { Metadata, Viewport } from "next";
import clsx from "clsx";

import "./globals.css";
import { GeistSans } from "geist/font/sans";

import { AppHeader } from "@/widgets/header";
import { AppProvider } from "@/app/providers";
export const metadata: Metadata = {
  title: {
    default: "Spotify",
    template: `%s | Spotify`,
  },
  description: "Музыкальная платформа",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased auto",
          GeistSans.className,
        )}
      >
        <AppProvider>
          <AppHeader />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
