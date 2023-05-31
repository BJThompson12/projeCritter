import CritterContainer from "../components/CritterContainer";
import ProjectColumn from "../components/ProjectColumn";

const Project = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap flex-col items-center justify-start w-full h-full md:h-[80vh]">
      {/* page heading */}
      <h2 className="self-start mb-4 text-3xl font-semibold text-indigo-500">
        Project Name
      </h2>
      {/* project container */}
      <div className="flex flex-col items-stretch w-full h-full min-h-0 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <CritterContainer />
        {/* project columns container*/}
        <div className="flex flex-col items-stretch w-full h-full space-y-4 md:pb-1 2xl:pb-0 md:space-y-0 md:space-x-4 md:overflow-x-auto md:flex-row">
          <ProjectColumn title="Backlog" taskNumTest="0" />
          <ProjectColumn title="Ready" taskNumTest="3" />
          <ProjectColumn title="In Progress" taskNumTest="20" />
          <ProjectColumn title="Done" taskNumTest="2" />
        </div>
      </div>
    </section>
  );
};

export default Project;
