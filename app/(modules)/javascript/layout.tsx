import JavascriptMenus from '@/components/modules/javascript/JavascriptMenus';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid grid-cols[auto_1fr] h-full">
			<JavascriptMenus />
			{children}
		</div>
	);
};

export default layout;
