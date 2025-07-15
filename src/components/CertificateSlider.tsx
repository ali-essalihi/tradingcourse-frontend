// src/components/CertificateSlider.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  imageUrl: string;
  title: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    imageUrl: "/certs/cert1.jpg",
    title: "Validation - Test Prop Firm",
    description: "Ce certificat prouve la réussite du test de la firme prop XYZ.",
  },
  {
    imageUrl: "/certs/cert2.jpg",
    title: "Certification AlphaTrade",
    description: "Formation terminée avec distinction et validation complète.",
  },
  {
    imageUrl: "/certs/cert3.jpg",
    title: "Prop Firm Funded",
    description: "Le client a obtenu un compte financé après validation du test.",
  },
];

export const CertificateSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 bg-gradient-to-r from-purple-800 to-indigo-600 rounded-3xl shadow-xl text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications des Clients</h2>
      <div className="relative h-96 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <img
              src={certificates[index].imageUrl}
              alt={certificates[index].title}
              className="rounded-xl w-full max-w-md h-64 object-cover shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">{certificates[index].title}</h3>
            <p className="text-sm text-indigo-100 mt-1 text-center max-w-md">{certificates[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
