import Link from "next/link";
import { Project } from "@/app/types";
import Image from "next/image";

export default function PortfolioProject({ project }: { project: Project }) {
  let {
    name,
    image,
    topics,
    homepage,
    description,
    html_url: githubUrl,
  } = project;

  topics = topics?.filter((topic) => topic !== "portfolio-project");
  const buttonTagsStyles = "bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-md";

  return (
    <div className="flex flex-col justify-between gap-4 bg-slate-800 rounded-md border-4 border-white-500">
      <div className="bg-sky-700 m-0">
        <h3>{name}</h3>
      </div>
      {image !== undefined ? (
        <div className="w-auto h-52 relative">
          <Image
            src={image}
            alt={`Picture of ${name} project`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      ) : (
        <p>No Image Available</p>
      )}
      <p>{description}</p>
      <ul className="flex flex-row gap-2 p-2 flex-wrap">
        {topics?.map((topic) => (
          <li
            key={topic}
            className={buttonTagsStyles}
          >
            {topic === "portfolio-project" ? null : topic}
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-between p-2">
        {githubUrl !== undefined && (
          <button className={buttonTagsStyles}>
            <Link href={githubUrl}>Github</Link>
          </button>
        )}
        {(homepage !== undefined && homepage !== "") && (
          <button className={buttonTagsStyles}>
            <Link href={homepage}>Live</Link>
          </button>
        )}
      </div>
    </div>
  );
}
