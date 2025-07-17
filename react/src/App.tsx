import { useState } from "react";

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
	data: { label: string; value: number; color: string }[];
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
			<div className="space-y-4">
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
				<div className="flex flex-row justify-between text-gray-500 text-[10pt] w-[400px]">
					{data.map(({ label, value, color }, idx) => (
						<div key={idx} className="flex items-center gap-2 ">
							<div className={`w-3 h-3 rounded-sm ${color}`} />
							<span>
								{label} ({value}%)
							</span>
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
	const appearances: {
		location: string;
		year: number;
		month: string;
		day?: number;
		description: string;
		source: string;
		buttonText: string;
	}[] = [
		{
			location: "Palm Beach, FL",
			year: 1992,
			month: "November",
			description: "Trump and Epstein partying together at Mar-a-Lago.",
			source:
				"https://www.nbcnews.com/news/us-news/tape-shows-donald-trump-jeffrey-epstein-discussing-women-1992-party-n1030686",
			buttonText: "View on NBC News",
		},
		{
			location: "New York, NY",
			year: 1993,
			month: "October",
			day: 19,
			description:
				"Trump and Epstein together at the Harley Davidson Cafe opening in Manhattan. Ivanka and Eric Trump are also present.",
			source:
				"https://www.dafjones.com/image?_bqG=4&_bqH=eJxtT9tOAyEQ_Zrum0k1rds24YEyuE7chWaAtjwRNZvWeO3txa.X2TS6UUk4nAsHMrR52U_K0y6tN_5UXm9Ho_p2GtcXK_U8u5rOLodD3hkxgVOi_Tgc26e3ApMD6fVgPG.awRhEzwBgA6BnxbzY5DPb.ndV_63q_6sKfew.8zlmomwwnmJCZ1laQm1yhtawRJdI11o6DWe56GtnyQuS5q7opkvSgDhmHpymhCACT17tHj7LyYJWr.85WiL5IOskK21U5EtFUvOE.eFcPdPwTenmhzZMpfLi0N7vH7fFsmtXHSrGL66gcaU-",
			buttonText: "View on Dafydd Jones",
		},
		{
			location: "Palm Beach, FL",
			year: 1997,
			month: "January",
			day: 1,
			description: "Trump with his arm over Epstein's shoulder at Mar-a-Lago.",
			source:
				"https://www.gettyimages.com/detail/news-photo/portrait-of-american-financier-jeffrey-epstein-and-real-news-photo/681946574",
			buttonText: "View on Getty Images",
		},
		{
			location: "New York, NY",
			year: 1997,
			month: "April",
			day: 7,
			description: "Trump and Epstein at a Victoria's Secret Angels event.",
			source:
				"https://www.gettyimages.com/detail/news-photo/businessman-donald-trump-and-financier-jeffrey-epstein-news-photo/2148187943",
			buttonText: "View on Getty Images",
		},
		{
			location: "New York, NY",
			year: 1997,
			month: "April",
			day: 28,
			description:
				"Trump and a model at a Victoria's Secret Angels event with Epstein behind him.",
			source:
				"https://www.gettyimages.com/detail/news-photo/businessman-donald-trump-and-financier-jeffrey-epstein-news-photo/2148187943",
			buttonText: "View on Getty Images",
		},
		{
			location: "New York, NY",
			year: 1997,
			month: "October",
			day: 30,
			description:
				"Trump and Maxwell together at the 50th anniversary for the Ford Modeling Agency and Pantene hair care products.",
			source:
				"https://www.gettyimages.com/detail/news-photo/the-50th-anniversary-for-both-the-ford-modeling-agency-and-news-photo/1233893134",
			buttonText: "View on Getty Images",
		},
		{
			location: "Palm Beach, FL",
			year: 2000,
			month: "February",
			day: 12,
			description:
				"Trump, Melania, Epstein, and Maxwell together at Mar-a-Lago.",
			source:
				"https://www.gettyimages.com/detail/news-photo/from-left-american-real-estate-developer-donald-trump-and-news-photo/1192977807",
			buttonText: "View on Getty Images",
		},
		{
			location: "New York, NY",
			year: 2000,
			month: "September",
			day: 18,
			description:
				"Trump, Melania, and Maxwell attending Anand Jon Fashion Show.",
			source:
				"https://www.gettyimages.com/detail/news-photo/portrait-of-from-left-future-married-couple-fashion-model-news-photo/1254069198",
			buttonText: "View on Getty Images",
		},
		{
			location: "New York, NY",
			year: 2000,
			month: "October",
			description:
				'Trump, Melania, and Maxwell at Heidi Klum\'s "hookers and pimps"-themed Halloween party.',
			source:
				"https://www.dailymail.co.uk/news/article-7752543/Donald-Trump-poses-Ghislaine-Maxwell-Heidi-Klums-hookers-pimps-themed-party.html",
			buttonText: "View on Daily Mail",
		},
		{
			location: "New York, NY",
			year: 2002,
			month: "November",
			day: 11,
			description:
				"Trump, Melania, Naomi Campbell, and Maxwell attending Dolce & Gabbana Opening.",
			source:
				"https://www.gettyimages.com/detail/news-photo/ghislaine-maxwell-naomi-campbell-donald-trump-and-melania-news-photo/1169684622",
			buttonText: "View on Getty Images",
		},
	];

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
			{ label: "Unsure", value: 33, color: "bg-gray-200" },
		],
		democrats: [
			{ label: "Murder", value: 26, color: "bg-red-500" },
			{ label: "Suicide", value: 38, color: "bg-blue-500" },
			{ label: "Unsure", value: 100 - (26 + 38), color: "bg-gray-200" },
		],
		republicans: [
			{ label: "Murder", value: 46, color: "bg-red-500" },
			{ label: "Suicide", value: 26, color: "bg-blue-500" },
			{ label: "Unsure", value: 100 - (46 + 26), color: "bg-gray-200" },
		],
		independents: [
			{ label: "Murder", value: 31, color: "bg-red-500" },
			{ label: "Suicide", value: 37, color: "bg-blue-500" },
			{ label: "Unsure", value: 100 - (31 + 37), color: "bg-gray-200" },
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
			{ label: "Murder", value: 38, color: "bg-red-500" },
			{ label: "Suicide", value: 23, color: "bg-blue-500" },
			{ label: "Accident", value: 1, color: "bg-green-500" },
			{ label: "Unsure", value: 38, color: "bg-gray-200" },
		],
		republicans: [
			{ label: "Murder", value: 43, color: "bg-red-500" },
			{ label: "Suicide", value: 21, color: "bg-blue-500" },
			{ label: "Accident", value: 1, color: "bg-green-500" },
			{ label: "Unsure", value: 35, color: "bg-gray-200" },
		],
		independents: [
			{ label: "Murder", value: 37, color: "bg-red-500" },
			{ label: "Suicide", value: 17, color: "bg-blue-500" },
			{ label: "Accident", value: 1, color: "bg-green-500" },
			{ label: "Unsure", value: 45, color: "bg-gray-200" },
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

function App() {
	return (
		<div className="flex justify-center">
			<div className="w-[430px] my-8">
				<h1 className="font-bold text-gray-800 mb-2">
					What you need to know about Trump & Epstein.
				</h1>

				<Body>Some facts about Trump and his relationship with Epstein:</Body>
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
					<h2 className="font-semibold text-gray-800">
						There are at least 10 documented instances where Trump appeared in
						photos with Epstein or Maxwell.
					</h2>
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
					<h2 className="font-semibold text-gray-800">
						Most Americans believe Epstein was murdered, though many remain
						unsure.
					</h2>
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
						{" "}
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
						Insider, and YouGov which asked Americans on the circumstances
						around Epstein's death.
					</Body>
					<article className="mt-3">
						<div className="flex items-center justify-between mt-1">
							<div>
								<time className="text-[8pt] text-gray-400">
									August 24 - 26, 2019
								</time>
								<h3 className="font-semibold">Emerson College Polling</h3>
							</div>
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
							<span className="font-semibold text-gray-600">
								Voters are split regarding the cause of death of Billionaire
								convicted sex offender Jeffrey Epstein: 34% believe he was
								murdered, 33% believe he committed suicide, and 32% are unsure.
							</span>{" "}
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
							<div>
								<time className="text-[8pt] text-gray-400">
									November 22 - 23, 2019
								</time>
								<h3 className="font-semibold">Business Insider</h3>
							</div>
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
							<span className="font-semibold text-gray-600">
								45% of Americans believe [Jeffrey Epstein] was murdered, 16%
								believe he died by suicide, and 39% are unsure.
							</span>{" "}
							[...] 56% of Republicans and 44% of Democrats [now believe in] the
							conspiracy theory. [Thus,] people on{" "}
							<span className="font-semibold text-gray-600">
								both sides of the aisle appear almost equally prone to
								conspiracies.
							</span>
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
							<div>
								<time className="text-[8pt] text-gray-400">
									November 9, 2025
								</time>
								<h3 className="font-semibold">YouGov</h3>
							</div>
							<SourceButton href="https://today.yougov.com/topics/politics/survey-results/daily/2025/07/09/c7d65/1">
								View on YouGov
							</SourceButton>
						</div>
						<Body>
							Almost six years later, YouGov conducted another poll on the
							Epstein conspiracy and found similar results to Business Insider's
							poll. Specifically, YouGov found that{" "}
							<span className="font-semibold text-gray-600">
								20% of Americans believed he committed suicide, 39% that he was
								murdered, 1% that he died accidentally, and 40% were unsure.
							</span>{" "}
							In addition to collecting political affiliation—which showed
							similar agreement across party lines—YouGov also reports splits
							for region, gender, age, and race which you can see on their
							website.
						</Body>
						<YouGovPoll />
					</article>
				</article>
			</div>
		</div>
	);
}

export default App;
