const ProjectColumn = ({ title, taskNumTest }) => {
    return (
      <div className="flex flex-col md:w-[276px] md:min-w-[276px] border-4 border-indigo-500 rounded-xl md:overflow-hidden">
        {/* column heading */}
        <h3 className="px-1 pb-0.5 text-2xl font-semibold text-indigo-500 border-b-4 border-indigo-500">
          {title}
        </h3>
        {/* TODO: Add collapse/expand toggle next to heading */}
        <div className="overflow-y-auto">
          <ul>
            {/* TODO: Populate array from database instead of using a number to generate dummies */}
            {taskNumTest && taskNumTest > 0 ? (
              Array.from({ length: taskNumTest }, () => (
                <li className="p-2">
                  {/* TODO: Create task component */}
                  <div className="p-1 bg-indigo-200 text-md min-h-[42px]">Test Task</div>
                </li>
              ))
            ) : (
              <li className="p-2">
                <div className="p-1 italic text-md">No current tasks.</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
};

export default ProjectColumn;