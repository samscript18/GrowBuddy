import { Facebook, Twitter, Linkedin, Phone, Mail, LocationEdit } from 'lucide-react';
import { GiBananaPeeled } from 'react-icons/gi';

export const Footer = () => {
	return (
		<footer className="bg-primary text-white py-12">
			<div className="px-4 sm:px-8 lg:px-16">
				<div className="grid md:grid-cols-4 gap-4 lg:gap-8 mb-8">
					<div className="md:col-span-1">
						<div className="flex items-center space-x-2 mb-4">
							<div className="bg-[#87A96B] p-2 rounded">
								<GiBananaPeeled className="h-5 w-5 text-white" />
							</div>
							<span className="text-xl font-semibold text-white">GrowBuddy</span>
						</div>
						<p className="text-white/80 text-sm mb-4 lg:max-w-[300px]">
							Empowering farmers with expert guidance and innovative solutions for sustainable agriculture.
						</p>
						<div className="flex gap-3">
							<Facebook className="h-5 w-5 text-[#87A96B] hover:text-[#87A96B]/90 cursor-pointer" />
							<Twitter className="h-5 w-5 text-[#87A96B] hover:text-[#87A96B]/90 cursor-pointer" />
							<Linkedin className="h-5 w-5 text-[#87A96B] hover:text-[#87A96B]/90 cursor-pointer" />
						</div>
					</div>

					<div className="md:col-span-1">
						<h3 className="font-medium text-lg mb-4">Services</h3>
						<ul className="space-y-2 text-white/80">
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Crop Analytics
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Irrigation Planning
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Pest Management
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Soil Testing
								</a>
							</li>
						</ul>
					</div>

					<div className="md:col-span-1">
						<h3 className="font-medium text-lg mb-4">Resources</h3>
						<ul className="space-y-2 text-white/80">
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Research Reports
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Webinars
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Mobile App
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-[#87A96B] text-sm">
									Blog
								</a>
							</li>
						</ul>
					</div>

					<div className="md:col-span-1">
						<h3 className="font-medium text-lg mb-4">Contact</h3>
						<div className="space-y-2 text-white/80 text-sm">
							<div className="flex gap-2">
								<div className="flex justify-center items-center cursor-pointer">
									<Phone className="h-5 w-5 text-[#87A96B] hover:text-[#87A96B]/90" />
								</div>
								<p> +1 (555) 123-4567</p>
							</div>
							<div className="flex gap-2">
								<div className="flex justify-center items-center cursor-pointer">
									<Mail className="h-5 w-5 text-[#87A96B] hover:text-[#87A96B]/90" />
								</div>
								<p> info@growbuddy.com</p>
							</div>
							<div className="flex gap-2">
								<div className="flex justify-center items-center cursor-pointer">
									<LocationEdit className="h-5 w-5 text-[#87A96B] hover:text-[#87A96B]/90" />
								</div>
								<p> 123 Farm Road, Agriculture City</p>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-white pt-6 text-center">
					<p className="text-white/80 text-sm font-normal">
						© {new Date().getFullYear()} Farmer Advisory Hub. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
