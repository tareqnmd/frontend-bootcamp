import { dashboardMenu } from '@/lib/menu';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Dashboard = () => {
	const t = useTranslations('HomePage');

	return (
		<section className="container py-2">
			<h1>{t('title')}</h1>
			{dashboardMenu.map((menu) => (
				<Link
					key={menu.href}
					href={menu.href}
				>
					{menu.label}
				</Link>
			))}
		</section>
	);
};

export default Dashboard;
