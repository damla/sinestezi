import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About Emre</a>
      </Link>
    </div>
  );
}
