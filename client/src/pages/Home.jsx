const Home = () => {
  return (
    <section className="flex flex-wrap items-center justify-center w-full h-full">
      <div class="relative">
      <div class="absolute top-9 left-10 transform -translate-x-4 -translate-y-4 rounded-lg bg-indigo-500 h-full w-full z-0"></div>
        <img
          alt="..."
          className="w-auto mx-auto relative z-8 md:mx-0 rounded-lg shadow-lg border border-2 border-black md:max-h-[75vh]"
          src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
        </div>
        <div className="w-full mt-8 text-left md:w-6/12 md:pl-10">
          <h3 className="text-3xl font-semibold bg-indigo-300 inline-block p-2 rounded-lg text-white border-2 border-r-6 border-b-6  border-black text-gray-900">
            LOREM IPSUM
          </h3>

          <p className="mt-4 text-lg leading-relaxed bg-indigo-300 inline-block p-2 rounded-lg border-2  border-r-4 border-b-4  border-black text-gray-900">
            Autem. Natus consequuntur, yet id. Molestiae aspernatur, but
            consectetur, but suscipit vel, for tempora sequi. Adipisci
            doloremque commodi odit vitae autem. Accusantium magni, so vitae,
            but commodi. Odit lorem fugit, but ipsa aliquam. Laudantium autem,
            or consequuntur et, or consequat.
          </p>
        </div>

        
    </section>
  );
};

export default Home;
