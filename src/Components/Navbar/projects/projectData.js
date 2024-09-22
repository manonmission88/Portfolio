
import customShell from './images/customshell.png'
const projectData = [
    {
        id: "project-1",
        img: customShell,
        name: "Custom Shell",
        stack: ["C"],
        source: "https://github.com/manonmission88/Operating--System/tree/main/project-1--create-a-simple-shell",
        description:
            "The command shell I developed in C supports essential functionalities such as changing directories, handling signals like SIGINT, and providing a clean exit mechanism. Users can navigate the file system effortlessly using the cd command, while signal handling ensures proper termination of processes. Additionally, the shell allows users to exit gracefully using the exit command or Ctrl+D input. These features, along with support for job control and command history, contribute to a user-friendly and efficient command-line experience.",
    }, {
        id: "project-2",
        img: customShell,
        name: "Local-Wiki-Project",
        stack: ["Python" , "Flask" , "HTML" , "Javascript", "CSS"],
        source: "https://github.com/manonmission88/Local-Wiki-Project",
        description:
            "The locally hosted wiki project We've developed boasts essential features for effortless content management. Users can easily navigate through pages, create, edit, and delete content, and search efficiently. The interface is intuitive, allowing users to seamlessly interact with the wiki. Additionally, the project includes robust security measures to protect user data and prevent unauthorized access. ",
    },
    {
        id: "project-3",
        img: customShell,
        name: "Digital Notebook",
        stack: ["Python", "Tkinter", "SQLite"],
        source: "https://github.com/manonmission88/Digital-Notebook",
        description: "A desktop app to keep track of assignments given by professors. Similar to the concept of maintaining homework notes in a physical diary, this app allows users to manage assignments digitally. Built with Tkinter for the frontend and SQLite for the backend, it offers a user-friendly interface for tracking assignments.",
    }
  
];

export { projectData };
