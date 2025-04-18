
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RolesSection from '@/components/RolesSection';
import StaffSection from '@/components/StaffSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RolesSection />
      <StaffSection />
    </div>
  );
};

export default Index;
