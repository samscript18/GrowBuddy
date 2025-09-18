import { Button } from '@/components/ui/button';

export const CTA = () => {
	return (
		<section className="py-20 px-4 bg-gradient-to-r from-[#87A96B] to-primary">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl  font-bold text-white mb-6">Ready to Transform Your Farm?</h2>
				<p className="text-white/80 text-sm mb-8 max-w-xl mx-auto">
					Join thousands of successful farmers who trust our expertise to grow their business
				</p>
				<Button
					size="lg"
					className="bg-white text-primary hover:bg-gray-100 px-8 py-5.5 text-sm font-medium cursor-pointer">
					Start Your Journey Today
				</Button>
			</div>
		</section>
	);
};
