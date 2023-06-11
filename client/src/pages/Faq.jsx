import FaqCard from "../components/FaqCard";

const Faq = () => {
  return (
    <section class="w-full">
      <h2 className="mb-4 text-3xl font-semibold text-left text-indigo-500">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-row">
        <FaqCard question="How do I create a Critter?">
          <p className="mb-2">
            First, you'll want to create an account so that you have access to
            the dashboard. From there, use <em>+ Add Project</em> to create a
            new project, then click the name of the project to view the project
            page. Every new project comes with a newborn Critter that is happy
            to see you! (Right now, the Critter will always be a panda, but more
            options are on the way.) Underneath the Critter, click the pencil
            icon to give them a name. Now, just start adding tasks, and watch
            how your Critter responds!
          </p>
          <p>
            If you delete a project using the trashcan icon, your Critter will
            leave the nest to go explore the world, and you won't be seeing them
            again. Please keep that in mind when deleting!
          </p>
        </FaqCard>
        <FaqCard question="How do I keep my Critter happy?">
          <p>
            Your Critter is happiest when you have no work left on your plate.
            Every time you add a task using <em>+ Add Task</em>, they will start
            to feel a little more pressure. To keep your Critter in a positive
            mood, you'll want to complete as many open tasks as possible and
            move them into the <em>Done</em> column using the arrows. The
            trashcan can be used to delete tasks that have been cancelled or
            were added by mistake. Either one will improve your Critter's mood.
            Moving <em>In Progress</em> tasks back to <em>Ready</em> or{" "}
            <em>Backlog</em> if you're not actively working on them can also
            help.
          </p>
        </FaqCard>
        <FaqCard question="Why is my Critter upset?">
          <p>
            You critter's mood is dependent on the amount of tasks currently
            listed in the <em>Backlog</em>, <em>Ready</em>, and{" "}
            <em>In Progress</em> columns on the project page.{" "}
            <em>In Progress</em> is the scariest column for your Critter—they
            can really feel your stress when you're working on way too many
            things at once! <em>Ready</em> isn't as frightening, but they will
            start to get concerned if they see you're about to have a lot on
            your plate. <em>Backlog</em> is similar to <em>Ready</em>, but the
            Critter won't be quite as bothered, since those tasks aren't
            immediate concerns.
          </p>
        </FaqCard>
        <FaqCard question="Help!! My Critter is dead!">
          <p>
            No, they're just taking a little nap! No Critter is every
            permanently <em>Wiped Out</em>. They'll wake up again once you've completed
            more of your tasks. However, if your Critter is in such a dire
            state, you should probably check in with yourself and think about
            whether you're taking on a reasonable amount of work. Please take
            care of yourself!
          </p>
        </FaqCard>
      </div>
    </section>
  );
};

export default Faq;
