'use client';

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { useGlitch } from 'react-powerglitch';

import { Analytics } from '@vercel/analytics/react';

const navigation = [
	{ name: "Blog", href: "/blog" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	const titleGlitch = useGlitch();
	const buttonGlitch = useGlitch({
		"playMode": "hover",
		"createContainers": true,
		"hideOverflow": false,
		"timing": {
		  "duration": 1000,
		  "easing": "ease-in-out"
		},
		"glitchTimeSpan": {
		  "start": 0.05,
		  "end": 0.25
		},
		"shake": {
		  "velocity": 15,
		  "amplitudeX": 0.1,
		  "amplitudeY": 0.1
		},
		"slice": {
		  "count": 6,
		  "velocity": 15,
		  "minHeight": 0.02,
		  "maxHeight": 0.15,
		  "hueRotate": true
		},
		"pulse": false
	  })

	return (
		<div className="flex flex-col items-center md:justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Analytics />
			<nav className="my-16 animate-fade-in">
				<ul className="flex flex-wrap items-center justify-center gap-8">
					{navigation.map((item) => (
						<button ref={buttonGlitch.ref} className="rounded-2xl text-sm md:text-2xl text-zinc-100 font-bold uppercase flex hover:font-extrabold items-center justify-center px-8 py-4 leading-none [&amp;_svg]:ml-[8px] [&amp;_svg]:mt-[1px] shadow-lg shadow-zinc-100 shadow-fill hover:shadow-input-grow border-zinc-900 active:shadow-input-shrink border-2 bg-gradient-to-r from-gray-950 from-21.2% to-purple-900 to-84.8% transition-all duration-150 ease-in-out will-change-transform hover:translate-y-[-2px] active:translate-y-[2px] active:duration-100 md:h-[90px] group mx-auto h-full w-full md:w-auto md:min-w-[220px] lg:min-w-[295px]">
							<Link
								key={item.href}
								href={item.href}
							>
								{item.name}
							</Link>
							<div className="ml-2 scale-150">
								<svg className="stroke-zinc-100 stroke-2" fill="none" width="12" height="12" viewBox="0 0 10 10" aria-hidden="true">
									<path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
									<path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
								</svg>
							</div>
						</button>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
			<span ref={titleGlitch.ref} className="text-zinc-300">Ryan Malani</span>
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500 ">
					Welcome to my site, here I'll share some of my thoughts and ideas around tech and life in general. 
					
					<br />
					I'm currently working on solutions at {" "}
					<Link
						target="_blank"
						href="https://inflowfed.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						INflow Federal
					</Link>
					<wbr /> and working on{" "}
					<Link
						target="_blank"
						href="https://labs.inflowfed.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						INflow Labs
					</Link>{" "}
					<wbr /> bringing innovative ideas to life for national defense. 
				</h2>
			</div>
		</div>
	);
}
