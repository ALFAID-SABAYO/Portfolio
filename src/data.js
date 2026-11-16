// EDIT HERE. Everything on the site comes from this file.
export const GH = 'https://github.com/ALFAID-SABAYO'
export const person = {
  name: 'Alfaid Sabayo', title: 'Full Stack Developer',
  email: 'faid.sabayo@gmail.com', phone: '+92 334 9906380', location: 'Karachi, Pakistan',
  github: GH, linkedin: 'https://linkedin.com/in/alfaid-sabayo',
}
export const about = [
  'I am a final-year Computer Science student at SZABIST, Karachi, looking for a full stack internship or junior role.',
  'I build complete web apps: the interface, the API and the database behind it. Right now I am building the frontend of a client\'s website with Next.js, React and TypeScript as a freelancer.',
]
export const doing = [
  { icon: 'code', title: 'Frontend', text: 'React, Next.js, TypeScript and Tailwind CSS. Client requirements turned into pages and reusable components.' },
  { icon: 'server', title: 'Backend and APIs', text: 'Node.js, Express, ASP.NET Core and FastAPI. REST APIs with role-based access control.' },
  { icon: 'db', title: 'Databases', text: 'PostgreSQL and MySQL. Normalized schemas and the SQL behind login and bidding.' },
  { icon: 'cpu', title: 'AI and ML', text: 'Anthropic API features in SkillForge, and scikit-learn models for real estate prices.' },
]
export const education = [
  { title: 'BS Computer Science, SZABIST Karachi', when: '2023 to 2027 (expected)', text: 'CGPA 3.27 / 4.00. Courses: Object-Oriented Programming, Data Structures and Algorithms, Database Systems.' },
  { title: 'Intermediate (Pre-Medical), Aga Khan Higher Secondary School, Karimabad', when: '2021', text: '' },
]
export const experience = [
  { title: 'Freelance Frontend Developer (Remote)', when: 'June 2026 to present',
    text: 'Building a client\'s website with Next.js, React and TypeScript. Turning requirements into working pages and reusable UI components. Ongoing updates and maintenance after launch.' },
]
export const achievements = [{ title: 'DevDay26, Participant', when: '', text: '"Guilty by Data" module hosted by FAST University.' }]
export const skills = [
  ['Languages', ['JavaScript', 'TypeScript', 'C#', 'Python']],
  ['Frameworks', ['React.js', 'Next.js', 'Node.js', 'Express.js', 'ASP.NET Core', 'FastAPI', 'Tailwind CSS']],
  ['Databases', ['PostgreSQL', 'MySQL']],
  ['Tools', ['Git', 'GitHub', 'Postman', 'VS Code', 'Power BI (learning)']],
  ['Concepts', ['REST APIs', 'OOP', 'Data Structures and Algorithms', 'Role-Based Access Control', 'Machine Learning basics']],
]
// image: put a screenshot in public/projects/ and set e.g. '/projects/skillforge.png'. Empty = colored placeholder.
export const filters = ['All', 'Full stack', 'AI and ML', 'Database']
export const projects = [
  { name: 'SkillForge', cats: ['Full stack', 'AI and ML'], kind: 'AI corporate training platform', type: 'Semester project', hue: 225, image: '', repo: 'https://github.com/ALFAID-SABAYO/Skill-forge', live: '',
    points: ['Training and certification platform with 4 user roles: Employee, Manager, Content Admin, HR Admin.', 'Uses the Anthropic API for 4 AI features: learning paths, quizzes, skill gaps and compliance alerts.'],
    stack: ['React', 'Node.js', 'TypeORM', 'PostgreSQL', 'Anthropic API'] },
  { name: 'Real Estate AI', cats: ['AI and ML', 'Full stack'], kind: 'Property price prediction for Pakistan', type: 'Semester project', hue: 160, image: '', repo: 'https://github.com/ALFAID-SABAYO/PROAI.PK', live: '',
    points: ['Built the React frontend with role-based dashboards and contributed to the FastAPI backend.', 'Trained 3 ML models on 97,910 Karachi and Islamabad listings. Random Forest scored best with an R2 of 0.90.'],
    stack: ['React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'scikit-learn'] },
  { name: 'Coursify', cats: ['Full stack'], kind: 'Online learning platform', type: 'Personal project', hue: 35, image: '', repo: 'https://github.com/ALFAID-SABAYO/coursify-online-learning-platform', live: '',
    points: ['Udemy-style platform where teachers publish courses and students enroll and pay.', '3 role-based logins (Admin, Teacher, Student), payments and automatic certificates.'],
    stack: ['C#', 'ASP.NET'] },
  { name: 'Freelance Marketplace', cats: ['Database'], kind: 'Job postings and bidding', type: 'Personal project', hue: 290, image: '', repo: 'https://github.com/ALFAID-SABAYO/freelance-marketplace-dbms', live: '',
    points: ['Designed a normalized database for job postings and bidding.', 'Wrote the SQL for login and bidding.'],
    stack: ['SQL', 'Database Design'] },
    {
      name: 'Hospital Management System',
      cats: ['Web Development', 'Database'],
      kind: 'Role-based Hospital Management',
      type: 'Academic project',
      hue: 210,
      image: '',
      repo: 'https://github.com/ALFAID-SABAYO/hospital-management-system',
      live: '',
      points: [
        'Developed a hospital management system using ASP.NET Core MVC and C#.',
        'Implemented role-based access for Admin, Doctor, Patient and Receptionist.',
        'Built modules for appointments, doctor scheduling, patient records, prescriptions and billing.',
        'Integrated Entity Framework Core with PostgreSQL for database management.'
      ],
      stack: ['C#', 'ASP.NET Core MVC', '.NET 8', 'Entity Framework Core', 'PostgreSQL', 'JWT']
    },
    {
      name: 'Java Music Player',
      cats: ['DSA', 'Java'],
      kind: 'Console-based Music Player',
      type: 'Academic project',
      hue: 160,
      image: '',
      repo: '',
      live: '',
      points: [
        'Developed a console-based music player using Java as a Data Structures and Algorithms project.',
        'Implemented song management using arrays.',
        'Added operations to insert, remove, search and display songs.',
        'Applied fundamental array operations and data manipulation concepts.'
      ],
      stack: ['Java', 'Data Structures & Algorithms', 'Arrays']
    },
]
