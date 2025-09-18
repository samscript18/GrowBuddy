export const Stats = () => {
	const stats = [
		{
			number: '2,500+',
			label: 'Farmers Served',
		},
		{
			number: '95%',
			label: 'Success Rate',
		},
		{
			number: '40%',
			label: 'Avg. Yield Increase',
		},
		{
			number: '24/7',
			label: 'Expert Support',
		},
	];

	return (
		<section className="py-12 bg-primary">
			<div className="px-4 sm:px-8 lg:px-16">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
					{stats.map((stat, index) => (
						<div key={index} className="text-white">
							<div className="text-4xl font-bold mb-2">{stat.number}</div>
							<div className="text-[#87A96B] text-sm md:text-base">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
