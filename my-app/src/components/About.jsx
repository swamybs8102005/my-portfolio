import React from 'react';

export default function About() {
  const education = [
    {
      institution: 'RVCE (RV College of Engineering)',
      program: 'Bachelor of Engineering (Information science and Engineering)',
      location: 'Bengaluru 560059',
    },
    {
      institution: 'Government Independent PU College',
      program: 'PU College',
      location: 'Channarayapattana, Hassan District 573116',
      score: '94.6%',
    },
    {
      institution: 'Government High School',
      program: 'High School (8-10)',
      location: 'Baguru,Channarayapattana taluk, Hassan District 573111',
      score: '89.6%',
    },
    {
      institution: 'Government Higher Primary School',
      program: 'Primary School (1-7)',
      location: 'Baguru,Channarayapattana taluk, Hassan District 573111',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-6">About Me</h2>
        <div className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed space-y-4">
          <p>
            I'm a passionate full-stack developer with a strong foundation in computer science and information systems.
            With expertise in modern web technologies, I love building scalable applications that solve real-world problems.
          </p>
          <p>
            My journey in technology has equipped me with skills in both frontend and backend development.
            I'm committed to writing clean, maintainable code and staying updated with the latest industry trends.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-950 border border-gray-700 rounded-lg p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                  {edu.duration && <span className="text-sm text-cyan-300 whitespace-nowrap">{edu.duration}</span>}
                </div>
                <p className="text-blue-400 font-medium mb-1">{edu.program}</p>
                <p className="text-gray-300 mb-1">{edu.location}</p>
                {edu.score && <p className="text-gray-200 font-semibold mb-1">{edu.score}</p>}
                {edu.details && <p className="text-gray-300">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
