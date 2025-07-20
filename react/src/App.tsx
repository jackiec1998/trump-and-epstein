import { NewArrests } from "./components/NewArrests";
import { Body, Divider, Title } from "./components/general";
import { PhotosTogether } from "./components/PhotosTogether";
import { Quotes } from "./components/Quotes";
import { Footer } from "./components/Footer";
import { Polls } from "./components/Polls";
import { SocialMedia } from "./components/SocialMedia";
import { useState, useRef, useEffect } from "react";

const homeIDs = [
	"",
	"#home",
	"#photos-together",
	"#polls",
	"#quotes",
	"#social-media",
	"#new-arrests",
];

const navItems = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
];

const Navigation = () => {
	const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

	const currentPath = window.location.hash;
	const initialIndex = navItems.findIndex((item) => item.href === currentPath);
	const [activeIndex, setActiveIndex] = useState(
		initialIndex !== -1 ? initialIndex : 0
	);

	// Listens to when the activeIndex changes, i.e., when a tab is clicked.
	useEffect(() => {
		const node = navRefs.current[activeIndex];
		if (node) {
			const rect = node.getBoundingClientRect();
			const parentRect = node.parentElement!.getBoundingClientRect();

			setHighlightStyle({
				left: rect.left - parentRect.left,
				width: rect.width,
			});
		}
	}, [activeIndex]);

	return (
		<nav className="relative flex flex-row items-center w-max text-gray-600 text-xs border border-gray-200 my-4 rounded-md px-0.5 py-0.5">
			<div
				className="absolute bg-gray-300 opacity-50 transition-all duration-300 rounded h-[17pt]"
				style={{
					left: highlightStyle.left,
					width: highlightStyle.width - 2, // Re: magic number. Probably has something to do with the border in parent.
					zIndex: 0,
				}}
			></div>

			{navItems.map((item, index) => (
				<a
					key={item.label}
					href={item.href}
					ref={(el) => {
						navRefs.current[index] = el;
					}}
					onClick={() => setActiveIndex(index)}
					className="relative z-10 px-2 py-1"
				>
					{item.label}
				</a>
			))}
		</nav>
	);
};

const Home = () => {
	const statements = [
		"There are at least 10 documented instances of Trump appearing in photos with Epstein or Maxwell.",
		"Most Americans believe Epstein was murdered, though many remain unsure.",
		"Trump has insinuated multiple times that he would release the Epstein files.",
		"MAGA has been vehemently supportive of releasing the Epstein files.",
		"No new arrests, charges, or convictions have resulted from Trump's actions regarding Epstein.",
	];

	return (
		<>
			<Title>A Curated Fact Sheet on Trump & the Epstein Conspiracy</Title>

			<Body>
				I mostly did this for myself, but I hope you find it useful or at least
				entertaining.
			</Body>
			<Body>Below are the list of key points:</Body>
			<ul className="list-disc ml-6 text-xs text-gray-500 leading-relaxed">
				{statements.map((statement, index) => (
					<li key={index} className="pl-1">
						<a href={`${homeIDs[index + 2]}`} className="hover:underline">
							{statement}
						</a>
					</li>
				))}
			</ul>

			<Divider />

			<PhotosTogether title={statements[0]} id={"photos-together"} />

			<Divider />

			<Polls title={statements[1]} id={"polls"} />

			<Divider />

			<Quotes title={statements[2]} id={"quotes"} />

			<Divider />

			<SocialMedia title={statements[3]} id={"social-media"} />

			<Divider />

			<NewArrests title={statements[4]} id={"new-arrests"} />
		</>
	);
};

const About = () => {
	return (
		<>
			<Title>About</Title>
			<Body>
				This project is a collection of facts and resources related to Donald
				Trump's connections with Jeffrey Epstein and Ghislaine Maxwell. It
				includes photos, polls, quotes, and social media posts that highlight
				the relationship between Trump and Epstein.
			</Body>
		</>
	);
};

const App = () => {
	const [hash, setHash] = useState(window.location.hash);

	// Attach an event listener to update the hash state when the URL changes.
	useEffect(() => {
		const onHashChange = () => setHash(window.location.hash);
		window.addEventListener("hashchange", onHashChange);
		return () => window.removeEventListener("hashchange", onHashChange);
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			<div className="w-full max-w-md mx-auto px-4 py-6 flex-grow">
				<Navigation />
				{homeIDs.includes(hash) && <Home />}
				{["#about"].includes(hash) && <About />}
			</div>

			<Footer />
		</div>
	);
};

export default App;
