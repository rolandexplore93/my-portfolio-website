import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const feSkills = ["React", "JavaScript", "TypeScript", "TailwindCSS", "HTML5", "CSS3"];
    const beSkills = ["C#", ".NET Core", ".NET Framework", "Entity Framework Core", "SQL", "MySQL", "MongoDB", "Azure", "Docker"];
  
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
                </h2>
    
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passionate developer with expertise in building scalable web applications and creating innovative solutions. Skilled in applying software development lifecycle (SDLC) and Object-Oriented Programming (OOP) best practices, with a strong foundation in Agile collaboration. 
                    Eager to learn newer technologies, ready to tackle new challenges, contribute to and grow within dynamic teams.
                </p>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {feSkills.map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                        "
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
    
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {beSkills.map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                        "
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl text-center font-bold mb-4"> 🏫 Education </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong> MSc Information Communications and Technology</strong> - Anglia University, UK (2023-2024)
                                    </li>
                                </ul>
                                <small className="text-xs">Relevant Coursework: Web Development, Software Implementation, Secure Systems, Computer Systems and Servers</small>
                            </div>
                            <hr className="opacity-50"/>
                            <div>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong> BSc Chemical Engineering</strong> - Obafemi Awolowo University, Nigeria (2012-2017)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl text-center font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                {" "}
                                .NET Backend Developer at Hodanuk Ltd., UK <span className="text-xs">(Jul 2023 - Present)</span>{" "}
                                </h4>
                                <ul className="list-disc list-inside text-gray-300 text-xs">
                                    <li>Built and maintained merchant onboarding microservices with C# and ASP.NET Core, optimising API response times by 30% for high‑throughput financial transactions.</li>
                                    <li>Accelerated database performance by 30% by refining queries in SQL Server and Entity Framework Core, ensuring faster data processing for over 5,000 businesses.</li>
                                </ul>
                            </div>
                            <hr className="opacity-50"/>
                            <div>
                                <h4 className="font-semibold">
                                {" "}
                                Software Developer at Elixirmetrics Ltd <span className="text-xs">(Jan, 2023 - June 2023)</span>{" "}
                                </h4>
                                <ul className="list-disc list-inside text-gray-300 text-xs">
                                    <li>Developed RESTful Web APIs to improve data synchronisation and reduce data sync errors by 35%.</li>
                                    <li>Designed and implemented backend services for an e-commerce platform using C#, ASP.NET Core, and SQL Server, fixing complex bugs and ensuring compliance with coding standards.</li>
                                </ul>
                            </div>
                            <hr className="opacity-50"/>
                            <div>
                                <h4 className="font-semibold">
                                {" "}
                                Junior Full-Stack Developer at Enlumi Insiight Limited <span className="text-xs">(Aug 2021 - Dec 2022)</span>{" "}
                                </h4>
                                <ul className="list-disc list-inside text-gray-300 text-xs">
                                    <li>Designed and developed fintech and inventory applications with C#, .NET 6, React, TailwindCSS, JavaScript and Typescript, boosting customer engagement by 30% through intuitive UI/UX improvements.</li>
                                    <li>Resolved concurrency and data consistency issues in a multi-tenant architecture, preventing repeated incidents and ensuring stable deployments.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </RevealOnScroll>
      </section>
    );
  };