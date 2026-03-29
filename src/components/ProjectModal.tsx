import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  link?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card rounded-[40px] border-white/10 shadow-2xl custom-scrollbar"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-3 glass rounded-full hover:bg-white/10 transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="grid lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <span className="text-primary font-mono text-xs uppercase tracking-widest">{project.category}</span>
                <h2 className="text-4xl font-bold font-heading mt-2">{project.title}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-primary" /> The Problem
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-secondary" /> The Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-sm border border-white/10 text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href={project.link} className="btn-primary flex items-center gap-2">
                  Live Preview <ExternalLink size={18} />
                </a>
                <a href="#" className="px-6 py-3 glass rounded-xl flex items-center gap-2 text-white hover:bg-white/5 transition-all border-white/10">
                  Documentation <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
