import ModelSelection from "@/components/ModelSelection";
import ObjectInfo from "./ObjectInfo";

async function GetInfo() {
	const res = await fetch("http://127.0.0.1:8188/object_info");
	if (!res.ok) {
		throw new Error("An error has occurred");
	}
	const data = await res.json();
	return data;
}

async function SubmitPrompt() {
	const posting = await fetch("http://localhost:3000/api/prompt", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ hello: "testing" }),
	});
	// const data = await posting.json();
	return posting;
}
export default async function Home() {
	const data = await GetInfo();
	const p = await SubmitPrompt();
	// console.log(`data ${JSON.stringify(data.LoadImage, null, 4)}`);
	console.log(`p ${JSON.stringify(p, null, 4)}`);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>{data.LoadImage.display_name}</div>
			{/* <ObjectInfo /> */}
			<ModelSelection />
		</main>
	);
}
