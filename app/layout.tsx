import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Poppins } from 'next/font/google';

const font = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Javascript Bootcamp',
	description: 'Developed & maintained by Tareq',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages(locale);
	return (
		<html lang={locale}>
			<body className={cn('antialiased', font.className)}>
				<NextIntlClientProvider
					locale={locale}
					messages={messages}
				>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
