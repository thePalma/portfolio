import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Antonio Di Palma
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a Software Engineer with a strong passion for technology, coding and
        video games. After graduating with a bachelor's degree in Computer
        Engineering, I started my path as a consultant at NTT DATA Italy. I
        enjoy learning new technologies and experimenting with different tools
        and frameworks. In addition to my work, I actively contribute and
        disseminate open-source code, believing in the power of collaboration
        and knowledge sharing. I have extensive experience in Java, Spring Boot
        and Java EE, as well as proficiency in ASP.NET, JavaScript, and Python.
        Proficient in SQL and familiar with various databases. I possess
        excellent knowledge of Git, TDD, and Agile development methodologies.
        Additionally, I have a fair understanding of Docker containerization.
      </p>
    </div>
  );
}

export default Intro;
