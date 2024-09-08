import AppLayout from '@/components/core/AppLayout';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import { getLocale, getTranslations } from 'next-intl/server';
import { Lora, Noto_Sans_Bengali } from 'next/font/google';

const font = Lora({
	subsets: ['latin'],
	variable: '--font-english',
});

const bengaliFont = Noto_Sans_Bengali({
	subsets: ['bengali'],
	variable: '--font-bengali',
});

export const metadata: any = async () => {
	const locale: any = await getLocale();
	const translations = await getTranslations('Basic');
	console.log(locale);
	return {
		title: translations('title'),
		description: 'Developed & Maintained by Tareq',
	};
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
					locale === 'en' ? font.variable : bengaliFont.variable,
					locale === 'en' ? 'font-english' : 'font-bengali'
				)}
			>
				<AppLayout locale={locale}>{children}</AppLayout>
			</body>
		</html>
	);
}
