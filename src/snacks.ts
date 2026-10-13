import animation from './animation.ts';

export default function list_snacks() {
	let snacks : string[] = ["Haribos", "Cheetos", "chips", "Blackberries", "Sour Patch", "String Cheese", "Ice Cream"];
	console.log(snacks);
	animation("Hello!");
	return snacks;
}

list_snacks();
