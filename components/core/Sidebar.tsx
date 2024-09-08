import { RxHamburgerMenu } from 'react-icons/rx';
const Sidebar = () => {
	return (
		<>
			<button className="lg:hidden">
				<RxHamburgerMenu />
			</button>
			<aside className="lg:hidden"></aside>
		</>
	);
};

export default Sidebar;
