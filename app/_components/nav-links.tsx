import Link from "next/link";


export default function NavLinks() {
  return (
    <nav className="sticky top-0 bg-black bg-opacity-40">
        <ul className="flex flex-row justify-center items-center gap-8 h-10">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#portfolio">Portfolio</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
  );
}
