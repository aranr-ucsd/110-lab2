export default function animation(name: string) {
	const BOLD = '\x1b[1m';
	const RESET = '\x1b[0m';	
	console.log(`${BOLD}${name}${RESET}`);
}

animation("Hello");
