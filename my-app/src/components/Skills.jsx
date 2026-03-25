import React from 'react';

export default function Skills() {
  const skillsData = {
    'Programming Languages': [
      { name: 'C++', proficiency: 90 },
      { name: 'C', proficiency: 90 },
      { name: 'Python', proficiency: 70 },
      { name: 'JavaScript', proficiency: 80 },
    ],
    'Frontend & Backend': [
      { name: 'React', proficiency: 80 },
      { name: 'Node.js', proficiency: 80 },
      { name: 'Express', proficiency: 85 },
      { name: 'MongoDB', proficiency: 80 },
      { name: 'MySQL', proficiency: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-white mb-8">{category}</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-blue-600">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-800 rounded-lg p-10 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Technical Expertise</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center">
              <span className="text-blue-600 mr-3">→</span>
              Full-stack web development
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-3">→</span>
              Database Design & Optimization
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-3">→</span>
              Responsive UI Development
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-3">→</span>
              Version Control (Git)
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-3">→</span>
              Problem Solving & Algorithms
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
