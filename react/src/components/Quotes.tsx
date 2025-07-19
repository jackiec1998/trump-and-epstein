import type { JSX } from "react";
import { Body, DatedSubheader, Header } from "./general";

const Chat = ({
	chat,
	avatars,
	alignment,
}: {
	chat: { person: string; text: string | JSX.Element }[];
	avatars: { [key: string]: string };
	alignment: { [key: string]: "left" | "right" };
}) => {
	const Avatar = ({ src }: { src: string }) => (
		<img src={src} className="w-7 h-7 rounded-full mb-0.5" />
	);

	return (
		<div className=" relative flex flex-col space-y-4 mt-6">
			{chat.map(({ person, text }, index) => (
				<div
					key={index}
					className={`flex flex-row items-end ${
						alignment[person] === "right" ? "justify-end" : "justify-start"
					}`}
				>
					{alignment[person] === "left" && <Avatar src={avatars[person]} />}
					<div
						className={`border border-gray-200 rounded-md p-3 mx-3 bg-gray-50 text-xs text-gray-700 w-auto max-w-[300px] ${
							person === "Donald Trump" ? "rounded-bl-none" : "rounded-br-none"
						}`}
					>
						<p>{text}</p>
						<p className="text-gray-400 mt-2">{person}</p>
					</div>
					{alignment[person] === "right" && <Avatar src={avatars[person]} />}
				</div>
			))}
		</div>
	);
};

const FoxNewsTranscript = () => {
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
					<span className="font-semibold text-gray-800">
						Yeah, yeah. I would.
					</span>{" "}
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

	const avatars = {
		"Donald Trump": "/trump.jpg",
		"Rachel Campos-Duffy": "/rachel.jpg",
	};

	const alignment: { [key: string]: "left" | "right" } = {
		"Donald Trump": "left",
		"Rachel Campos-Duffy": "right",
	};

	return <Chat chat={chat} avatars={avatars} alignment={alignment} />;
};

const LexFridmanTranscript = () => {
	const chat: { person: string; text: string | JSX.Element }[] = [
		{
			person: "Lex Fridman",
			text: "There's a moment were you had some hesitation about Epstein, releasing some of the documents on Epstein. Why the hesitation?",
		},
		{
			person: "Donald Trump",
			text: (
				<>
					I don't think I had... I mean,{" "}
					<span className="font-semibold text-gray-800">
						I'm not involved. I never went to his island, fortunately.
					</span>{" "}
					But a lot of people did.
				</>
			),
		},
		{
			person: "Lex Fridman",
			text: "Why do you think so many smart, powerful people allowed him to get so close?",
		},
		{
			person: "Donald Trump",
			text: (
				<>
					He was a good salesman. He was a hailing hardy type of guy. He had
					some nice assets that he'd throw around like islands. But a lot of big
					people went to that island.{" "}
					<span className="font-semibold text-gray-800">
						But fortunately I was not one of them.
					</span>
				</>
			),
		},
		{
			person: "Lex Fridman",
			text: "It's just very strange for a lot of people that the list of clients that went to the island has not been made public.",
		},
		{
			person: "Donald Trump",
			text: (
				<>
					Yeah, it's very interesting isn't it?{" "}
					<span className="font-semibold text-gray-800">
						Probably will be by the way. Probably.
					</span>
				</>
			),
		},
		{
			person: "Lex Fridman",
			text: "So if you are able to [release the client list], you'll be-",
		},
		{
			person: "Donald Trump",
			text: (
				<div className="space-y-2">
					<p>
						<span className="font-semibold text-gray-800">
							I'd certainly take a look at it.
						</span>
					</p>
					<p>
						Now, Kennedy's interesting 'cause it's so many years ago. You know,
						they do that for danger too, because you know, endangers certain
						people, et cetera. So Kennedy is very different from the Epstein
						thing.
					</p>
					<p>
						<span className="font-semibold text-gray-800">
							But yeah, I'd be inclined to do the Epstein [thing]. I'd have no
							problem with it.
						</span>
					</p>
				</div>
			),
		},
		{ person: "Lex Fridman", text: "That's great to hear." },
	];

	const avatars = {
		"Donald Trump": "/trump.jpg",
		"Lex Fridman": "/lex.png",
	};

	const alignment: { [key: string]: "left" | "right" } = {
		"Donald Trump": "left",
		"Lex Fridman": "right",
	};

	return <Chat chat={chat} avatars={avatars} alignment={alignment} />;
};

const Subheader = ({ children }: { children: React.ReactNode }) => (
	<h3 className="font-semibold text-[11pt] text-gray-600">{children}</h3>
);

const Quote = ({
	quote,
}: {
	quote: { person: string; date: string; context: string; quote: string };
}) => (
	<div className="border border-gray-200 bg-gray-50 p-4 rounded-lg">
		<div className="flex flex-col">
			<time className="text-[8pt]">{quote.date}</time>
			<span>{quote.context}</span>
		</div>

		<p className="w-full">{quote.quote}</p>
		<div className="flex flex-row">
			<div className="w-8 h-8 bg-green-200 rounded-full" />
			<span>{quote.person}</span>
		</div>
	</div>
);

export const Quotes = ({ title, id }: { title: string; id: string }) => {
	const otherQuotes: {
		person: string;
		date: string;
		context: string;
		quote: string;
	}[] = [
		{
			person: "JD Vance",
			date: "2024, October 22",
			context: "On Theo Von's Podcast",
			quote:
				"Seriously, we need to release the Epstein list. That is an important thing.",
		},
		{
			person: "Pam Bondi",
			date: "2025, February 21",
			context: "On Fox News",
			quote:
				"It's [Epstein list] sitting on my desk riht now to review. That's been a directive by President Trump.",
		},
	];

	return (
		<article className="space-y-2">
			<Header id={id}>{title}</Header>
			<article>
				<DatedSubheader date="June 3, 2024">
					On the Will Cain Show (Fox News)
				</DatedSubheader>
				<div className="w-full aspect-video my-5">
					<iframe
						className="w-full h-full rounded-xl"
						src="https://www.youtube.com/embed/HVKRNcQUbRY?si=KTtL0554FuJRyKNT&start=2119"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
					></iframe>
				</div>
				<Body>
					For your convenience, here is a transcript of the relevant exchange:
				</Body>
				<FoxNewsTranscript />
			</article>
			<article className="mt-6">
				<DatedSubheader date="September 3, 2025">
					On the Lex Fridman Podcast
				</DatedSubheader>
				<div className="w-full aspect-video my-5">
					<iframe
						className="w-full h-full rounded-xl"
						src="https://www.youtube.com/embed/qCbfTN-caFI?si=5oPTJ37jzaId76ir&start=2657"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
					></iframe>
				</div>
				<Body>Again, here's the back-and-forth:</Body>
				<LexFridmanTranscript />
				<article className="mt-4 space-y-2">
					<Subheader>Other Quotes</Subheader>
					<Quote quote={otherQuotes[0]} />
				</article>
			</article>
		</article>
	);
};
