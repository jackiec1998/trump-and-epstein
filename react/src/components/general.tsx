export const Title = ({ children }: { children: React.ReactNode }) => (
	<h1 className="text-2xl font-bold text-gray-900 mb-2">{children}</h1>
);

export const Body = ({
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

export const Header = ({ children }: { children: React.ReactNode }) => (
	<h2 className="text-lg font-semibold text-gray-800 text-pretty">
		{children}
	</h2>
);

export const Bold = ({ children }: { children: React.ReactNode }) => (
	<span className="font-semibold text-gray-600">{children}</span>
);

export const DatedSubheader = ({
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

export const Divider = () => (
	<hr className="mt-8 mb-6 border-t border-gray-200" />
);

export const Link = ({
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

export const SourceButton = ({
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

export const BlockQuote = ({ children }: { children: React.ReactNode }) => (
	<blockquote className="text-xs text-gray-500 border-s-3 border-gray-200 mt-2 py-1 pl-3 leading-relaxed">
		{children}
	</blockquote>
);
