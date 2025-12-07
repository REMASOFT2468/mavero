import Hero2 from "../components/Hero2";

const About = () => {
  return (
    <div>
      <div>
        <p className="text-3xl text-center mt-20 md:text-3xl font-bold tracking-tight text-gray-900 leading-tight mb-6 font-[Poppins]">
          ABOUT - MAVERO
        </p>
      </div>
      <div className="w-full min-h-screen bg-[#f9f9f9] flex items-center justify-center p-6 md:p-16">
        <div className="bg-white shadow-xl rounded-2xl max-w-4xl p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6 font-[Poppins]">
            We’re Building the Future of Work One Unified Platform at a Time.
          </h1>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg font-[Inter] space-y-6">
            Businesses today are drowning in disconnected tools CRMs over here,
            invoices over there, projects scattered across platforms, tasks
            buried in apps, and conversations locked inside emails and chats.
            Nothing syncs. Nothing scales. And every added tool creates more
            fragmentation, more distractions, and more wasted time.
            <br />
            <br />
            That chaos isn’t just annoying it’s expensive. It slows execution.
            It breaks focus. It kills momentum and growth.
            <br />
            <br />
            <span className="font-semibold text-gray-900">
              Mavero exists to fix that problem permanently.
            </span>{" "}
            We built a unified platform where teams, creators, and businesses
            can manage every part of their workflow in one place projects,
            payments, communication, automation, collaboration, and strategy all
            seamlessly connected and designed to work together.
            <br />
            <br />
            No more switching between tabs like it’s 2010. No more stitching
            together third-party apps. No more juggling logins, subscriptions,
            and messy data.
            <br />
            <br />
            Just one intelligent ecosystem doing what fragmented tools never
            could: create alignment, eliminate friction, and accelerate
            execution.
            <br />
            <br />
            Our mission is simple but the impact isn’t: Help people work
            smarter, move faster, and scale without chaos.
            <br />
            <br />
            Because growth shouldn’t feel painful. Collaboration shouldn’t feel
            complicated. Running a business shouldn’t feel like multiple jobs.
            <br />
            <br />
            With Mavero, everything becomes clearer, faster, and more
            intentional. No clutter. No burnout. No inefficiency. Just focus,
            speed, and control.
            <br />
            <br />
            This isn’t just another software platform
            <span className="font-semibold text-gray-900">
              {" "}
              it’s a new standard for productivity, workflow automation, and
              modern business operations.
            </span>
            <br />
            <br />
            Mavero isn’t here to improve the way you work
            <span className="font-semibold text-gray-900">
              {" "}
              it’s here to redefine it.
            </span>
          </p>
        </div>
      </div>
      <Hero2 />
    </div>
  );
};

export default About;
