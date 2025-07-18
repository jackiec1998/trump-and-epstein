import { Body, Header } from "./general";

export const NewArrests = ({ title, id }: { title: string; id: string }) => {
	return (
		<article className="space-y-2">
			<Header id={id}>{title}</Header>
			<Body>
				Just in case it does happen, I have dedicated this spot on the page for
				it.
			</Body>
			<div className="border border-gray-300 h-[250px] my-4 rounded-lg border-dashed flex items-center justify-center text-gray-400 text-[10pt]">
				Blank
			</div>
		</article>
	);
};
