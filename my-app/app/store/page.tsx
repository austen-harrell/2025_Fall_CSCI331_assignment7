import Link from "next/link";
import ProductTable from "./components/ProductTable";

export default function Page() {
    return (
        <div className="bg-white min-h-screen p-8">
            <div className="max-w-[90%] mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-black">
                        FakeStore Products
                    </h1>
                    <Link
                        href="/"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        Home
                    </Link>
                </div>

                <ProductTable />
            </div>
        </div>
    )
}
