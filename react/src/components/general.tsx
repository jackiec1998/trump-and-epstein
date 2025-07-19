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

export const Header = ({
	children,
	id,
}: {
	children: React.ReactNode;
	id: string;
}) => (
	<a href={`#${id}`} className="no-underline">
		<h2
			id={id}
			className="group relative text-lg font-semibold text-gray-800 text-pretty scroll-mt-6"
		>
			<a
				href={`#${id}`}
				className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-gray-600"
			>
				#
			</a>
			{children}
		</h2>
	</a>
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
		className={`inline-flex items-center text-xs px-2 py-1 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:text-gray-900 transition ${className}`}
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
