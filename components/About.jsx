import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 10 years working
            with Restaurants, selling everything
            you need to cook and serve. I have
            always had a knack for technology and
            working with computers. In 2019 I
            started working with HTML & CSS to
            make some minor edits. What I thought
            was just a few small edits turned into
            a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate
            programming can be I was quickly drawn
            to learn more. I started learning
            JavaScript and was even more enthused
            with making websites interactive. I
            then started some projects for my
            friends and family&apos;s businesses.
            I am now spending my time building
            projects with React JS, Svelte and
            learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1542598953-41310c43f54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkxfHxsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="laptop"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
