import Link from "next/link";

export default function SubPagina() {
  return (
    <div>
      <h1>Sub Página</h1>
      <Link href="/app2">Página inicial</Link>
      <a href="/">Home</a>
    </div>
  );
}
