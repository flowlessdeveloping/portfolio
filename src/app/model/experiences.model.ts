export interface Experiences {
  startDate?: string;
  endDate?: string;
  location?: string;
  company?: string;
  role?: string;
  technologies?: string[];
  responsibilities?: string[];
}

export const experiencesData: Experiences[] = [
  {
    startDate: '15/11/2023',
    endDate: 'Present',
    location: 'Palermo, Italy',
    role: 'Senior Frontend Developer',
    company: 'Elca Spa',
    technologies: [
      'Angular',
      'React',
      'TypeScript',
      'Java',
      'HTML',
      'CSS',
      'Jest',
      'Cypress',
      'NgRx',
      'Jenkins',
      'Jira',
      'GitLab',
      'Git',
    ],
    responsibilities: [
      'Development & Delivery of Internal Projects: Successfully led the development and deployment of two high-impact internal projects, ensuring robust architectures, maintainability, and adherence to best practices.',
      'Consulting for Swisscom: Provided expertise in frontend and backend development to maintain and enhance Swisscom’s main portal, implementing new features and resolving complex issues with a focus on performance and scalability.',
      'Cross-Technology Contributions: Worked on an external project, bridging React and Angular implementations while integrating backend services in Java, contributing to a more modular and efficient system.',
      'Reusable Component Library Development: Designed and developed external React and Angular libraries, standardizing UI components across multiple projects, improving code reusability, and streamlining development workflows.',
      'Test Automation & CI/CD Pipelines: Implemented comprehensive test suites using Jest and Cypress, while optimizing CI/CD pipelines with Jenkins and GitLab CI, enhancing reliability and deployment efficiency.',
      'Technical Interviews & Talent Acquisition: Conducted multiple technical interviews to assess and onboard developers, ensuring a high technical standard within the team.',
      'Technical Speaking & Knowledge Sharing: Delivered a talk at Beer Tech on frontend best practices and scalable architectures, fostering engagement within the development community.',
    ],
  },
  {
    startDate: '31/08/2021',
    endDate: '14/11/2023',
    location: 'Palermo, Italy',
    company: 'GPI spa',
    role: 'Senior Frontend Team Leader - Professional Full Stack Developer',
    technologies: [
      'Angular 2+ (v12)',
      'npm',
      'Java Spring Boot (API integration)',
      'YAML',
      'OpenAPI (API documentation & configuration)',
      'Git',
      'GitLab',
      'Visual Studio Code',
      'IntelliJ IDEA',
      'Postman',
      'Jira',
    ],
    responsibilities: [
      'Frontend Architecture & Development: Designed and implemented a scalable, high-performance frontend framework, ensuring seamless integration with backend services.',
      'API Integration & Quality Assurance: Developed frontend functionality, integrated RESTful APIs, and conducted rigorous API testing to ensure data accuracy, security, and system reliability.',
      'Code Quality & Maintenance: Led continuous bug fixing, performance optimization, and code refactoring to enhance system stability. Reviewed code submissions for best practices, performance, and maintainability.',
      'Team Leadership & Mentorship: Led and mentored a team of two Junior Frontend Developers, fostering a collaborative and high-performance Agile environment.',
      'Branch Management & Deployment: Oversaw Git workflow, branch management, code merging, and deployment processes, ensuring smooth development cycles.',
      'Cross-Team Collaboration: Worked closely with the Backend Team Leader to align frontend and backend architecture, improving scalability and maintainability.',
    ],
  },
  {
    startDate: '30/09/2018',
    endDate: '30/08/2021',
    location: 'Palermo, Italy',
    company: 'Arancia-ict (Bank consultant)',
    role: 'Full-Stack Developer Consultant',
    technologies: [
      'Angular',
      'Xframes',
      'Java Spring Framework',
      'SQL',
      'Oracle',
      'Google Cloud Platform',
      'Eclipse',
      'Git',
      'Bitbucket',
      'Subversion (SVN)',
    ],
    responsibilities: [
      'Web Application Development & Management: Designed, developed, and maintained web applications, ensuring high performance and reliability.',
      'Bug Fixing & Performance Optimization: Diagnosed and resolved issues to minimize downtime, enhance user experience, and improve system efficiency.',
      'Client Support & Consulting: Provided technical assistance, addressed client requests, and implemented required changes to meet business needs.',
      'Cross-Team Collaboration: Worked with developers, designers, and business stakeholders to deliver scalable, secure, and high-performing solutions.',
    ],
  },
  {
    startDate: '31/12/2017',
    endDate: '30/09/2018',
    location: 'Milano, Italy',
    company: 'GFT Italia',
    role: 'Java Back-end Developer - Consulting',
    technologies: [
      'Java',
      'Spring Framework',
      'Junit Tests',
      'Oracle',
      'Maven',
    ],
  },
  {
    startDate: '31/03/2017',
    endDate: '31/12/2017',
    location: 'Palermo, Italy',
    company: 'Lookout S.r.L.',
    role: 'Android Developer - Ionic Framework',
    technologies: ['AngularJs', 'Ionic Framework'],
  },
];
