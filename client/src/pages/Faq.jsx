import { RiQuestionLine} from "react-icons/ri";

const Faq = () => {
  return (
    <section className='bg-white '>
      <div className='container px-6 py-12 mx-auto'>
        <h1 className='text-2xl font-semibold text-gray-800 lg:text-3xl text-center '>
          Frequently Asked Questions
        </h1>

        <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3'>
          <div>
            <div className='inline-block p-3 text-white bg-indigo-500 rounded-lg'>
              <RiQuestionLine
                className='w-6 h-6'
              />
            </div>

            <div>
              <h1 className='text-xl font-semibold text-gray-800'>
                Do I need an account to use the application?
              </h1>

              <p className='mt-2 text-sm text-gray-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem laboriosam officia
                magnam atque blanditiis illum doloremque magni ex corrupti
                tempora quis.
              </p>
            </div>
          </div>

          <div>
            <div className='inline-block p-3 text-white bg-indigo-500 rounded-lg'>
            <RiQuestionLine
                className='w-6 h-6'
              />
            </div>

            <div>
              <h1 className='text-xl font-semibold text-gray-800'>
                How many Projects can I create?
              </h1>

              <p className='mt-2 text-sm text-gray-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem laboriosam officia
                magnam atque blanditiis illum doloremque magni ex corrupti
                tempora quis.
              </p>
            </div>
          </div>

          <div>
            <div className='inline-block p-3 text-white bg-indigo-500 rounded-lg'>
            <RiQuestionLine
                className='w-6 h-6'
              />
            </div>

            <div>
              <h1 className='text-xl font-semibold text-gray-800'>
              What are the key features of this project tracking tool?
              </h1>

              <p className='mt-2 text-sm text-gray-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem laboriosam officia
                magnam atque blanditiis illum doloremque magni ex corrupti
                tempora quis.
              </p>
            </div>
          </div>

          <div>
            <div className='inline-block p-3 text-white bg-indigo-500 rounded-lg'>
            <RiQuestionLine
                className='w-6 h-6'
              />
            </div>

            <div>
              <h1 className='text-xl font-semibold text-gray-800'>
              How do I create, edit, and delete tasks?
              </h1>

              <p className='mt-2 text-sm text-gray-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem laboriosam officia
                magnam atque blanditiis illum doloremque magni ex corrupti
                tempora quis.
              </p>
            </div>
          </div>

          <div>
            <div className='inline-block p-3 text-white bg-indigo-500 rounded-lg'>
            <RiQuestionLine
                className='w-6 h-6'
              />
            </div>

            <div>
              <h1 className='text-xl font-semibold text-gray-800'>
              How does the app incorporate humor into the interface?
              </h1>

              <p className='mt-2 text-sm text-gray-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem laboriosam officia
                magnam atque blanditiis illum doloremque magni ex corrupti
                tempora quis.
              </p>
            </div>
          </div>

          <div>
            <div className='inline-block p-3 text-white bg-indigo-500 rounded-lg'>
            <RiQuestionLine
                className='w-6 h-6'
              />
            </div>

            <div>
              <h1 className='text-xl font-semibold text-gray-800'>
              Is the app compatible with different platforms and devices?
              </h1>

              <p className='mt-2 text-sm text-gray-800'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat, consequatur eveniet veritatis quos
                dignissimos beatae dolores exercitationem laboriosam officia
                magnam atque blanditiis illum doloremque magni ex corrupti
                tempora quis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
