import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Scene3DComponent = dynamic(() => import('../components/Scene3D'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
