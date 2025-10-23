"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const contacts = [
  { icon: <Mail className="w-5 h-5 text-blue-400" />, text: "yrmihiangoncalvesdelima@gmail.com", link: "mailto:yrmihiangoncalvesdelima@gmail.com" },
  { icon: <Github className="w-5 h-5 text-blue-400" />, text: "Github", link: "https://github.com/Yrmih" },
  { icon: <Linkedin className="w-5 h-5 text-blue-400" />, text: "LinkedIn", link: "https://www.linkedin.com/in/yrmihian" },
  { icon: <Instagram className="w-5 h-5 text-blue-400" />, text: "Instagram", link: "https://www.instagram.com/yrmih.ian/" },
];

export default function ContactGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {contacts.map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          {item.icon}
          <span>{item.text}</span>
        </motion.a>
      ))}
    </motion.div>
  );
}
