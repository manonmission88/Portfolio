
import customShell from './images/customshell.png'
import localWiki from './images/localwiki.png'
import digitalCalulator from './images/multi_resized.png'
import digitalNotebook from './images/digitalnotebook_resized.png'
import disasterTweet from './images/disaster_tweet_chart.png'

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
        img: localWiki,
        name: "Local-Wiki-Project",
        stack: ["Python", "Flask", "HTML", "Javascript", "CSS", "Jinja"],
        source: "https://github.com/manonmission88/Local-Wiki-Project",
        description:
            "The locally hosted wiki project We've developed boasts essential features for effortless content management. Users can easily navigate through pages, create, edit, and delete content, and search efficiently. The interface is intuitive, allowing users to seamlessly interact with the wiki. Additionally, the project includes robust security measures to protect user data and prevent unauthorized access. ",
    },
    {
        id: "project-3",
        img: digitalNotebook,
        name: "Digital Notebook",
        stack: ["Python", "Tkinter", "SQLite"],
        source: "https://github.com/manonmission88/Digital-Notebook",
        description: "A desktop app to keep track of assignments given by professors. Similar to the concept of maintaining homework notes in a physical diary, this app allows users to manage assignments digitally. Built with Tkinter for the frontend and SQLite for the backend, it offers a user-friendly interface for tracking assignments.",
    },
    {
        id: "project-4",
        img: disasterTweet,
        name: "Disaster Tweet Classifier",
        stack: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
        source: "https://github.com/manonmission88/Disaster-Tweet-Model",
        description: "Developed a disaster tweet classification model using TensorFlow, Scikit-learn, Pandas, and NumPy. Improved model accuracy through comprehensive hyperparameter tuning and tested various models, including CNN and SVM, to identify the most effective approach for classifying disaster-related tweets.",
    },
    {
        id: "project-5",
        img: digitalCalulator,
        name: "Multi Functional Calculator",
        stack: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
        source: "https://github.com/manonmission88/multi_functional_calculator",
        description: "Developed this Multi-functional Calculator using Python and Tkinter for personal use. It supports various calculations, including basic math, factorization, permutation, and logarithms. The app is designed to be easy to use with a simple interface for quick and efficient calculations",
    },

];

export { projectData };