import { useState } from "react";
import {
	BlockQuote,
	Body,
	Bold,
	DatedSubheader,
	Header,
	Link,
	SourceButton,
} from "./general";

const IsotypeChart = ({
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

export const Polls = () => {
	return (
		<article className="space-y-2">
			<Header>
				Most Americans believe Epstein was murdered, though many remain unsure.
			</Header>
			<Body>
				On August 10, 2019, Epstein was found unresponsive in his Metropolitan
				Correctional Center jail cell where he was awaiting trial.{" "}
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
				charging Epstein with sex trafficking of minors and conspiracy to commit
				sex trafficking of minors.
			</Body>
			<Body>
				To illustrate the public's adoption of the Epstein conspiracy, I report
				polling results from Emerson College Polling, Business Insider, and
				YouGov which asked Americans about the circumstances around Epstein's
				death.
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
					Emerson College included a question about Epstein's death in a poll
					conducted between August 24 and 26, 2019, alongside items on the 2020
					Democratic primary and Trump's approval rating.
				</Body>
				<BlockQuote>
					<Bold>
						Voters are split regarding the cause of death of Billionaire
						convicted sex offender Jeffrey Epstein: 34% believe he was murdered,
						33% believe he committed suicide, and 32% are unsure.
					</Bold>{" "}
					Party affiliation has a strong impact on what voters believe on this
					issue, as 46% of Republicans say it was murder vs. 26% say it was
					suicide. Among Democrats, 38% say it was suicide as compared to 26%
					who believe he was murdered. Of Independents, 31% believe he was
					murdered, 37% believe he committed suicide, and 33% are unsure.
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
					Business Insider repeated the same survey using the original wording
					from the earlier Emerson poll. They conducted it through SurveyMonkey
					Audience, which is representative of the U.S. population by age and
					gender, though not by race. Political affiliation was also collected,
					though results for independents were not reported. They found:
				</Body>
				<BlockQuote>
					<Bold>
						45% of Americans believe [Jeffrey Epstein] was murdered, 16% believe
						he died by suicide, and 39% are unsure.
					</Bold>{" "}
					[...] 56% of Republicans and 44% of Democrats [now believe in] the
					conspiracy theory. [Thus,] people on{" "}
					<Bold>
						both sides of the aisle appear almost equally prone to conspiracies.
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
					Almost six years later, YouGov conducted another poll on the Epstein
					conspiracy and found similar results to Business Insider's poll.
					Specifically, YouGov found that{" "}
					<Bold>
						20% of Americans believed he committed suicide, 39% that he was
						murdered, 1% that he died accidentally, and 40% were unsure.
					</Bold>{" "}
					In addition to collecting political affiliation—which showed similar
					agreement across party lines—YouGov also reports splits for region,
					gender, age, and race which you can see on their website.
				</Body>
				<YouGovPoll />
			</article>
		</article>
	);
};
