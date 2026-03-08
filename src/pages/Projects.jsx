import { useEffect, useState } from "react";
import { getGithubProjects } from "../data/github";

function Projects() {

  const [projects,setProjects] = useState([]);

  useEffect(()=>{

    async function fetchProjects(){

      const data = await getGithubProjects();

      const filtered = data
        .filter(repo => !repo.fork)
        .sort((a,b)=> new Date(b.created_at) - new Date(a.created_at));

      setProjects(filtered);

    }

    fetchProjects();

  },[]);

  return(

    <section
      className="projects"
      style={{
        padding:"60px 20px",
        maxWidth:"1000px",
        margin:"0 auto",
        textAlign:"center"
      }}
    >

      <h2
        style={{
          color:"#ffffff",
          fontSize:"32px",
          marginBottom:"40px"
        }}
      >
        My Projects
      </h2>

      {projects.map((project)=>(
        <div
          className="card"
          key={project.id}
          style={{
            margin:"20px auto",
            padding:"25px",
            maxWidth:"700px"
          }}
        >

          <h3 style={{marginBottom:"10px"}}>
            {project.name}
          </h3>

          <p style={{marginBottom:"10px"}}>
          {project.description || "Engineering project available on GitHub."}
          </p>

          <p style={{marginBottom:"15px", color:"#94A3B8"}}>
            Stars : {project.stargazers_count}
          </p>

          <a
            href={project.html_url}
            target="_blank"
            style={{
              display:"inline-block",
              padding:"10px 20px",
              background:"#38BDF8",
              color:"#020617",
              borderRadius:"8px",
              textDecoration:"none",
              fontWeight:"600"
            }}
          >
          View on GitHub
          </a>

        </div>
      ))}

    </section>

  );

}

export default Projects;