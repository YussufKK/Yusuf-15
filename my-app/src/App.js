import React from 'react';
import './App.css';

function App() {
  const skills = [
    { name: 'SQL', level: 'Intermediate' },
    { name: 'React', level: 'Beginer' },
    { name: 'CSS', level: 'Intermediate' },
  ];

  const experiences = [
    { title: 'Biomedical Engineer', company: 'Orhun medical', duration: 'Jun 2022 - Sep 2022' },
    { title: 'Retail Sales Manager', company: 'Suvari', duration: 'Jun 2018 - sep 2018' },
  ];

  const education = [
    { institution: 'University of South Florida', degree: 'BSc in Business analytics', years: '2021 - 2025' },
  ];

  return (
    <div className="App">
      <div className="personal-info">
        <h1>Khusseinyussuf Khojar</h1>
        <p>Business Analytics Student in the USF Muma College of Bussiness, eager to pursue internships in the field of Business Analytics</p>
        <p>Email: <a href="Khusseinyussuf@usf.edu">Khusseinyussuf@usf.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/Khussienyussuf-khojar-8a6927220" target="_blank" rel="noopener noreferrer">Khusseinyussuf khojar</a></p>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        {skills.map(skill => (
          <div key={skill.name} className="skill">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>

      <div className="experience">
        <h2>Experience</h2>
        {experiences.map(exp => (
          <div key={exp.title} className="experience-entry">
            <h3>{exp.title}</h3>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
          </div>
        ))}
      </div>

      <div className="education">
        <h2>Education</h2>
        {education.map(edu => (
          <div key={edu.institution} className="education-entry">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.years}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
