import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
	title: 'Toun',
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const locale = await getLocale();
      const direction = getLangDir(locale);


	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();


  return (
		<html lang={locale} dir={direction}>
			<ThemeProvider />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-background)] text-[var(--color-primary)]`}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
  );
}
