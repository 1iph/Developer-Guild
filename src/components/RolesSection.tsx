
import { Star, Award, Users, Crown } from 'lucide-react';
import { Card } from "@/components/ui/card";

const roles = [
  {
    name: "Guild Master",
    tag: "[GM]",
    description: "Guild leadership - 1iph",
    icon: Crown
  },
  {
    name: "Staff",
    tag: "[STAFF]",
    description: "Requires Senior role and application",
    icon: Users
  },
  {
    name: "Senior Developer",
    tag: "[Senior]",
    description: "Experienced helpers - Apply via applications",
    icon: Star
  },
  {
    name: "Developer",
    tag: "[Dev]",
    description: "Top GXP contributors (300k+ weekly)",
    icon: Award
  },
  {
    name: "Junior Developer",
    tag: "[Junior]",
    description: "Default role for new members",
    icon: Users
  }
];

const RolesSection = () => {
  return (
    <section id="roles" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Guild Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <Card key={role.tag} className="p-6 hover-scale">
              <div className="flex flex-col items-center text-center">
                <role.icon size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{role.name}</h3>
                <p className="text-gray-600 mb-2">{role.tag}</p>
                <p className="text-sm text-gray-500">{role.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
