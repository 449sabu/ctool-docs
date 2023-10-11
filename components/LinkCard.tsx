import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import LinkImage from "../public/linkcard.png";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface LinkCardProps {
	href: string;
}

const fetcher = (url: string, href: string) =>
	fetch(url, {
		method: "POST",
		body: JSON.stringify({ href }),
	}).then((res) => res.json());

export default function LinkCard(props: LinkCardProps) {
	const { data, error, isLoading } = useSWR(["/api/ogp", props.href], () =>
		fetcher("/api/ogp", props.href)
	);

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	return (
		<Link href={props.href} target="_blank">
			<Card className="my-6">
				<div className="flex m-6 gap-6">
					<div className="w-80">
						<AspectRatio ratio={16 / 9}>
							<img
								src={data.og}
								alt="Image"
								className="rounded-md object-cover"
							/>
						</AspectRatio>
					</div>
					<div className="flex flex-col grow">
						<p className="basis-1/4 text-xl font-bold">{data.title}</p>
						<p className="basis-2/4">{data.description}</p>
						<p className="basis-1/4">{props.href}</p>
					</div>
				</div>
			</Card>
		</Link>
	);
}
