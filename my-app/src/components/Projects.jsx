import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'P2P File Sharing Network',
      keyFeatures: ['Peer-to-Peer file transfer', 'Real-time sync', 'Security'],
      description:
        'A decentralized file sharing application that enables users to share files directly between peers without relying on a central server. The application implements advanced P2P protocols for secure and efficient file transfer.',
      techStack: ['WebRTC', 'React', 'Node.js'],
      githubLink: 'https://github.com/swamybs2005/p2p-file-sharing-network.git',
      features: [
        'Direct peer-to-peer file transfer',
        'Real-time synchronization',
        'End-to-end encryption',
        'Resume download capability',
        'File integrity verification',
      ],
    },
    {
      id: 2,
      name: 'Pharmacy Management System',
      keyFeatures: ['Inventory tracking', 'Billing system', 'User authentication'],
      description:
        'A comprehensive pharmacy management system designed to streamline operations including inventory management, sales tracking, and customer management. Features a user-friendly interface for both staff and customers.',
      techStack: ['React', 'Node.js', 'Express', 'ML', 'MySQL'],
      githubLink: 'https://github.com/swamybs8102005/pharmacy-management-system.git',
      features: [
        'Inventory management with low stock alerts',
        'Point of sale (POS) system',
        'Customer database management',
        'Prescription tracking',
        'Sales reports and analytics',
        'User role management',
      ],
    },
    {
      id: 3,
      name: 'Socratic Question Generator',
      keyFeatures: ['AI-powered questions', 'Learning tool', 'Interactive'],
      description:
        'An intelligent question generation tool that creates Socratic-style questions to enhance learning and critical thinking. Uses NLP and machine learning to generate contextually relevant questions.',
      techStack: ['React', 'Node.js', 'Express', 'RAG+mastra', 'MySQL'],
      githubLink: 'https://github.com/swamybs2005/socratic_question_generator.git',
      features: [
        'AI-powered question generation',
        'Adaptive difficulty levels',
        'Topic-specific questioning',
        'Answer evaluation',
        'Learning progress tracking',
        'Multi-language support',
      ],
    },
    {
      id: 4,
      name: 'Sorting Algorithm Visualiser',
      keyFeatures: ['Algorithm visualization', 'Interactive learning', 'Performance metrics'],
      description:
        'An educational tool that visualizes various sorting algorithms in real-time. Helps students understand how different algorithms work and compare their performance metrics.',
      techStack: ['React', 'JavaScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/swamybs8102005/VisualAlgo.git',
      features: [
        'Visualization of 10+ sorting algorithms',
        'Adjustable array size and speed',
        'Step-by-step execution',
        'Performance metrics display',
        'Code explanation panel',
        'Comparison mode',
      ],
    },
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Projects</h2>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-700"
            >
              {/* Collapsed View */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.keyFeatures.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-700 text-cyan-300 text-xs px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="ml-4 p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <ChevronDown
                      size={24}
                      className={`text-blue-600 transition-transform ${
                        expandedProject === project.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Expanded View */}
              {expandedProject === project.id && (
                <div className="border-t border-gray-700 px-6 py-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-3 font-bold">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="pt-4 border-t border-gray-700">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.89 1.531 2.341 1.545 2.914 1.209.092-.937.349-1.546.636-1.903-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.192 20 14.437 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
