import animation from "./animation.ts"

export default function list_foods() {
        let foods : string[] = ["Pasta", "Ramen", "Tacos"];
        console.log(foods);
	animation("Hey there! These are foods");
	return foods;
}

list_foods();
