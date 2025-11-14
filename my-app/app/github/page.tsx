import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-white min-h-screen p-8">
            <div className="max-w-[50%] mx-auto">
                <div className="flex justify-end mb-8">
                    <Link
                        href="/"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        Home
                    </Link>
                </div>
            </div>
            <br />
            <div className="max-w-[30%] mx-auto">
                <p className="text-black text-lg">
                    For the final project, I'm interested in a practical, full stack application
                    that helps users find recipe ideas based on ingredients they have available at
                    home. I originally planned on using a popular framework for the front-end and
                    writing a custom back-end with Rust or Go, however I have decided to use SvelteKit
                    for the entire application for faster development. I plan on implementing a
                    SQLite database to store user data and recipes, and using SvelteKit's built-in
                    server-side capabilities to handle API requests and database interactions. I'll
                    use <a href="https://www.themealdb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline">themealdb</a> to
                    fetch recipe data based on user-inputted ingredients available.
                    <br></br>
                    <br></br>

                    I have decided to go with Svelte for my framework since it's simpler, more performant, and
                    more streamlined when compared with React. Svelte is better suited for smaller projects and rapid
                    development but doesn't scale as well as React, so it should be a good option for my
                    use case. It also provides a learning opportunity since I have not used Svelte before.
                </p>

                <div className="mt-8 flex justify-center">
                    <a
                        href="https://github.com/austen-harrell/2025_Fall_CSCI331_assignment7/tree/main/my-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        Assignment Repo on Github
                    </a>
                </div>
            </div>
        </div>
    )
}