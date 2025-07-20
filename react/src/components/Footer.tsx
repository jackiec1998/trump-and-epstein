import { useEffect, useState } from "react";
import { formatTime } from "./general";
import { FaGithub } from "react-icons/fa";

const timeDifference = (date: Date) => {
	const diff = new Date().getTime() - date.getTime();

	if (diff < 1_000) return "just now";
	if (diff < 60_000) return Math.floor(diff / 1_000) + " seconds ago";
	if (diff < 3_600_000) return Math.floor(diff / 60_000) + " minutes ago";
	if (diff < 86_400_000) return Math.floor(diff / 3_600_000) + " hours ago";
	return Math.floor(diff / 86_400_000) + " days ago";
};

export const Footer = () => {
	const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`last-updated.json?cb=${Date.now()}`);
			const data = await response.json();
			setLastUpdated(new Date(data.lastUpdated));
		};

		fetchData();
	}, []);

	return (
		<div className="w-full mt-4 border-t border-gray-200 h-[100px] text-xs text-gray-500 p-4 flex justify-center">
			<div className="w-full max-w-md flex justify-between">
				<div className="flex flex-col gap-1">
					<span className="text-gray-600 font-semibold">Last Updated</span>
					<span>{lastUpdated ? formatTime(lastUpdated) : ""}</span>
					<span>{lastUpdated ? timeDifference(lastUpdated) : ""}</span>
				</div>
				<div>
					<a
						href="https://github.com/jackiec1998/trump-and-epstein"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-row items-center border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-100 transition-colors text-gray-700"
					>
						<FaGithub className="inline-block mr-1" />
						View on GitHub
					</a>
				</div>
			</div>
		</div>
	);
};
