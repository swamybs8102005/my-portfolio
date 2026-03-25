import React from 'react';

export default function Experience() {
  const courses = [
    'Data Structures',
    'Algorithms',
    'Data Science',
    'Operating Systems (OS)',
    'Computer Networks (CN)',
    'Artificial Intelligence & Machine Learning (AIML)',
    'Internet of Things (IoT)',
    'Database Management Systems (DBMS)',
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Relevant Courses & Learning</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-cyan-400"
            >
              <div className="flex items-center h-full">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{course}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-10 text-white">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-lg">
            I'm passionate about keeping my skills current and exploring new technologies. These courses have provided 
            a strong foundation in computer science fundamentals and modern development practices.
          </p>
        </div>
      </div>
    </section>
  );
}
