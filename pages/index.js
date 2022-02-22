import Head from "next/head";
import Generator from "./Generator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arc</title>
        <meta name="description" content="Arc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <Generator />
        </div>
      </main>
    </div>
  );
}
