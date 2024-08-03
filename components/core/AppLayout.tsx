import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Footer from './Footer';
import Navbar from './Navbar';

const AppLayout = async ({
	locale,
	children,
}: {
	locale: any;
	children: React.ReactNode;
}) => {
	const messages = await getMessages(locale);
	return (
		<NextIntlClientProvider
			locale={locale}
			messages={messages}
		>
			<main className="main">
				<Navbar />
				{children}
				<Footer />
			</main>
		</NextIntlClientProvider>
	);
};

export default AppLayout;
