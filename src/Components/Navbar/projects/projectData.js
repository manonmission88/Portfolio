
import customShell from './images/customshell.png'
import localWiki from './images/localwiki.png'
import digitalCalulator from './images/multi_resized.png'
import digitalNotebook from './images/digitalnotebook_resized.png'
import disasterTweet from './images/disaster_tweet_chart.png'
import mentoxy from './images/mentoxy.png'
import pokedex from './images/pokedoxcli.png'
import guardianBot from './images/guardianbot.png'

const projectData = [
    {
        id: "project-1",
        img: mentoxy, // Using existing image, you can replace with actual Mentoxy image
        name: "Mentoxy (Website)",
        stack: ["ReactJS", "HTML", "CSS", "JavaScript", "MySQL", "Figma"],
        source: "https://github.com/manonmission88/mentoxy", // Replace with actual GitHub link
        description: "Co-founded Mentoxy, a site to help students connect with mentors. Took the lead on building the front-end with ReactJS, HTML, CSS, and JavaScript, based on our Figma designs. Set up the MySQL database and built the main mentor matching system, focusing on making it user-friendly and keeping everyone's data secure.",
    },
    {
        id: "project-2",
        img: guardianBot, // Using existing image, you can replace with actual Guardian Bot image
        name: "Guardian Bot: A TurtleBot Care Project",
        stack: ["Python", "C++", "ROS 2", "TurtleBot 4", "SLAM", "LiDAR"],
        source: "https://github.com/manonmission88/guardian-bot", // Replace with actual GitHub link
        description: "Utilized TurtleBot 4 to simulate and implement an AI agent elderly care assistant with real-time monitoring. Developed SLAM-based mapping and autonomous navigation using TurtleBot 4's LiDAR, depth cameras, and IMU for obstacle avoidance and localization. Integrated ROS 2 framework with Python and C++ for sensor fusion, motion control, and decision-making in a healthcare assistance environment.",
    },
    {
        id: "project-3",
        img: pokedex,
        name: "Pokedex CLI Game",
        stack: ["Go", "CLI", "REST API", "REPL"],
        source: "https://github.com/manonmission88/pokedex-cli-game", // Replace with actual GitHub link
        description: "Developed an interactive command-line Pokemon game in Go with a REPL interface for exploring regions, catching, and inspecting Pokemon using live API data. Implemented in-memory caching and pagination to optimize API usage, reduce latency, and improve memory efficiency across sessions.",
    },
    {
        id: "project-4",
        img: customShell,
        name: "Custom Shell",
        stack: ["C"],
        source: "https://github.com/manonmission88/Operating--System/tree/main/project-1--create-a-simple-shell",
        description:
            "The command shell I developed in C supports essential functionalities such as changing directories, handling signals like SIGINT, and providing a clean exit mechanism. Users can navigate the file system effortlessly using the cd command, while signal handling ensures proper termination of processes. Additionally, the shell allows users to exit gracefully using the exit command or Ctrl+D input. These features, along with support for job control and command history, contribute to a user-friendly and efficient command-line experience.",
    }, 
    {
        id: "project-5",
        img: localWiki,
        name: "Local-Wiki-Project",
        stack: ["Python", "Flask", "HTML", "Javascript", "CSS", "Jinja"],
        source: "https://github.com/manonmission88/Local-Wiki-Project",
        description:
            "The locally hosted wiki project We've developed boasts essential features for effortless content management. Users can easily navigate through pages, create, edit, and delete content, and search efficiently. The interface is intuitive, allowing users to seamlessly interact with the wiki. Additionally, the project includes robust security measures to protect user data and prevent unauthorized access. ",
    },
    {
        id: "project-6",
        img: digitalNotebook,
        name: "Digital Notebook",
        stack: ["Python", "Tkinter", "SQLite"],
        source: "https://github.com/manonmission88/Digital-Notebook",
        description: "A desktop app to keep track of assignments given by professors. Similar to the concept of maintaining homework notes in a physical diary, this app allows users to manage assignments digitally. Built with Tkinter for the frontend and SQLite for the backend, it offers a user-friendly interface for tracking assignments.",
    },
    {
        id: "project-7",
        img: disasterTweet,
        name: "Disaster Tweet Classifier",
        stack: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
        source: "https://github.com/manonmission88/Disaster-Tweet-Model",
        description: "Developed a disaster tweet classification model using TensorFlow, Scikit-learn, Pandas, and NumPy. Improved model accuracy through comprehensive hyperparameter tuning and tested various models, including CNN and SVM, to identify the most effective approach for classifying disaster-related tweets.",
    },
    {
        id: "project-8",
        img: digitalCalulator,
        name: "Multi Functional Calculator",
        stack: ["Python", "Tkinter"],
        source: "https://github.com/manonmission88/multi_functional_calculator",
        description: "Developed this Multi-functional Calculator using Python and Tkinter for personal use. It supports various calculations, including basic math, factorization, permutation, and logarithms. The app is designed to be easy to use with a simple interface for quick and efficient calculations",
    },

];

export { projectData };