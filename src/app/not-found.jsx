import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404...!</h1>
      <p>Sorry, the page your are looking for doesn&apos;t exist.</p>
      <p>
        return to <Link href={"/"}>Home</Link>.
      </p>
    </main>
  );
}
