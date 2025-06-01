import { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
import "./tailwind.css";

export const runtime = "edge";

export const metadata: Metadata = {
    authors: [{ name: "Luca Heidemann", url: "https://lheidem.net/" }],
};

const iosevkaFont = localFont({
    src: [
        {
            path: "./Iosevka-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Iosevka-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./Iosevka-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${iosevkaFont.className} flex min-h-svh flex-col bg-neutral-950`}
            >
                <header className="sticky top-0 border-b border-neutral-600/10 backdrop-blur-lg">
                    <nav className="mx-auto max-w-3xl p-4">
                        <ul className="flex flex-row items-center gap-x-4 text-sm tracking-tight text-neutral-400 select-none">
                            <li>
                                <Link
                                    className="flex flex-row items-center gap-x-2 focus:outline-none focus:text-neutral-200 hover:text-neutral-200 transition-colors"
                                    href="/"
                                >
                                    <img className="h-4 w-4" src="/icon.svg" />
                                    archive.isdn.network
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="mx-auto w-full max-w-3xl grow space-y-8 p-4">
                    {children}
                </main>
                <footer className="border-t border-neutral-600/10">
                    <nav className="mx-auto max-w-3xl p-4">
                        <ul className="flex flex-row gap-x-4 text-sm tracking-tight text-neutral-600 select-none">
                            <li>
                                <a
                                    className="transition-colors hover:text-neutral-400 focus:text-neutral-400 focus:outline-none"
                                    href="https://lheidem.net/legal/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Legal Notice
                                </a>
                            </li>
                            <li>
                                <a
                                    className="transition-colors hover:text-neutral-400 focus:text-neutral-400 focus:outline-none"
                                    href="https://lheidem.net/privacy/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </body>
        </html>
    );
}
