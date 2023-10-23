import Image from "next/image";
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const poppins = Poppins({ subsets: ["latin"], weight:['400'] });

export default function Card({
	id,
	title,
	price,
	description,
	category,
	image,
	rating: { rate, count },
}) {
	return (
		<div
			key={id}
			className="flex flex-col sm:flex-row px-2 items-center border-b w-full border-b-blue-950 py-3"
		>
			<div className="flex py-2 w-[50%] justify-center">
				<Image
					src={image}
					alt="product image"
					height={0}
					width={0}
					sizes="10vw"
					style={{ width: "auto", height: "160px" }}
				/>
			</div>
			<div className="space-y-2 w-[50%]">
				<p className="text-lg font">{title}</p>
				<div className="flex items-center space-x-1">
					<FontAwesomeIcon
						icon={faStar}
						height={20}
						width={20}
						style={{ color: "#d9d217" }}
					/>
					<p>{rate} Stars •</p>
					<p className="italic">{count} Reviews</p>
				</div>
				<div className="flex">
					$<p className="text-2xl">{price}</p>
				</div>
				<ul>
					<li>{description}</li>
				</ul>
				<button className="bg-yellow-200 p-2 px-14 rounded-md border-yellow-700 border text-yellow-900">
					Buying options
				</button>
				<p>
					tags:{" "}
					<a className="italic" href="./">
						{category}
					</a>
				</p>
			</div>
		</div>
	);
}
