import { GiBananaPeeled } from 'react-icons/gi';

const SessionCheckLoader = () => {
	return (
		<div className="fixed top-0 left-0 min-w-screen min-h-screen flex items-center justify-center gap-2 md:gap-4">
			<GiBananaPeeled size={60} className="text-primary animate-pulse" />
			<span className="font-bold text-3xl md:text-4xl">
				Grow<span className="text-primary">Buddy</span>
			</span>
		</div>
	);
};

export default SessionCheckLoader;
