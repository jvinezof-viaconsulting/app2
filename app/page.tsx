export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          App 2 - Secondary Application
        </h1>
        <div className="bg-green-100 p-8 rounded-lg">
          <p className="text-lg mb-4">
            This is the secondary application (App 2)
          </p>
          <p className="mb-4">Current path: /app2</p>
          <a
            href="/"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            ← Back to App 1
          </a>
        </div>
      </div>
    </main>
  );
}
