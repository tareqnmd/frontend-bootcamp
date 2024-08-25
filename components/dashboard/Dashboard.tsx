import { getTranslations } from 'next-intl/server';

const Dashboard = async () => {
	const t = await getTranslations('HomePage');
	return (
		<section className="container py-2 grid place-items-center">
			<h1 className="text-3xl">{t('title')}</h1>
		</section>
	);
};

export default Dashboard;
