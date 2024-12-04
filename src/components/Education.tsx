const Education = () => {
    return (
        <div>
            <h2 className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-4">Education</h2>
            <div className="text-gray-300 text-xs sm:text-sm lg:text-xs space-y-4 leading-relaxed">
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Lovely Professional University</h2>
                <div className="flex flex-row justify-between">
                    <p className="font-semibold text-white">Bachelor of Technology, Computer Science and Engineering</p>
                    <p>2020 - 2024</p>
                </div>
                <div className="flex gap-3 justify-between">
                    <p>Coursework:</p>
                    <p className="text-white">Data Structures and Algorithms, Database Management Systems, Operating Systems, Object-Oriented Programming, Distributed Systems, Computer Networks, Machine Learning, Compiler Design.</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
