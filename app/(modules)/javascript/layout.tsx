import JSSidebar from '@/components/modules/javascript/JSSidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid grid-cols[auto_1fr] h-full">
			<JSSidebar />
			{children}
		</div>
	);
};

export default layout;
