import JavascriptMenu from '@/components/modules/javascript/JavascriptMenu';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid grid-cols[auto_1fr] h-full">
			<JavascriptMenu />
			{children}
		</div>
	);
};

export default layout;
