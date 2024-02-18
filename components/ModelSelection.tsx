"use client";

import * as v from "valibot";
import {
	CheckpointLoaderData,
	CheckpointLoaderSchema,
} from "@/api-schema/checkpointLoader";
import { Select, SelectItem, SelectSection } from "@nextui-org/select";
import { useEffect, useState } from "react";

export default function ModelSelection() {
	const [data, setData] = useState<CheckpointLoaderData | null>(null);

	useEffect(() => {
		fetch("http://127.0.0.1:8188/object_info/CheckpointLoader", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(`data ${JSON.stringify(data, null, 4)}`);
				const parsedData = v.safeParse(CheckpointLoaderSchema, data);
				if (parsedData.success) {
					setData(parsedData.output);
				} else {
					console.log(
						`parsedData.issues ${JSON.stringify(parsedData.issues, null, 4)}`,
					);
				}
			});
	}, []);
	let modelTypes: string[] = [];
	if (data?.CheckpointLoader) {
		const type: string[] = [];
		for (const model of data.CheckpointLoader.input.required.ckpt_name[0]) {
			const t = model.split(/[\\/]/)[0];
			// if (type.includes(t)) {
			// 	return;
			// }
			type.push(t);
		}
		modelTypes = [...new Set(type)];
	}

	console.log(`type ${modelTypes}`);

	return (
		<Select
			label="Select a model"
			items={data?.CheckpointLoader.input.required.ckpt_name[0]}
		>
			{modelTypes.map((type) => {
				return (
					<SelectSection showDivider title={type}>
						{data?.CheckpointLoader.input.required.ckpt_name[0].map((model) => {
							if (model.includes(type)) {
								return <SelectItem>{model}</SelectItem>;
							}
						})}
					</SelectSection>
				);
			})}
		</Select>
	);
}
