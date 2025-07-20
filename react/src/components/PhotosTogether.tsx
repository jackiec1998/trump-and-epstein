import { Body, Header, SourceButton } from "./general";

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
		description: "Trump, Melania, Epstein, and Maxwell together at Mar-a-Lago.",
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

const Timeline = () => {
	const formatDate = (year: number, month: string, day?: number) =>
		`${month}${day ? ` ${day},` : ""} ${year}`;

	const Bullet = () => (
		<div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-[6.5px] mt-[8.5px] border-2 border-white"></div>
	);

	return (
		<ol className="relative ml-2 border-s border-gray-200 space-y-4 mt-4 pb-2">
			{appearances.map((appearance, index) => (
				<li key={index} className="ml-4 max-w-[320px] space-y-1">
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

export const PhotosTogether = ({
	title,
	id,
}: {
	title: string;
	id: string;
}) => {
	return (
		<article className="space-y-2">
			<Header id={id}>{title}</Header>
			<Body>
				These photos were taken at various events in New York City and
				Mar-a-Lago. The earliest was in November 1992 and the latest was in
				2002.
			</Body>
			<Timeline />
			<Body className="mt-3">
				Although not pictured together, Epstein was also photographed attending
				Trump's wedding to Marla Maples in December 1993.
			</Body>
			<SourceButton href="https://www.dafjones.com/image?_bqG=9&_bqH=eJxtT9tOAyEQ_Zrum0k1rds24YEyuE7chWaAtjwRNZvWeO3txa.X2TS6UUk4nAsHMrR52U_K0y6tN_5UXm9Ho_p2GtcXK_U8u5rOLodD3hkxgVOi_Tgc26e3ApMD6fVgPG.awRhEzwBgA6BnxbzY5DPb.ndV_63q_6sKfew.8zlmomwwnmJCZ1laQm1yhtawRJdI11o6DWe56GtnyQuS5q7opkvSgDhmHpymhCACT17tHj7LyYJWr.85WiL5IOskK21U5EtFUvOE.eFcPdPwTenmhzZMpfLi0N7vH7fFsmtXHSrGL66gcaU-">
				View on Dafydd Jones
			</SourceButton>
		</article>
	);
};
