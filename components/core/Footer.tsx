import { useTranslations } from 'next-intl';

const Footer = () => {
	const t = useTranslations('Footer');
	return (
		<footer className="border-t">
			<div className="container flex items-center justify-center py-[20px]">
				<p>{t('copyright')}</p>
			</div>
		</footer>
	);
};

export default Footer;
