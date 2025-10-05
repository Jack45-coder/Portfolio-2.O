import { motion } from "framer-motion";
import { personalInfo, skills, education } from "../data";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
         {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            👨‍💻 Get to know me
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Passionate developer with a love for creating innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-0.6"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scle: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  My Story
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3  shadow-sm">
                    <span className="text-gray-500 block">📧 Email</span>
                    <span className="font-medium text-gray-800">
                      {personalInfo.email}
                    </span>
                  </div>

                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <span className="text-gray-500 block">📱 Phone</span>
                    <span className="font-medium text-gray-800">
                      {personalInfo.phone}
                    </span>
                  </div>

                  <div className="bg-white rounded-lg p-3 shadow-sm col-span-2">
                    <span className="text-gray-500 block">📍 Location</span>
                    <span className="font-medium text-gray-800">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🎓 Education
              </h3>
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-blue-600">{edu.university}</p>
                  <p className="text-gray-500">
                    {edu.duration} • {edu.grade}
                  </p>
                  <p className="text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                🛠️ Technical Skills
              </h3>

              <div className="space-y-6">
                {skills.map((skillCategory, categoryIdx) => (
                  <motion.div
                    key={{ categoryIdx }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIdx * 0.1 + 0.2 }}
                  >
                    <h4 className="font-semibold text-gray-700 mb-3">
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.technologies.map((tech, techIdx) => (
                        <motion.div
                          key={techIdx}
                          variants={skillVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{
                            delay: categoryIdx * 0.1 + techIdx * 0.05,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Fun Facts About Me
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-5xl mb-2">☕</div>
                  <p className="font-medium">Coffee Lover</p>
                  <p className="text-sm text-blue-400">
                    Fuel for coding sessions
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-5xl mb-2">🎮</div>
                  <p className="font-medium">Gaming Enthusiast</p>
                  <p className="text-sm text-blue-400">
                    Problem solving in games too
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-5xl mb-2">📚</div>
                  <p className="font-medium">Continuous Learner</p>
                  <p className="text-sm text-blue-400">
                    Always exploring new tech
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
