
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </Layout>
  );
};

export default Index;
