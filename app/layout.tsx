import AppLayout from '@/components/core/AppLayout';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import { getLocale, getTranslations } from 'next-intl/server';
import { Noto_Serif_Bengali, Open_Sans } from 'next/font/google';

const font = Open_Sans({
	subsets: ['latin'],
	variable: '--font-english',
});

const bengaliFont = Noto_Serif_Bengali({
	subsets: ['bengali'],
	variable: '--font-bengali',
});

export const metadata: any = async () => {
	const translations = await getTranslations('Basic');
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
