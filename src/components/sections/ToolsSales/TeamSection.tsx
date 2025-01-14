import React from 'react';
import { Users } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
}

interface TeamSectionProps {
  team: TeamMember[];
}

export function TeamSection({ team }: TeamSectionProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 mt-12">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h4>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}