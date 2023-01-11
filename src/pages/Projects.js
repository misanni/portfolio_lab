import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img style={{height: 600, width:800}}src={project.image} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
}

export default Projects;