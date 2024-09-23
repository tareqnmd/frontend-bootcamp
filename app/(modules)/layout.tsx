import BreadCrumbs from '@/components/core/BreadCrumbs';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="container py-2">
			<BreadCrumbs />
			{children}
		</div>
	);
};

export default layout;
