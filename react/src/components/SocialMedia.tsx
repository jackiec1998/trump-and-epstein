import { Body, Header } from "./general";
import { useEffect, useRef, useState } from "react";

const supportPosts: string[] = [
	"https://twitter.com/DonaldJTrumpJr/status/1677715945458921473",
	"https://twitter.com/charliekirk11/status/1843421097628512758",
	"https://twitter.com/libsoftiktok/status/1853885016507547665",
	"https://twitter.com/Riley_Gaines_/status/1884808440188436899",
	"https://twitter.com/DineshDSouza/status/1887164256623194400",
	"https://twitter.com/catturd2/status/1892736893294404067",
	"https://twitter.com/Timcast/status/1893018871201775712",
];

const Tweet = ({ url }: { url: string }) => (
	<div className="w-full scale-[0.7]">
		<blockquote className="twitter-tweet" data-dnt="true">
			<a href={url} />
		</blockquote>
	</div>
);

const Carousel = ({
	height,
	posts,
}: {
	height: number;
	posts: React.ReactNode[];
}) => {
	const [index, setIndex] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		const container = scrollRef.current;
		if (!container) return;

		const scrollLeft = container.scrollLeft;
		const itemWidth = container.firstElementChild?.clientWidth || 1;
		const totalItemWidth = itemWidth + 40;

		const computedIndex = Math.round(scrollLeft / totalItemWidth);
		setIndex(computedIndex);
	};

	const scroll = (direction: "left" | "right") => {
		const container = scrollRef.current;
		if (!container) return;

		const itemWidth = container.firstElementChild?.clientWidth || 1;
		const scrollAmount = itemWidth + 40;

		container.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;
		container.addEventListener("scroll", handleScroll, { passive: true });
		return () => container.removeEventListener("scroll", handleScroll);
	}, []);

	const CarouselButtons = () => (
		<>
			<button
				onClick={() => scroll("left")}
				className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-gray-100 text-[10pt] text-gray-400  w-8 h-8 border border-gray-300 hover:bg-gray-200 rounded-full transition"
			>
				←
			</button>
			<button
				onClick={() => scroll("right")}
				className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-gray-100 text-[10pt] text-gray-400 w-8 h-8 border border-gray-300 hover:bg-gray-200 rounded-full transition"
			>
				→
			</button>
		</>
	);

	const CarouselTracker = () => (
		<span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs">
			{index + 1} of {posts.length}
		</span>
	);

	return (
		<div
			style={{ height: `${height}px` }}
			className="relative border border-gray-300 rounded-lg  mt-4 mb-12 bg-gray-50"
		>
			{window.innerWidth >= 600 ? <CarouselButtons /> : null}
			<CarouselTracker />

			<div
				ref={scrollRef}
				className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory h-full gap-10 hide-scrollbar"
			>
				{posts.map((post, i) => (
					<div
						key={i}
						className="snap-start w-full shrink-0 flex items-center justify-center"
					>
						{post}
					</div>
				))}
			</div>
		</div>
	);
};

export const SocialMedia = ({ title, id }: { title: string; id: string }) => {
	const [rightNow, setRightNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setRightNow(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<article className="space-y-2">
			<Header id={id}>{title}</Header>
			<Body>
				Here are a few examples throughout the times—placed in chronological
				order. I'm sure there will be more.
			</Body>
			<Carousel
				height={560}
				posts={supportPosts.map((post) => (
					<Tweet url={post} />
				))}
			/>
			<Body>
				And now that nothing has happened, as of{" "}
				{rightNow
					.toLocaleString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						hour12: true,
					})
					.replace(/, (\d{4})/, ", 2025")}
				, MAGA ain't happy.
			</Body>
		</article>
	);
};
