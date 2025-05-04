import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Home() {
  return (
    <div className="flex justify-center mt-12 ">
      <div className="bg-offwhite rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <img
      src="/headshot.jpg" 
          alt="Darlene Wyatt"
          className="w-25 h-25 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold mb-2">Darlene Wyatt</h1>
        <p className="text-gray-700 mb-4">
          I'm a passionate web developer with experience in React, Node.js, Python, C++, JavaScript, Typescript, and MongoDB.
          I enjoy building user-friendly interfaces and solving real-world problems through code.
        </p>
        <div className="flex justify-center space-x-4">
        <a
  href="https://github.com/Darla03"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center text-offwhite bg-bluegray px-4 py-2 rounded-full hover:bg-navy transition"
>
  <FaGithub className="mr-2" />
  GitHub
</a>
<a
  href="https://linkedin.com/in/darlene-wyatt-54b391255"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center text-offwhite bg-steel px-4 py-2 rounded-full hover:bg-softblue transition"
>
  <FaLinkedin className="mr-2" />
  LinkedIn
</a>

        </div>
      </div>
    </div>
  );
}

export default Home;
