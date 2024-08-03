import AppLayout from '@/components/core/AppLayout';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
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
	const locale: any = await getLocale();
	return (
		<html lang={locale}>
			<body className={cn('antialiased', font.className)}>
				<AppLayout locale={locale}>{children}</AppLayout>
			</body>
		</html>
	);
}
