import Counter from "./count";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-white min-h-screen p-5">
            <div className="flex justify-end mb-6">
                <Link
                    href="/"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                    Home
                </Link>
            </div>
            <Counter countBy={1} />
            <Counter countBy={2} />
        </div>
    )
}