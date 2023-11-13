import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 bg-black bg-opacity-40">
        <ul className="flex flex-row justify-center items-center gap-8 h-10">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className="bg-[url('/starocean.webp')] bg-cover bg-center h-screen min-w-full">
        <div className="bg-black bg-opacity-40 h-screen min-w-full flex flex-col justify-center items-center">
          <h1>Thanos Dimitriades</h1>
          <p>Software Engineer | Open Source Advocate</p>
        </div>
      </header>

      <main className="flex flex-col items-center text-center justify-between gap-y-20 p-24">
        <div id="about">
          <h2>About</h2>
          <div>
            <p>
            As a passionate software engineer, I dedicate my life to creating software that is useful, performant, and scalable. 
            My addiction to lifelong learning, coupled with the joy of constant growth, enables me to keep my skills updated.
            </p>
          </div>
        </div>

        <div id="portfolio" className="flex flex-col gap-10">
          <h2>Portfolio</h2>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3>Project 1</h3>
              <p>Project image</p>
              <p>Project description</p>
            </div>
            <div>
              <h3>Project 2</h3>
              <p>Project image</p>
              <p>Project description</p>
            </div>
            <div>
              <h3>Project 3</h3>
              <p>Project image</p>
              <p>Project description</p>
            </div>
            <div>
              <h3>Project 4</h3>
              <p>Project image</p>
              <p>Project description</p>
            </div>
          </div>
        </div>

        <div id="contact">
          <h2>Contact</h2>
          <form className="flex flex-col gap-10 text-inherit">
            <div>
              <label htmlFor="">Email: </label>
              <input type="email" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Name: </label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Subject: </label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Message: </label>
              <textarea />
            </div>
            <div className="flex justify-between">
              <button>Clear</button>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </main>
      <footer className="flex flex-row justify-center items-center h-20 bg-slate-600">
        <p>Thanos Dimitriades - 2023</p>
      </footer>
    </>
  );
}
