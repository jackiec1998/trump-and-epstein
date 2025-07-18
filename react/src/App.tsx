import { NewArrests } from "./components/NewArrests";
import { Body, Divider, Title } from "./components/general";
import { PhotosTogether } from "./components/PhotosTogether";
import { Quotes } from "./components/Quotes";
import { Footer } from "./components/Footer";

function App() {
	return (
		<div>
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

					<PhotosTogether />

					<Divider />

					<Quotes />

					<Divider />

					<NewArrests />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
