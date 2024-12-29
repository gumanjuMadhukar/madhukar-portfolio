import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Development Engineer",
    company: "AEIRC",
    startDate: "Jul 2024",
    isCurrentJob: true,
    location: "Babarmahal, Kathmandu",
    description: [
      "Currently working on developing innovative software solutions.",
      "Contributing to large-scale projects with a focus on performance optimization.",
      "Collaborating closely with cross-functional teams to ensure product quality.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },
  {
    designation: "Web Developer",
    company: "Merito",
    startDate: "Feb 2023",
    endDate: "Jul 2024",
    isCurrentJob: false,
    location: "Pune, India",
    description: [
      "Developed over 5 web applications with seamless backend API integration.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.",
      "Resolved 100+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
  {
    designation: "Web Development Intern",
    company: "Career Corner Education Pvt Ltd",
    startDate: "Jul 2021",
    endDate: "Nov 2021",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
];

export default experiences;
