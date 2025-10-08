import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations';

const services = [
  {
    title: "WordPress Development",
    description: "Custom themes & plugins",
    details: "From custom WordPress themes to powerful Laravel applications, we leverage the latest technologies to deliver high-quality results on time and within budget.",
    icon: "🎨"
  },
  {
    title: "Laravel Applications",
    description: "Powerful backend solutions",
    details: "Building robust, scalable backend solutions with Laravel framework, ensuring optimal performance and security for your applications.",
    icon: "⚡"
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development",
    details: "Complete development lifecycle from concept to deployment, handling both frontend and backend requirements seamlessly.",
    icon: "🚀"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Let's work together to turn your ideas into reality.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                <motion.div {...scaleOnHover}>
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-purple-300 text-lg font-medium">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{service.details}</p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}