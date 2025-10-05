import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  // Animation variants for better organization
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const buttonHover = {
    scale: 1.08,
    y: -4,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white px-6, py-30 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-300/20 rounded-full blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-green-300/20 rounded-full blur-2xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Sparkle effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Ring Animation */}
        <motion.div
          className="mb-8 relative inline-block"
          variants={imageVariants}
        >
          {/* Animated ring around image */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(45deg, #fbbf24, #06b6d4, #8b5cf6)",
              padding: "4px",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full bg-blue-600" />
          </motion.div>

          <motion.img
            src="src/assets/image.png"
            alt="Jackey Kumar - Web Developer"
            className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-white shadow-2xl object-cover"
            whileHover={{
              scale: 1.05,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
          />

          {/* Status Badge */}

          <motion.div
            className="absolute bottom-2 right-2 z-20 bg-green-400 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              className="w-3 h-3 bg-green-600 rounded-full"
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="absolute -top-6 -right-0-6 bg-yellow-400 p-3 rounded-full shadow-xl "
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code className="text-gray-900" size={20} />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-6 bg-cyan-300 p-3 rounded-full shadow-xl"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Sparkles className="text-blue-900" size={20} />
          </motion.div>
        </motion.div>

        {/* Heading with Gradient Animation */}
        <motion.div variants={fadeInUp}>
          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span
              className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to bg-yellow-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 30px rgba(251, 191, 36, 0.8)",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Jackey Kumar
            </motion.span>
            <motion.span
              className="inline-block ml-2 text-5xl"
              animate={{
                rotate: [0, 20, -20, 20, 0],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            >
              👋
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Enhanced Description */}
        <motion.div variants={fadeInUp} className="mb-12 max-w-3xl mx-auto">
          <motion.p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-4">
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-yellow-300 text-gray-900 rounded-xl font-bold shadow-lg mx-1"
              whileHover={{
                scale: 1.1,
                rotate: [0, -2, -1, 0],
                boxShadow: "0 10px 30px rgba(251, 191, 36, 0.5)",
              }}
              transition={{ duration: 0.5 }}
            >
              Web Developer
            </motion.span>
            <motion.span className="mx-2">&</motion.span>
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-300 to-cyan-400 text-gray-900 rounded-xl font-bold shadow-lg mx-1"
              whileHover={{
                scale: 1.1,
                rotate: [0, 2, -1, 0],
                boxShadow: "0 10px 30px rgba(34, 211, 238, 0.5)",
              }}
              transition={{ duration: 0.5 }}
            >
              Programmer
            </motion.span>
            <motion.span
              className="inline-block text-3xl ml-2"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              🚀
            </motion.span>
          </motion.p>

          <motion.p
            className="mt-6 text-lg md:text-xl text-blue-50 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Building interactive and dynamic web applications with modern
            technologies.
            <br />
            <motion.span
              className="inline-block mt-2 font-semibold text-yellow-300"
              animate={{ opacity: [0.7, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Transforming ideas into digital reality ✨
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-12"
        >
          <motion.button
            onClick={() => navigate("/projects")}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-100 to-cyan-100 backdrop-blur-sm text-blue-600 font-bold rounded-full shadow-2xl overflow-hidden min-w-[220px]"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 "
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center justify-center gap-2 text-lg">
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={22} />
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={() => navigate("/contact")}
            className="group relative px-10 py-5 bg-white/95 backdrop-blur-sm text-blue-600 font-bold rounded-full shadow-2xl overflow-hidden min-w-[220px]"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center justify-center gap-2 text-lg ">
              <Mail size={22} />
              Contact Me
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links with Better Animation */}
        <motion.div
        variants={fadeInUp}
        className="flex gap-6 justify-center mb-12"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/Jack45-coder",
              label: "GitHub",
              color: "from-gray-700 to-gray-900",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/jackey-%E2%81%A0%E2%80%BF%E2%81%A0-94110b247/",
              label: "LinkedIn",
              color: "from-blue-600 to-blue-800",
            },
            {
              icon: Mail,
              href: "mailto:jackeyjazzbgp1234@gmail.com",
              label: "Email",
              color: "from-red-400 to-red-500",
            },
          ].map(({icon: Icon, href, label, color}, i) => (
            <motion.a
             key={label}
             href={href}
             custom={i}
             variants={socialIconVariants}
             whileHover={{
                scale: 1.2,
                rotate: 10,
                y: -5,
             }}
             whileTap={{scale: 0.9}}
             className={`p-5 bg-white/10 backdrop:-blur-sm rounded-full transition-all duration-300 hover:bg-gradient-to-br ${color} group relative`}
             target="_blank"
             rel="noopener noreferrer"
            >
                <Icon size={26} className="relative z-10 group-hover:text-white transition-colors " />
                <motion.div
                className="absolute inset-0 rounded-full bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Skills with Enhanced Animation */}
        <motion.div variants={fadeInUp} className="mt-16">
          <motion.h3
            className="text-sm uppercase tracking-wider text-blue-200 mb-6 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Tech Stack
          </motion.h3>
          <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
            {["React", "JavaScript", "Node.js", "Tailwind CSS", "MongoDB", "Express"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-base font-semibold border-2 border-white/20 hover:border-white/40 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-cyan-400/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">{skill}</span>
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
