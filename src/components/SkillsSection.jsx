const SkillsSection = () => {
  const skills = [
    'React', 'Node.js', 'C++', 'Python', 'JavaScript', 'Postgres', 'Docker', 
    'SQL', 'Express', 'Fast API', 'Flask', 'Mongo DB', 'Rabbit MQ', 'Git', 
    'REST API'
  ];

  return (
    <div className="text-white mt-10 mb-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Skills</h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-1 py-3 bg-white text-black rounded-full text-sm sm:text-base 
                       font-medium hover:bg-gray-200 transition-colors flex justify-center align-middle"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
