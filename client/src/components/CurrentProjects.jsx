import {
  FaceSmileIcon,
  CheckIcon,
  TrashIcon,
  FaceFrownIcon,
} from "@heroicons/react/24/solid";

import { useQuery } from "@apollo/client";
import { RETURN_USER } from "../utils/query";

const CurrentProjects = () => {
  const { loading, data } = useQuery(RETURN_USER);

  const projects = data?.returnUser.projects || [
    { title: "No Project yet!", projectstatus: 'sad' },
  ];

  return (
    <> 
      <div className="flex justify-center pt-5 pb-5">
        <table className="w-2/3 h-full divide-y divide-indigo-500">
          <thead className="bg-indigo-50">
            <tr>
              <th className="py-3 px-6 text-left bg-slate text-indigo-500 w-1/4">
                Project Status
              </th>
              <th className="py-3 px-6 text-left text-indigo-500 ">
                Project Name
              </th>
              <th className="py-3 px-6 text-left text-indigo-500"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project._id}>
                <td className="bg-indigo-50 py-4 px-6">
                  {project.status === "Happy" ? (
                    <FaceSmileIcon className="h-6 w-6 text-indigo-500" />
                  ) : (
                    <FaceFrownIcon div className="h-6 w-6" />
                  )}
                </td>
                <td className="py-4 px-6">
                  <div className="text-indigo-500"><a> {project.title}</a></div>
                  <div className="text-indigo-500">
                    Status: {project.projectstatus}
                  </div>
                </td>

                <td className="py-4 px-6">
                  <div className="flex">
                    <CheckIcon className="h-6 w-6 text-indigo-800 cursor-pointer" />
                    <TrashIcon className="h-6 w-6 text-slate-500 cursor-pointer ml-4" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CurrentProjects;
