import Image from "next/image";
import Link from "next/link";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={exo2.className}>
			<div className="bg-[#020f23] flex flex-col space-y-2 h-full min-h-[65vh] items-center justify-center text-center text-white font-bold">
				<Link
					className="bg-sky-600 p-2 w-52 rounded-md border-4 border-yellow-600"
					href={"/artistlist"}
				>
					List Artists
				</Link>
				<Link
					className="bg-sky-600 p-2 w-52 rounded-md border-4 border-yellow-600"
					href={"/artistpost"}
				>
					Add Artist
				</Link>
			</div>
		</div>
	);
}
