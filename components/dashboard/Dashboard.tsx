import { useTranslations } from 'next-intl';

const Dashboard = () => {
	const t = useTranslations('HomePage');

	return (
		<section className="container">
			<h1>{t('title')}</h1>
		</section>
	);
};

export default Dashboard;
