import React from 'react';
import { Clock, Calendar, ChevronRight } from 'lucide-react';

interface Course {
    title: string;
    duration: string;
    schedule: string;
    description: string;
    modules: string[];
  }

export default function CourseCard({ title,duration,schedule,description,modules }:Course) {
return(
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-stone-800 mb-2">{title}</h3>
        <div className="flex items-center text-green-600 mb-2">
          <Clock className="w-5 h-5 mr-2" />
          <span>{duration}</span>
          <Calendar className="w-5 h-5 ml-4 mr-2" />
          <span>{schedule}</span>
        </div>
        <p className="text-stone-600 mb-4">{description}</p>
        <h4 className="font-semibold text-stone-800 mb-2">Key Modules:</h4>
        <ul className="space-y-1">
          {modules.map((module, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">{module}</span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )}