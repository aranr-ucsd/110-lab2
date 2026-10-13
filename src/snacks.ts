import animation from './animation.ts';

export default function list_snacks() {
	let snacks : string[] = ["Haribos", "Cheetos", "Blackberries"];
	animation(snacks.join(", "));
}

list_snacks();
