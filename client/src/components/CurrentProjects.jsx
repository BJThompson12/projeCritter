import {
  TrashIcon,
} from "@heroicons/react/24/outline";
import {SiFoodpanda} from "react-icons/si"
import { Icon } from '@iconify/react';

import { useQuery, useMutation } from "@apollo/client";
import { RETURN_USER } from "../utils/query";
import { DEL_PROJECT } from "../utils/mutation";

const CurrentProjects = () => {
  const { loading, data } = useQuery(RETURN_USER);
  const [delProject] = useMutation(DEL_PROJECT);

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
      window.location.href = '/dashboard'
    }
  } 

  const projects = data?.returnUser.projects || [
    { title: "No Project yet!", projectstatus: "sad" },
  ];

  return (
    <>
   <div className="flex flex-col justify-center items-center">
  <div className="rounded-xl border border-2 border-black w-full md:w-2/4 overflow-hidden">
    <table className="rounded-xl w-full bg-white">
      <thead className="border-b border-black bg-indigo-500">
        <tr>
          <th className="p-2 md:p-4">Critter</th>
          <th className="p-2 md:p-4">Project Name</th>
          <th className="p-2 md:p-4">Delete</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project._id} className="border-b border-black">
            <td className="p-2 md:p-4">
              <div className="flex justify-center items-center">
                <Icon
                  icon="fluent-emoji-high-contrast:panda"
                  color="black"
                  width="60"
                  height="60"
                />
              </div>
            </td>
            <td className="p-2 md:p-4">
              <div className="text-gray-800 text-center font-semibold">
                <a href={`/project?=${project._id}`}>{project.title}</a>
              </div>
            </td>
            <td className="p-2 md:p-4">
              <div className="flex justify-center items-center">
                <TrashIcon
                  id={project._id}
                  onClick={() => handleDeleteProject(project._id)}
                  className="h-6 w-6 text-indigo-700 cursor-pointer ml-4"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  
    </>
  );
};

export default CurrentProjects;
