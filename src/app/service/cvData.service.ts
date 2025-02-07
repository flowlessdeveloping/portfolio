import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CvModel } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvData: CvModel[] = [
    {
      "section": "Professional Summary",
      "details": [
        {
          "title": "Experienced Senior Frontend Developer",
          "description": "Expertise in Angular, TypeScript, and modern web development frameworks. Passionate about building scalable, high-quality applications while mentoring teams and optimizing workflows. Strong background in Agile methodologies, software architecture, and technical leadership.",
          "technologies": ""
        }
      ]
    },
    {
      "section": "Professional Experience",
      "details": [
        {
          "title": "Senior Frontend Developer",
          "description": "Developed and delivered two high-quality internal projects on time. Contributed to an external project, supporting the team in achieving critical goals. Provided consulting services for Swisscom, focusing on maintenance and enhancement of their main portal (bug fixing, new feature implementation). Developed external libraries to standardize components across multiple projects. Conducted technical interviews to assess and onboard new talent. Presented a technical talk at the Beer Tech event, fostering frontend development knowledge sharing.",
          "technologies": "Angular, TypeScript, HTML, CSS, Jest, Cypress, NgRx, Jenkins, Jira, GitLab, Git"
        },
        {
          "title": "Senior Frontend Team Leader & Full Stack Developer",
          "description": "Led the frontend development team, ensuring seamless integration with backend systems. Designed and implemented a scalable frontend framework aligned with backend architecture. Developed features, performed rigorous API integration testing, and ensured data integrity. Reviewed code submissions to maintain high-quality standards and improve system reliability. Managed branch workflows, merges, and deployments. Mentored and guided Junior Frontend Developers.",
          "technologies": "Angular 12+, npm, Java Spring Boot, YAML, OpenAPI, Git, GitLab, Visual Studio Code, IntelliJ IDEA, Postman, Jira"
        },
        {
          "title": "Full Stack Developer & Consultant",
          "description": "Developed and maintained web applications for multiple clients. Optimized application performance and fixed critical bugs. Provided direct technical support to clients. Consultant for Noovle: Ensured optimal application performance and reliability. Consultant for Unicredit: Maintained and enhanced banking web applications.",
          "technologies": "Angular, Java Spring Boot, Oracle, SQL, Git, Bitbucket, Google Cloud Platform, IntelliJ IDEA, Eclipse"
        },
        {
          "title": "Java Backend Developer",
          "description": "Developed core banking app functionalities. Worked on API integrations and backend services. Conducted unit testing to ensure application stability.",
          "technologies": "Java, Spring Framework, JUnit, Oracle, Maven, Git, IntelliJ IDEA, Jira, Swagger (YAML)"
        },
        {
          "title": "Android Developer",
          "description": "Developed a mobile app for a medical company integrating geolocation, QR code scanning, authentication, and PayPal payments.",
          "technologies": "AngularJS, Ionic Framework, Google Maps API"
        },
        {
          "title": "Freelance Projects",
          "description": "Developed two e-commerce apps using Ionic & Angular. Built a Telegram bot with web scraping functionality using Node.js, PostgreSQL, and deployed on Heroku.",
          "technologies": "Ionic, Angular, Node.js, PostgreSQL, Heroku"
        }
      ]
    },
    {
      "section": "Education",
      "details": [
        {
          "title": "Bachelor’s Degree in Computer Science",
          "description": "Thesis: Implementation of Centrality Measures on Big Data Technologies and Performance Analysis.",
          "technologies": "University of Palermo (2013 – 2017)"
        },
        {
          "title": "High School Diploma in Economics",
          "description": "Graduated from Don Bosco Ranchibile.",
          "technologies": "Don Bosco Ranchibile (2005 – 2011)"
        }
      ]
    },
    {
      "section": "Certifications",
      "details": [
        {
          "title": "Angular Certificate",
          "description": "Completed on Coursera.",
          "technologies": "Coursera"
        },
        {
          "title": "Bootstrap Certificate",
          "description": "Completed on Coursera.",
          "technologies": "Coursera"
        }
      ]
    },
    {
      "section": "Technical Skills",
      "details": [
        {
          "title": "Frontend Development",
          "description": "Proficiency in building scalable and maintainable frontend applications.",
          "technologies": "Angular, TypeScript, HTML, CSS, JavaScript, Bootstrap, NgRx, Jest, Cypress"
        },
        {
          "title": "Backend Development",
          "description": "Experience in developing and maintaining backend services.",
          "technologies": "Java Spring Boot, Node.js, SQL, PostgreSQL, Oracle"
        },
        {
          "title": "DevOps & Tools",
          "description": "Familiarity with version control, CI/CD pipelines, and development tools.",
          "technologies": "Git, GitLab, Jenkins, Jira, Docker, Postman, IntelliJ IDEA, VS Code"
        },
        {
          "title": "Methodologies",
          "description": "Experienced in Agile frameworks and modern software development practices.",
          "technologies": "Agile (Scrum, Kanban), CI/CD, Code Reviews, API Development"
        }
      ]
    },
    {
      "section": "Soft Skills",
      "details": [
        {
          "title": "Leadership & Team Mentoring",
          "description": "Experienced in leading teams, mentoring developers, and conducting technical interviews.",
          "technologies": ""
        },
        {
          "title": "Problem-Solving & Debugging",
          "description": "Strong analytical and debugging skills to ensure application stability and efficiency.",
          "technologies": ""
        },
        {
          "title": "Technical Communication & Documentation",
          "description": "Ability to clearly document and communicate technical concepts.",
          "technologies": ""
        },
        {
          "title": "Agile Development & Collaboration",
          "description": "Skilled in working within Agile teams and fostering collaboration.",
          "technologies": ""
        }
      ]
    },
    {
      "section": "Speaking Engagements",
      "details": [
        {
          "title": "Beer Tech Event",
          "description": "Presented a talk on frontend development best practices.",
          "technologies": ""
        }
      ]
    }
  ];
  

  constructor() {}

  getCvData(): Observable<CvModel[]> {
    return of(this.cvData);
  }
}
