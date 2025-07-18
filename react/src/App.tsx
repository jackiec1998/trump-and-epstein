import { NewArrests } from "./components/NewArrests";
import { Body, Divider, Title } from "./components/general";
import { PhotosTogether } from "./components/PhotosTogether";
import { Quotes } from "./components/Quotes";
import { Footer } from "./components/Footer";
import { Polls } from "./components/Polls";
import { SocialMedia } from "./components/SocialMedia";

function App() {
	const statements = [
		"There are at least 10 documented instances of Trump appearing in photos with Epstein or Maxwell.",
		"Most Americans believe Epstein was murdered, though many remain unsure.",
		"Trump has insinuated multiple times that he would release the Epstein files.",
		"MAGA has been vehemently supportive of releasing the Epstein files.",
		"No new arrests, charges, or convictions have resulted from Trump's actions regarding Epstein.",
	];

	const ids = [
		"photos-together",
		"polls",
		"quotes",
		"social-media",
		"new-arrests",
	];

	return (
		<div>
			<div className="flex justify-center">
				<div className="w-[430px] mt-6">
					<Title>A Curated Fact Sheet on Trump & the Epstein Conspiracy</Title>

					<Body>
						I mostly did this for myself, but I hope you find it useful or at
						least entertaining.
					</Body>
					<Body>Below are the list of key points:</Body>
					<ul className="list-disc ml-6 text-xs text-gray-500 leading-relaxed">
						{statements.map((statement, index) => (
							<li key={index} className="pl-1">
								<a href={`#${ids[index]}`} className="hover:underline">
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
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
