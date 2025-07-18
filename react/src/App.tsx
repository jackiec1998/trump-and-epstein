import { NewArrests } from "./components/NewArrests";
import { Body, Divider, Title } from "./components/general";
import { PhotosTogether } from "./components/PhotosTogether";
import { Quotes } from "./components/Quotes";
import { Footer } from "./components/Footer";
import { Polls } from "./components/Polls";

function App() {
	const statements = [
		"There are at least 10 documented instances of Trump appearing in photos with Epstein or Maxwell.",
		"Most Americans believe Epstein was murdered, though many remain unsure.",
		"Trump has insinuated multiple times that he would release the Epstein files.",
		"No new arrests, charges, or convictions have resulted from Trump's actions regarding the Epstein files.",
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
							<li key={index}>{statement}</li>
						))}
					</ul>

					<Divider />

					<PhotosTogether title={statements[0]} />

					<Divider />

					<Polls title={statements[1]} />

					<Divider />

					<Quotes title={statements[2]} />

					<Divider />

					<NewArrests title={statements[3]} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
