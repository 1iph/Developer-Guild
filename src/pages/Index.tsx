
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RolesSection from '@/components/RolesSection';
import StaffSection from '@/components/StaffSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RolesSection />
        <StaffSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
