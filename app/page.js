import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-bold text-center">
        Routing and Data Fetching
      </h1>
      <div className="flex justify-center my-5">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link href={"/users"}>Go to users page</Link>
        </button>
      </div>
    </main>
  );
}
