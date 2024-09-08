import AppLayout from '@/components/core/AppLayout';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { Lora, Noto_Sans_Bengali } from 'next/font/google';

const font = Lora({
	subsets: ['latin'],
	variable: '--font-english',
});

const bengaliFont = Noto_Sans_Bengali({
	subsets: ['bengali'],
	variable: '--font-bengali',
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
	const locale: any = await getLocale();
	return (
		<html lang={locale}>
			<body
				className={cn(
					'antialiased',
					bengaliFont.variable,
					font.variable,
					locale === 'en' ? 'font-english' : 'font-bengali leading-normal'
				)}
			>
				<AppLayout locale={locale}>{children}</AppLayout>
			</body>
		</html>
	);
}
