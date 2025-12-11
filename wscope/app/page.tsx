import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Wscope Flooring</h1>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <p className="mt-4 text-lg text-zinc-600">
          Your flooring business app starts here.
        </p>
      </div>
    </main>
  );
}
        
