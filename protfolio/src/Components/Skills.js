import React from 'react';

const SkillsSection = () => {
  return (
    <section className="m-0 md:m-0 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Skills</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Skill Card */}
        {[
          { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
          { name: 'Canva', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg' },
          { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
          { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
          { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
          { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
          { name: 'JWT', logo: 'https://jwt.io/img/pic_logo.svg' },
          { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
          { name: 'Adobe Illustrator', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
          { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
          { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
          { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
          { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
          { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
          { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Microsoft_Azure_Linux_logo.png' },
          { name: 'Jenkins', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg' },
          { name: 'CI/CD Pipeline', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Cib-azure-devops_%28CoreUI_Icons_v1.0.0%29.svg' },
          { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
          
        ].map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center p-4 transition-transform duration-300 transform hover:scale-105'
          >
            <img
              src={skill.logo}
              alt={`${skill.name} Logo`}
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <h3 className="my-3 text-2xl font-semibold lg:text-3xl">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;