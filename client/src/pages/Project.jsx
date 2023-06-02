import CritterContainer from "../components/CritterContainer";
import ProjectColumn from "../components/ProjectColumn";
import { useQuery, useMutation } from "@apollo/client";

import { RETURN_PROJECT } from "../utils/query";


const Project = () => {
  // TODO: get project by projectId
  // for testing:

  const creationDate = new Date("June 1, 2023 23:15:30 UTC");
  const jsonDate = creationDate.toJSON();

  const url = window.location.href;
  const id = url.split("=").pop().trim();

  console.log(id)

  const { data, loading } = useQuery(RETURN_PROJECT, {
    variables: { input: id },
  });

  if (loading) {
    return <p>Loading...</p>; // Return a loading indicator while data is being fetched
  }

  if (!data) {
    return <p>No data found.</p>; // Handle the case when no data is returned
  }


  const project = {
    id: data.returnProject._id,
    name: data.returnProject.title,
    critterName: "Little Guy",
    createdAt: jsonDate,
  };

  // TODO: calculate creature mood from tasks
  // for testing:
  const moodVal = 40;

  return (
    <section className="flex flex-wrap md:flex-nowrap flex-col items-center justify-start w-full h-full md:h-[80vh] 3xl:h-[70vh]">
      {/* page heading */}
      <h2 className="self-start mb-4 text-3xl font-semibold text-indigo-500">
        {project.name}
      </h2>
      {/* project container */}
      <div className="flex flex-col items-stretch w-full h-full min-h-0 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <CritterContainer
          name={project.critterName}
          born={project.createdAt}
          moodVal={moodVal}
        />
        {/* project columns container*/}
        <div className="flex flex-col items-stretch w-full h-full space-y-4 md:pb-1 2xl:pb-0 md:space-y-0 md:space-x-4 md:overflow-x-auto md:flex-row">
          <ProjectColumn title="Backlog" colNum={1} projId={project.id} />
          <ProjectColumn title="Ready" colNum={2} projId={project.id} />
          <ProjectColumn title="In Progress" colNum={3} projId={project.id} />
          <ProjectColumn title="Done" colNum={4} projId={project.id} />
        </div>
      </div>
    </section>
  );
};

export default Project;
