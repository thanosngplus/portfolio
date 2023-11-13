import Link from "next/link";
import { Project } from "@/app/types";
import Image from "next/image";

export default function PortfolioProject({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4">
      <h3>{project.name}</h3>
      {project.image !== undefined ? (
        <div className="w-auto h-52 relative">
          <Image
            src={project.image}
            alt={`Picture of ${project.name} project`}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      ) : (
        <p>No Image Available</p>
      )}
      <p>{project.description}</p>
      <ul className="flex flex-row gap-2 flex-wrap">
        {project.topics?.map((topic) => (
          <li key={topic}>{topic === "portfolio-project" ? "" : topic}</li>
        ))}
      </ul>
      {project.html_url !== undefined && (
        <button>
          <Link href={project.html_url}>Github</Link>
        </button>
      )}
    </div>
  );
}
