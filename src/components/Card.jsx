import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Card({ title, description, link, index, tags }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Fixed typo: getBoundingClientReact -> getBoundingClientRect
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94], // Fixed: added missing value
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-3xl w-full max-w-sm overflow-hidden border-2 border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer"
    >
      {/* Animated mesh gradient background */}
      <motion.div
        animate={
          isHovered
            ? {
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                ],
              }
            : {}
        }
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Glassmorphism overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm rounded-3xl"
      />

      {/* Animated particles */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div // Fixed: motion -> motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, -Math.random() * 100], // Fixed: removed duplicate y property
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`, // Fixed: template literal syntax
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </>
      )}

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {/* Icon Badge with glow */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15 + 0.3,
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white font-bold text-xl mb-5 shadow-2xl group-hover:shadow-blue-500/50 transition-shadow duration-500"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          {index + 1}
        </motion.div>

        {/* Title */}
        <motion.h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500">
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p className="text-gray-600 mb-5 leading-relaxed min-h-[60px] group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </motion.p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {" "}
          {/* Fixed: added flex and gap */}
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }} // Fixed: whileHover -> whileInView
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
              className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full border border-blue-200 group-hover:border-purple-300 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTA Button with shine effect */}
        <motion.a
          href={link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg group-hover:shadow-xl overflow-hidden transition-all duration-300"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
          <span className="relative z-10">View Project</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            →
          </motion.span>
        </motion.a>
      </div>

      {/* Multi-layer border glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5))",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
}

export default Card;
