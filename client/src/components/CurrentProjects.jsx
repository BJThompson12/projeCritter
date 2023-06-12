import { TrashIcon } from "@heroicons/react/24/solid";

import { useQuery, useMutation } from "@apollo/client";
import { RETURN_USER } from "../utils/query";
import { DEL_PROJECT } from "../utils/mutation";

const CurrentProjects = () => {
  const { loading, data } = useQuery(RETURN_USER);
  const [delProject] = useMutation(DEL_PROJECT);

  if (loading) {
    return <p className="italic">Loading...</p>;
  }

  if (!data) {
    return <p className="italic">No data found.</p>;
  }

  const handleDeleteProject = async (id) => {
    try {
      const { data } = await delProject({
        variables: { input: id },
      });

      if (data) {
        console.log(`deleted project!`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      window.location.href = "/dashboard";
    }
  };

  const projects = data?.returnUser.projects || { title: "No projects yet." };

  return (
    <div className="flex flex-col items-center justify-center">
      {projects.length ? (
        <div className="w-full overflow-hidden border-4 border-black rounded-lg shadow-[0.4rem_0.4rem_#a7f3d0]">
          <table className="w-full bg-white rounded-xl">
            <thead className="text-center text-white bg-indigo-500 border-b-4 border-black md:text-lg">
              <tr>
                <th className="p-2 md:p-4">Critter</th>
                <th className="p-2 md:p-4">Project Name</th>
                <th className="p-2 md:p-4">Delete</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project._id}
                  className="m-2 border-b-2 border-black even:bg-indigo-50 last:border-b-0"
                >
                  <td className="p-2 md:p-4">
                    <div className="flex items-center justify-center">
                      <svg
                        id="critter-head"
                        viewBox="0 0 810 656.69"
                        className="w-10 h-auto"
                        fill="#4f46e5"
                        stroke="#4f46e5"
                        strokeWidth="0.75rem"
                      >
                        <path d="m281.44,354.45c-41.22-37.45-112.48-26.14-159.18,25.26s-51.15,123.42-9.93,160.87c41.22,37.45,112.48,26.14,159.18-25.26s51.15-123.42,9.93-160.87Zm-50.26,61.96c5.28,0,9.57,4.28,9.57,9.57s-4.28,9.57-9.57,9.57-9.57-4.28-9.57-9.57,4.28-9.57,9.57-9.57Zm14.94,56.49c-18.64,0-33.75-15.11-33.75-33.75,0-3.51.54-6.89,1.53-10.08,1.47,8.22,8.65,14.48,17.28,14.48,9.69,0,17.57-7.88,17.57-17.57s-7.4-17.05-16.66-17.52c4.28-1.96,9.03-3.06,14.04-3.06,18.64,0,33.75,15.11,33.75,33.75s-15.11,33.75-33.75,33.75Z" />
                        <path d="m474.71,606.29l-67.5-26.73c-1.42-.56-3-.56-4.42,0l-67.5,26.73c-3.08,1.22-4.59,4.71-3.37,7.79s4.71,4.59,7.79,3.37l65.29-25.85,65.29,25.85c.73.29,1.47.42,2.21.42,2.39,0,4.65-1.44,5.58-3.79,1.22-3.08-.29-6.57-3.37-7.79Z" />
                        <path d="m528.56,354.45c-41.22,37.45-36.77,109.47,9.93,160.87s117.97,62.71,159.18,25.26c41.22-37.45,36.77-109.47-9.93-160.87s-117.97-62.71-159.18-25.26Zm21.44,61.96c5.28,0,9.57,4.28,9.57,9.57s-4.28,9.57-9.57,9.57-9.57-4.28-9.57-9.57,4.28-9.57,9.57-9.57Zm13.88,56.49c-18.64,0-33.75-15.11-33.75-33.75,0-4.36.84-8.52,2.34-12.35.43,9.31,8.12,16.75,17.53,16.75s17.57-7.88,17.57-17.57-7.88-17.57-17.57-17.57c-.02,0-.04,0-.06,0,4.25-1.93,8.97-3.02,13.94-3.02,18.64,0,33.75,15.11,33.75,33.75s-15.11,33.75-33.75,33.75Z" />
                        <ellipse cx="405" cy="540" rx="38.67" ry="21.33" />
                        <path d="m810,135C810,60.44,749.56,0,675,0c-36.08,0-68.84,14.16-93.05,37.22C529.29,13.58,469.57.31,405,.31s-124.29,13.27-176.95,36.91C203.84,14.16,171.08,0,135,0,60.44,0,0,60.44,0,135c0,35.03,13.34,66.94,35.22,90.93C12.45,274.93,0,329.3,0,386.31h0c0,169.84,155.27,249.58,345.15,267.56,19.91,1.88,39.88,2.83,59.85,2.83s39.94-.94,59.85-2.83c189.88-17.98,345.15-97.72,345.15-267.56h0c0-57.01-12.45-111.38-35.22-160.37,21.88-23.99,35.22-55.9,35.22-90.93Zm-108.21,432.18c-29.24,20.29-65.04,37.02-106.42,49.71-39.32,12.06-83.61,20.48-131.65,25.03-19.44,1.84-39.19,2.77-58.72,2.77s-39.28-.93-58.72-2.77c-48.04-4.55-92.33-12.97-131.65-25.03-41.38-12.69-77.19-29.42-106.42-49.71-63.84-44.31-96.21-105.16-96.21-180.87,0-50.33,9.88-99,29.35-144.67,19.07-44.71,46.53-84.71,81.61-118.9,35.55-34.64,77.38-61.78,124.33-80.67,49.09-19.75,102.15-29.76,157.7-29.76s108.62,10.01,157.7,29.76c46.96,18.89,88.79,46.03,124.33,80.67,35.08,34.19,62.54,74.2,81.61,118.91,19.48,45.67,29.35,94.34,29.35,144.67,0,75.71-32.37,136.56-96.21,180.87Z" />
                      </svg>
                    </div>
                  </td>
                  <td className="p-2 md:p-4">
                    <div className="font-semibold text-center text-black">
                      <a href={`/project?=${project._id}`}>{project.title}</a>
                    </div>
                  </td>
                  <td className="p-2 md:p-4">
                    <button
                      className="flex items-center justify-center mx-auto"
                      onClick={() => handleDeleteProject(project._id)}
                    >
                      <TrashIcon className="w-8 h-8 text-indigo-600 min-h-[42px] min-w-[42px] md:min-h-fit md:min-w-fit hover:text-indigo-400 active:text-indigo-800" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="italic">You haven't created any projects yet.</p>
      )}
    </div>
  );
};

export default CurrentProjects;
