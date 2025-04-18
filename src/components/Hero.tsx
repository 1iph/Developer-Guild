
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="text-center fade-in">
        <Shield size={64} className="mx-auto mb-6" />
        <h1 className="text-5xl font-bold mb-4">The Hypixel Developers</h1>
        <p className="text-2xl text-gray-400 mb-8">[DEV]</p>
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-lg text-gray-300">
            A community of dedicated developers contributing to the Hypixel ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
