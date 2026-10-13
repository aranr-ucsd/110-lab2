import animation from './animation.ts';

export default function list_snacks() {
	let snacks : string[] = ["Haribos", "Cheetos"];
	console.log(snacks);
	animation("Hello!");
	return snacks;
}

list_snacks();
