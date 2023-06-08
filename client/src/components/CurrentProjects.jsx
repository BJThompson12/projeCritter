import {
  FaceSmileIcon,
  //CheckIcon,
  TrashIcon,
  FaceFrownIcon,
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
      <div className="flex justify-center pt-5 pb-5">
        <table className=" w-2/3 h-full divide-y-4 divide-indigo-900 border border-b-4 border-r-4  border-black ">
          <thead className="bg-indigo-50">
            <tr>
              <th className="py-3 px-6 text-center bg-indigo-300 text-indigo-500 w-1/4">
              </th>
              <th className="py-3 px-6 text-center bg-indigo-300  text-indigo-500 ">
                Project Name
              </th>
              <th className=" w-1/6 py-3 px-6  bg-indigo-300 text-left text-indigo-500"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y-4 divide-black">
            {projects.map((project) => (
              <tr key={project._id}>
                <td className=" flex justify-center items-center bg-indigo-400 py-4 px-6">
                  {project.status === "Happy" ? (
                    <FaceSmileIcon className="h-6 w-6 text-indigo-500" />
                  ) : (
                    <Icon icon="fluent-emoji-high-contrast:panda" color="black" width="60" height="60"  />
                  )}
                </td>
                <td className="bg-indigo-400 py-4 px-6">
                  <div className="text-gray-800 text-center">
                    {" "}
                    <a href={`/project?=${project._id}`}> {project.title}</a>
                  </div>
                  {/* <div className="text-indigo-500">
                    Status: {project.projectstatus}
                  </div> */}
                </td>

                <td className="bg-indigo-400 py-4 px-6">
                  <div className="felx justify-center items-center flex">
                    {/* <CheckIcon className="h-6 w-6 text-indigo-800 cursor-pointer" /> */}
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
    </>
  );
};

export default CurrentProjects;
