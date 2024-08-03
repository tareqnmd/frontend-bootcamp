import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

const Home = () => {
	const t = useTranslations('HomePage');

	return (
		<>
			<h1>{t('title')}</h1>
			<LocaleSwitcher />
		</>
	);
};

export default Home;
