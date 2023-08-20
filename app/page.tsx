'use client';

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { useGlitch } from 'react-powerglitch';

import { Analytics } from '@vercel/analytics/react';
import { Button } from "./components/ui/button";

const navigation = [
	{ name: "Blog", href: "/blog" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	const glitch = useGlitch();

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Analytics />
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-8">
					{navigation.map((item) => (
						<Button className="bg-zinc-300" variant={"default"} asChild>
							<Link
								key={item.href}
								href={item.href}
								className="text-xl duration-500 hover:text-zinc-100 hover:bg-black"
							>
								{item.name}
							</Link>
						</Button>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
			<span ref={glitch.ref} className="text-zinc-300">Ryan Malani</span>
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500 ">
					Welcome to my site, here I'll share some of my thoughts and ideas around tech and life in general. I'm currently working on solutions at {" "}
					<Link
						target="_blank"
						href="https://inflowfed.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						INflow Federal
					</Link>

					<br />
					and working on{" "}
					<Link
						target="_blank"
						href="https://labs.inflowfed.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						INflow Labs
					</Link>{" "}
					to bring some innovative ideas to defense. 
				</h2>
			</div>
		</div>
	);
}
