const Skills = () => {
    const skills = [
        'React', 'Node.js', 'C++', 'Python', 'JavaScript', 'Postgres', 'Docker',
        'SQL', 'Express', 'FastAPI', 'Next.js', 'MongoDB', 'Git', 'Go'
    ];

    return (
        <div className="text-white mt-10 mb-10">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold mb-4">Skills</h2>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-2 py-2 bg-white text-black rounded-full text-xs sm:text-sm 
                         font-medium hover:bg-gray-200 transition-colors flex justify-center items-center"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
