import { useState, type JSX } from "react";
import { appearances } from "./data";

const Title = ({ children }: { children: React.ReactNode }) => (
	<h1 className="text-2xl font-bold text-gray-900 mb-2">{children}</h1>
);

const Body = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<p className={`text-xs leading-relaxed text-gray-500 my-2 ${className}`}>
		{children}
	</p>
);

const Header = ({ children }: { children: React.ReactNode }) => (
	<h2 className="text-lg font-semibold text-gray-800 text-pretty">
		{children}
	</h2>
);

const Bold = ({ children }: { children: React.ReactNode }) => (
	<span className="font-semibold text-gray-600">{children}</span>
);

const DatedSubheader = ({
	children,
	date,
}: {
	children: React.ReactNode;
	date: string;
}) => (
	<div>
		<time className="text-[8pt] text-gray-400">{date}</time>
		<h3 className="font-semibold text-[11pt] text-gray-600">{children}</h3>
	</div>
);

const Divider = () => <hr className="my-4 border-t border-gray-200" />;

const SourceButton = ({
	children,
	href,
	className = "",
}: {
	children: React.ReactNode;
	href: string;
	className?: string;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={`inline-flex items-center border border-gray-200 text-xs px-2 py-1 rounded-md text-gray-500  w-auto hover:bg-gray-50 hover:border-gray-300 hover:text-gray-600 transition ${className}`}
	>
		{children}
		<span className="ml-1.5">→</span>
	</a>
);

const Link = ({
	href,
	label,
	withParentheses = true,
}: {
	href: string;
	label: string;
	withParentheses?: boolean;
}) => (
	<span>
		{withParentheses && "("}
		<a
			href={href}
			className={`underline transition-colors hover:text-blue-600 italic ${
				withParentheses ? "mx-[2px]" : ""
			}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{label}
		</a>
		{withParentheses && ")"}
	</span>
);

export const IsotypeChart = ({
	data,
}: {
	data: {
		label: string;
		value: number;
		color: string;
		difference?: number;
	}[];
}) => {
	const total = 100;
	const squares: { color: string; label: string }[] = [];

	data.forEach(({ value, color, label }) => {
		for (let i = 0; i < value; i++) {
			squares.push({ color, label });
		}
	});

	// Fill to 100 if not already
	while (squares.length < total) {
		squares.push({ color: "bg-gray-200", label: "Unused" });
	}

	return (
		<div className="flex justify-center my-4">
			<div className="flex flex-row gap-6">
				{/* Grid */}
				<div className="grid grid-cols-10 gap-1.5 w-fit mx-auto">
					{squares.map((square, idx) => (
						<div
							key={idx}
							className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${square.color}`}
							title={square.label}
						/>
					))}
				</div>

				{/* Legend */}
				<div className="flex flex-col space-y-2 text-gray-500 text-[8pt]">
					{data.map(({ label, value, color, difference }, idx) => (
						<div key={idx} className="flex items-center gap-2 ">
							<div className={`w-3 h-3 rounded-sm ${color}`} />
							<div className="relative flex justify-between w-[80px]">
								<span>{label}</span> <span>{value}%</span>
								<div className="absolute left-[90px] w-[30px] text-right">
									{difference !== undefined && difference !== 0 && (
										<span
											className={`text-xs ${
												difference > 0 ? "text-green-500" : "text-red-500"
											}`}
										>
											({difference > 0 ? "+" : ""}
											{difference})
										</span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const BlockQuote = ({ children }: { children: React.ReactNode }) => (
	<blockquote className="text-xs text-gray-500 border-s-3 border-gray-200 mt-2 py-1 pl-3 leading-relaxed">
		{children}
	</blockquote>
);

const Timeline = () => {
	const formatDate = (year: number, month: string, day?: number) =>
		`${month}${day ? ` ${day},` : ""} ${year}`;

	const Bullet = () => (
		<div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-[6.5px] mt-[8.5px] border-2 border-white"></div>
	);

	return (
		<ol className="relative ml-2 border-s border-gray-200 space-y-4 mt-4 pb-2">
			{appearances.map((appearance, index) => (
				<li key={index} className="ml-4 w-[320px] space-y-1">
					<Bullet />
					<time className="text-[7pt] text-gray-400">
						{formatDate(appearance.year, appearance.month, appearance.day)}
					</time>
					<p className="text-[10pt] font-semibold text-gray-800">
						{appearance.location}
					</p>
					<p className="text-xs leading-relaxed text-gray-500 text-pretty">
						{appearance.description}
					</p>
					<SourceButton href={appearance.source} className="mt-1">
						{appearance.buttonText}
					</SourceButton>
				</li>
			))}
		</ol>
	);
};

const EmersonPoll = () => {
	const [filter, setFilter] = useState<
		"all" | "democrats" | "republicans" | "independents"
	>("all");

	const data = {
		all: [
			{ label: "Murder", value: 34, color: "bg-red-500" },
			{ label: "Suicide", value: 33, color: "bg-blue-500" },
			{ label: "Unsure", value: 33, color: "bg-gray-200" }, // Reported 32%, but rounded up.
		],
		democrats: [
			{ label: "Murder", value: 26, color: "bg-red-500", difference: 26 - 34 },
			{
				label: "Suicide",
				value: 38,
				color: "bg-blue-500",
				difference: 38 - 33,
			},
			{
				label: "Unsure",
				value: 100 - (26 + 38),
				color: "bg-gray-200",
				difference: 100 - (26 + 38) - 33,
			}, // Implicit, didn't read primary source.
		],
		republicans: [
			{ label: "Murder", value: 46, color: "bg-red-500", difference: 46 - 34 },
			{
				label: "Suicide",
				value: 26,
				color: "bg-blue-500",
				difference: 26 - 33,
			},
			{
				label: "Unsure",
				value: 100 - (46 + 26),
				color: "bg-gray-200",
				difference: 100 - (46 + 26) - 33,
			}, // Same comment as above.
		],
		independents: [
			{ label: "Murder", value: 31, color: "bg-red-500", difference: 31 - 34 },
			{
				label: "Suicide",
				value: 37,
				color: "bg-blue-500",
				difference: 37 - 33,
			},
			{ label: "Unsure", value: 32, color: "bg-gray-200", difference: 32 - 33 }, // Reported 33%, but rounded down to match total.
		],
	};

	return (
		<div className="my-4">
			<div className="flex flex-row items-center space-x-2">
				<label className="block text-xs text-gray-600 mb-1">
					Filter by party affiliation:
				</label>
				<select
					value={filter}
					onChange={(e) => setFilter(e.target.value as any)}
					className="border border-gray-200 rounded-md px-2 py-1 text-xs text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
				>
					<option value="all">All</option>
					<option value="democrats">Democrats</option>
					<option value="republicans">Republicans</option>
					<option value="independents">Independents</option>
				</select>
			</div>

			<IsotypeChart data={data[filter]} />
		</div>
	);
};

const YouGovPoll = () => {
	const [filter, setFilter] = useState<
		"all" | "democrats" | "republicans" | "independents"
	>("all");

	const data = {
		all: [
			{ label: "Murder", value: 39, color: "bg-red-500" },
			{ label: "Suicide", value: 20, color: "bg-blue-500" },
			{ label: "Accident", value: 1, color: "bg-green-500" },
			{ label: "Unsure", value: 40, color: "bg-gray-200" },
		],
		democrats: [
			{ label: "Murder", value: 38, color: "bg-red-500", difference: 38 - 39 },
			{
				label: "Suicide",
				value: 23,
				color: "bg-blue-500",
				difference: 23 - 20,
			},
			{ label: "Accident", value: 1, color: "bg-green-500", difference: 0 },
			{ label: "Unsure", value: 38, color: "bg-gray-200", difference: 38 - 40 },
		],
		republicans: [
			{ label: "Murder", value: 43, color: "bg-red-500", difference: 43 - 39 },
			{
				label: "Suicide",
				value: 21,
				color: "bg-blue-500",
				difference: 21 - 20,
			},
			{ label: "Accident", value: 1, color: "bg-green-500", difference: 0 },
			{ label: "Unsure", value: 35, color: "bg-gray-200", difference: 35 - 40 },
		],
		independents: [
			{ label: "Murder", value: 37, color: "bg-red-500", difference: 37 - 39 },
			{
				label: "Suicide",
				value: 17,
				color: "bg-blue-500",
				difference: 17 - 20,
			},
			{ label: "Accident", value: 1, color: "bg-green-500", difference: 0 },
			{ label: "Unsure", value: 45, color: "bg-gray-200", difference: 45 - 40 },
		],
	};

	return (
		<div className="my-4">
			<div className="flex flex-row items-center space-x-2">
				<label className="block text-xs text-gray-600 mb-1">
					Filter by party affiliation:
				</label>
				<select
					value={filter}
					onChange={(e) => setFilter(e.target.value as any)}
					className="border border-gray-200 rounded-md px-2 py-1 text-xs text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
				>
					<option value="all">All</option>
					<option value="democrats">Democrats</option>
					<option value="republicans">Republicans</option>
					<option value="independents">Independents</option>
				</select>
			</div>

			<IsotypeChart data={data[filter]} />
		</div>
	);
};

const FoxNewsDialog = () => {
	const chat: { person: string; text: string | JSX.Element }[] = [
		{
			person: "Rachel Campos-Duffy",
			text: "If you were president, would you declassify—you can answer yes or no to these—would you declassify the 9/11 files?",
		},
		{
			person: "Donald Trump",
			text: "Yeah.",
		},
		{
			person: "Rachel Campos-Duffy",
			text: "Would you declassify [the] JFK files?",
		},
		{
			person: "Donald Trump",
			text: "Yeah. I did. I did a lot of it.",
		},
		{
			person: "Rachel Campos-Duffy",
			text: "Would you declassify the Epstein files?",
		},
		{
			person: "Donald Trump",
			text: (
				<>
					<span className="font-semibold text-black">Yeah, yeah. I would.</span>{" "}
					I guess I would. I think that less so because—you know, you don't
					know—you don't want to affect people's lives if it's phony stuff in
					there, 'cause it's a lot of phony stuff with that whole world. But I
					think I would, or at least-
				</>
			),
		},
		{
			person: "Rachel Campos-Duffy",
			text: "You think that would restore trust, help restore trust?",
		},
		{
			person: "Donald Trump",
			text: "Yeah. I don't know about Epstein so much as I do the others, certainly about the way he died. It'd be interesting to find out what happened there, because that was a weird situation and the cameras didn't happen to be working, et cetera, et cetera. But I'd go a long way toward that one.",
		},
	];

	const Avatar = ({ src }: { src: string }) => (
		<img src={src} className="w-7 h-7 rounded-full mb-0.5" />
	);

	return (
		<div className=" relative flex flex-col space-y-4 mt-6">
			{chat.map(({ person, text }, index) => (
				<div
					key={index}
					className={`flex flex-row items-end ${
						person === "Rachel Campos-Duffy" ? "justify-end" : "justify-start"
					}`}
				>
					{person === "Donald Trump" && <Avatar src="/src/assets/trump.jpg" />}
					<div
						className={`border border-gray-200 rounded-md p-3 mx-3 bg-gray-50 text-xs text-gray-700 w-auto max-w-[300px] ${
							person === "Donald Trump" ? "rounded-bl-none" : "rounded-br-none"
						}`}
					>
						<p>{text}</p>
						<p className="text-gray-400 mt-2">{person}</p>
					</div>
					{person === "Rachel Campos-Duffy" && (
						<Avatar src="/src/assets/rachel.jpg" />
					)}
				</div>
			))}
		</div>
	);
};

function App() {
	return (
		<div className="flex justify-center">
			<div className="w-[430px] my-8">
				<Title>A Curated Fact Sheet on Trump & the Epstein Conspiracy</Title>

				<Body>
					I mostly did this for myself, but I hope you find it useful or at
					least entertaining.
				</Body>
				<Body>Below are the list of key points:</Body>
				<ul className="list-disc ml-6 text-xs text-gray-500 leading-relaxed">
					<li className="">
						There are at least 10 documented instances where Trump appeared in
						photos with Epstein or Maxwell.
					</li>
					<li>
						Most Americans believe Epstein was murdered, though many remain
						unsure.
					</li>
				</ul>

				<Divider />

				<article className="space-y-2">
					<Header>
						There are at least 10 documented instances where Trump appeared in
						photos with Epstein or Maxwell.
					</Header>
					<Body>
						These photos were taken at various events in New York City and
						Mar-a-Lago. The earliest was in November 1992 and the latest was in
						2002.
					</Body>
					<Timeline />
					<Body className="mt-3">
						Although not pictured together, Epstein was also photographed
						attending Trump's wedding to Marla Maples in December 1993.
					</Body>
					<SourceButton href="https://www.dafjones.com/image?_bqG=9&_bqH=eJxtT9tOAyEQ_Zrum0k1rds24YEyuE7chWaAtjwRNZvWeO3txa.X2TS6UUk4nAsHMrR52U_K0y6tN_5UXm9Ho_p2GtcXK_U8u5rOLodD3hkxgVOi_Tgc26e3ApMD6fVgPG.awRhEzwBgA6BnxbzY5DPb.ndV_63q_6sKfew.8zlmomwwnmJCZ1laQm1yhtawRJdI11o6DWe56GtnyQuS5q7opkvSgDhmHpymhCACT17tHj7LyYJWr.85WiL5IOskK21U5EtFUvOE.eFcPdPwTenmhzZMpfLi0N7vH7fFsmtXHSrGL66gcaU-">
						View on Dafydd Jones
					</SourceButton>
				</article>

				<Divider />

				<article className="space-y-2">
					<Header>
						Most Americans believe Epstein was murdered, though many remain
						unsure.
					</Header>
					<Body>
						On August 10, 2019, Epstein was found unresponsive in his
						Metropolitan Correctional Center jail cell where he was awaiting
						trial.{" "}
						<Link
							href="https://www.npr.org/2019/08/10/750113214/jeffrey-epstein-found-dead-early-saturday-morning"
							label="NPR"
						/>
					</Body>
					<Body>
						This was about a month after he was arrested on July 6 at Teterboro
						Airport in New Jersey.{" "}
						<Link
							label="NBC New York"
							href="https://www.nbcnewyork.com/news/local/jeffrey-epstein-arrest-sources-upper-east-side-mansion/1632882/"
						/>{" "}
						Two days after his arrest, the Department of Justice published a{" "}
						<Link
							label="press release"
							href="https://www.justice.gov/usao-sdny/pr/jeffrey-epstein-charged-manhattan-federal-court-sex-trafficking-minors"
							withParentheses={false}
						/>{" "}
						charging Epstein with sex trafficking of minors and conspiracy to
						commit sex trafficking of minors.
					</Body>
					<Body>
						To illustrate the public's adoption of the Epstein conspiracy, I
						report polling results from Emerson College Polling, Business
						Insider, and YouGov which asked Americans about the circumstances
						around Epstein's death.
					</Body>
					<article className="mt-3">
						<div className="flex items-center justify-between mt-1">
							<DatedSubheader date="August 24 - 26, 2019">
								Emerson College Polling
							</DatedSubheader>
							<SourceButton href="https://emersonpolling.reportablenews.com/pr/august-national-poll-sanders-closing-gap-with-biden-mayor-pete-fades">
								View on Emerson Polling
							</SourceButton>
						</div>
						<Body>
							Emerson College included a question about Epstein's death in a
							poll conducted between August 24 and 26, 2019, alongside items on
							the 2020 Democratic primary and Trump's approval rating.
						</Body>
						<BlockQuote>
							<Bold>
								Voters are split regarding the cause of death of Billionaire
								convicted sex offender Jeffrey Epstein: 34% believe he was
								murdered, 33% believe he committed suicide, and 32% are unsure.
							</Bold>{" "}
							Party affiliation has a strong impact on what voters believe on
							this issue, as 46% of Republicans say it was murder vs. 26% say it
							was suicide. Among Democrats, 38% say it was suicide as compared
							to 26% who believe he was murdered. Of Independents, 31% believe
							he was murdered, 37% believe he committed suicide, and 33% are
							unsure.
						</BlockQuote>
						<EmersonPoll />
					</article>

					<article>
						<div className="flex items-center justify-between mt-1">
							<DatedSubheader date="November 22 - 23, 2019">
								Business Insider
							</DatedSubheader>
							<SourceButton href="https://www.businessinsider.com/jeffrey-epstein-kill-himself-poll-2019-11">
								View on Business Insider
							</SourceButton>
						</div>
						<Body>
							Business Insider repeated the same survey using the original
							wording from the earlier Emerson poll. They conducted it through
							SurveyMonkey Audience, which is representative of the U.S.
							population by age and gender, though not by race. Political
							affiliation was also collected, though results for independents
							were not reported. They found:
						</Body>
						<BlockQuote>
							<Bold>
								45% of Americans believe [Jeffrey Epstein] was murdered, 16%
								believe he died by suicide, and 39% are unsure.
							</Bold>{" "}
							[...] 56% of Republicans and 44% of Democrats [now believe in] the
							conspiracy theory. [Thus,] people on{" "}
							<Bold>
								both sides of the aisle appear almost equally prone to
								conspiracies.
							</Bold>
						</BlockQuote>
						<IsotypeChart
							data={[
								{ label: "Murder", value: 45, color: "bg-red-500" },
								{ label: "Suicide", value: 16, color: "bg-blue-500" },
								{ label: "Unsure", value: 39, color: "bg-gray-200" },
							]}
						/>
					</article>
					<article>
						<div className="flex items-center justify-between mt-1">
							<DatedSubheader date="November 9, 2025">YouGov</DatedSubheader>
							<SourceButton href="https://today.yougov.com/topics/politics/survey-results/daily/2025/07/09/c7d65/1">
								View on YouGov
							</SourceButton>
						</div>
						<Body>
							Almost six years later, YouGov conducted another poll on the
							Epstein conspiracy and found similar results to Business Insider's
							poll. Specifically, YouGov found that{" "}
							<Bold>
								20% of Americans believed he committed suicide, 39% that he was
								murdered, 1% that he died accidentally, and 40% were unsure.
							</Bold>{" "}
							In addition to collecting political affiliation—which showed
							similar agreement across party lines—YouGov also reports splits
							for region, gender, age, and race which you can see on their
							website.
						</Body>
						<YouGovPoll />
					</article>
				</article>

				<Divider />

				<article>
					<Header>
						Trump has insinuated multiple times that he would release the
						Epstein files.
					</Header>
					<article>
						<DatedSubheader date="June 3, 2024">
							On the Will Cain Show (Fox News), Trump suggested he would release
							the Epstein files if elected president.
						</DatedSubheader>
						<div className="w-full aspect-video my-5">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/HVKRNcQUbRY?si=KTtL0554FuJRyKNT&start=2119"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
							></iframe>
						</div>
						<Body>
							For your convenience, here is a transcript of the relevant
							exchange:
						</Body>
						<FoxNewsDialog />
					</article>
				</article>
			</div>
		</div>
	);
}

export default App;
