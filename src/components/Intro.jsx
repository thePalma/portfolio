import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Antonio Di Palma
      </h1>
      <p className="text-base md:text-xl mb-3 font-bold">Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
      Java | C# | Spring Boot | Javascript | PostgreSQL | Oracle SQL | Python | HTML | Git <br /> TDD | DDD
      Azure | Docker | CI/CD | Firebase | Unit Testing | REST | OpenAPI <br /> GitHub Copilot | OOP | WSL
      Microservices | Distributed Systems | Backend <br /> Italian, English - All professional proficiency or above
      </p>
    </div>
  );
}

export default Intro;
