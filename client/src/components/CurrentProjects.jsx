import { FaceSmileIcon, CheckIcon, TrashIcon,FaceFrownIcon } from '@heroicons/react/24/solid';

// harcoded html

const CurrentProjects = () => {
    const projects = [
        { id: 1, name: 'Project A', status: 'Happy' },
        { id: 2, name: 'Project B', status: 'Sad' },
        { id: 3, name: 'Project C', status: 'Happy' },
      ];
    
      return (
        <div className="flex justify-center pt-5 pb-5">
        <table className="w-2/3 h-full divide-y divide-indigo-500">
          <thead className="bg-indigo-50">
            <tr>
              <th className="py-3 px-6 text-left bg-slate text-indigo-500 w-1/4">Project Status</th>
              <th className="py-3 px-6 text-left text-indigo-500 ">Project Name</th>
              <th className="py-3 px-6 text-left text-indigo-500"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="bg-indigo-50 py-4 px-6">
                  {project.status === 'Happy' ? (
                    <FaceSmileIcon className="h-6 w-6 text-indigo-500" />
                  ) : (
                    <FaceFrownIcon div className="h-6 w-6" />
                  )}
                </td>
                <td className="py-4 px-6">
                    <div className='text-indigo-500'>{project.name}</div>
                    <div className='text-indigo-500'>Status: {project.status}</div>
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
      );
    }
export default CurrentProjects;