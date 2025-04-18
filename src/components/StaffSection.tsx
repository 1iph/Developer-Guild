
import { Card } from "@/components/ui/card";

const StaffSection = () => {
  return (
    <section id="staff" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Staff Team</h2>
        <Card className="bg-white/5 backdrop-blur-lg p-8 max-w-3xl mx-auto hover-scale">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">How to Join Staff</h3>
              <p className="text-gray-300 mb-4">
                Staff applications are available in 📄-staff-applications
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <h4 className="font-bold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Must have Senior Developer role</li>
                  <li>Active participation in the community</li>
                  <li>Strong leadership qualities</li>
                </ul>
              </div>
              <p className="text-gray-300 italic">
                Note: Applications without the Senior role will be automatically declined
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StaffSection;
