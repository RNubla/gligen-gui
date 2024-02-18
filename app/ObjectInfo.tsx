"use client";

import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

export default function ObjectInfo() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	// const fetchData = () => {
	// 	fetch("/api/object-info")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setData(data);
	// 			setLoading(false);
	// 		});
	// };

	// useEffect(() => {
	// 	fetch("/api/object-info")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setData(data);
	// 			setLoading(false);
	// 		});
	// });
	// if (isLoading) return <p>Loading...</p>;

	// if (!data) return <p>No data</p>;
	// const data = await getObjectInfo();
	return (
		<div>
			<div>{data?.LoadImage}</div>
		</div>
	);
	// return <Button onClick={fetchData}>Fetch</Button>;
}
