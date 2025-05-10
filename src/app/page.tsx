import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Education from '@/components/Education';
import Process from '@/components/Process';
import CustomSolutions from '@/components/CustomSolutions';
import Leadership from '@/components/Leadership';
import HappyClients from '@/components/HappyClients';
import NetworkPartners from '@/components/NetworkPartners';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Audit Squad - Home | Professional Inventory Auditing Services',
  description: 'Transform your inventory management with Audit Squad. Expert auditors, real-time verification, and comprehensive reporting for businesses of all sizes.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Education />
        <Process />
        <CustomSolutions />
        <Leadership />
        <HappyClients />
        <NetworkPartners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}