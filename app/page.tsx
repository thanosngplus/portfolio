import NavLinks from "./_components/nav-links";
import About from "./_components/about";
import Portfolio from "./_components/(portfolio)/portfolio";
import Socials from "./_components/socials";

export default function Home() {
  return (
    <>
      <header className="bg-[url('/starocean.webp')] bg-cover bg-center h-screen min-w-full">
        <div id="home" className="bg-black bg-opacity-40 h-screen min-w-full flex flex-col justify-center items-center">
          <h1>Thanos Dimitriades</h1>
          <h2>Software Engineer | Open Source Advocate</h2>
        </div>
      </header>
      <main className="flex flex-col items-center text-center justify-between gap-y-20 p-24">
        <About />
        <Portfolio />
        <Socials />
      </main>
      <footer className="flex flex-row justify-center items-center h-20 bg-slate-600">
        <p>Thanos Dimitriades - 2023</p>
      </footer>
    </>
  );
}
