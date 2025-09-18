'use client';

import { GiBananaPeeled } from 'react-icons/gi';
import Link from 'next/link';
import { Facebook, Mail, Menu, Twitter, X } from 'lucide-react';
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<nav className="bg-white border-b border-gray-200 py-2 fixed w-full z-50">
			<div className="px-4 sm:px-8 lg:px-16">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-2">
						<div className="bg-primary p-2 rounded">
							<GiBananaPeeled className="h-5 w-5 text-white" />
						</div>
						<span className="text-xl font-semibold text-primary">GrowBuddy</span>
					</div>

					<div className="hidden md:flex items-center space-x-8 lg:space-x-12">
						<Link href="#home" className="text-gray-700 hover:text-primary hover:font-medium transition-colors">
							Home
						</Link>
						<Link
							href="#planting-guide"
							className="text-gray-700 hover:text-primary hover:font-medium transition-colors">
							Planting Guide
						</Link>
						<Link
							href="#chatbot"
							className="text-gray-700 hover:text-primary hover:font-medium transition-colors">
							Chatbot
						</Link>
						<Link
							href="#training-videos"
							className="text-gray-700 hover:text-primary hover:font-medium transition-colors">
							Training Videos
						</Link>
					</div>

					<Menu className="h-8 w-8 text-primary md:hidden" onClick={() => setIsOpen(true)} />
				</div>
			</div>
			{isOpen && (
				<div className="fixed w-screen h-screen inset-0 z-50 bg-primary animate-in fade-in duration-300">
					<div className="flex flex-col h-full animate-in slide-in-from-top duration-500">
						<div className="flex justify-end p-6 animate-in fade-in duration-700">
							<button
								onClick={() => setIsOpen(false)}
								className="text-white hover:text-gray-200 transition-all hover:scale-110 hover:rotate-90 duration-300"
								aria-label="Close mobile menu">
								<X className="h-6 w-6" />
							</button>
						</div>

						<nav className="flex flex-col items-center space-y-8 mt-16">
							<a
								href="#"
								className="text-white text-lg font-normal hover:text-gray-200 transition-all hover:scale-105 animate-in slide-in-from-left duration-500 delay-100"
								onClick={() => setIsOpen(false)}>
								Home
							</a>
							<a
								href="#planting-guide"
								className="text-white text-lg font-normal hover:text-gray-200 transition-all hover:scale-105 animate-in slide-in-from-left duration-500 delay-200"
								onClick={() => setIsOpen(false)}>
								Planting Guide
							</a>
							<a
								href="#chatbot"
								className="text-white text-lg font-normal hover:text-gray-200 transition-all hover:scale-105 animate-in slide-in-from-left duration-500 delay-300"
								onClick={() => setIsOpen(false)}>
								Chatbot
							</a>
							<a
								href="#training-videos"
								className="text-white text-lg font-normal hover:text-gray-200 transition-all hover:scale-105 animate-in slide-in-from-left duration-500 delay-500"
								onClick={() => setIsOpen(false)}>
								Training Videos
							</a>
						</nav>

						<div className="mx-auto mt-16 mb-8 w-48 h-px bg-white/30 animate-in fade-in duration-700 delay-700"></div>

						<div className="flex justify-center space-x-6 mb-8 animate-in zoom-in duration-500 delay-800">
							<a
								href="#"
								className="text-white hover:text-gray-200 transition-all hover:scale-125 hover:rotate-12">
								<FaInstagram className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-200 transition-all hover:scale-125 hover:-rotate-12">
								<Twitter className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-200 transition-all hover:scale-125 hover:-rotate-12">
								<Facebook className="h-6 w-6" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-200 transition-all hover:scale-125 hover:-rotate-12">
								<Mail className="h-6 w-6" />
							</a>
						</div>

						<div className="mt-auto pb-8 text-center animate-in slide-in-from-bottom duration-500 delay-1000">
							<p className="text-white text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};
