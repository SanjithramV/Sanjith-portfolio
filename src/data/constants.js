
import vitLogo from "../assets/img/vit.png";
export const skills = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C", "C++", "JavaScript"]
  },
  {
    title: "Web & App Development",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Bootstrap"]
  },
  {
    title: "Database & APIs",
    skills: ["MySQL", "SQL", "MongoDB", "JDBC", "REST APIs"]
  },
  {
    title: "AI & Embedded Systems",
    skills: ["OpenCV", "TensorFlow", "Keras", "Arduino", "ESP8266", "LabVIEW"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "Postman", "Blynk IoT"]
  }
];


export const experiences = [
  {
    id: 0,
    role: "Project Intern",
    company: "Defence Research and Development Organisation (DRDO), Bangalore",
    date: "Aug 2023 – Oct 2023",
    desc:"Implementing  the automation of the antenna Measurement Facility.",
    skills: ["Python", "Automation", "Machine Learning"]
  }
];


// Import local images correctly


export const education = [
  {
    id: 0,
    school: "Vellore Institute of Technology (VIT), India",
    date: "Aug 2021 – May 2025",
    grade: "CGPA: 9.5",
    desc: "Bachelor of Technology in Electronics and Communication Engineering.",
    degree: "B.Tech - ECE",
    img: vitLogo 
  }
];
export const projects = [
  {
    title: "Secure Digital Signature Image Encryption",
    description:
      "Built a hybrid encryption system using CNN, Quantum Key Distribution (QKD), and chaotic maps to secure signature images against cyber threats. Ensures authentication and confidentiality in digital transactions.",
      imgUrl: require("../assets/img/encryption.png"),
  },
  {
    title: "AI-Powered Travel Assistant",
    description:
      "Developed a TravelGPT-like web app using computer vision and NLP to suggest destinations and personalize itineraries based on user inputs. Leveraged ML models and real-time APIs for dynamic recommendations.",
      imgUrl: require("../assets/img/travelgpt.png"),
  },
  {
    title: "IoT-based Fall Detection System",
    description:
      "Engineered an IoT solution for elderly safety using ESP8266, MPU6050, and Blynk IoT app. Detected sudden motion using accelerometer data and sent alerts for emergency assistance.",
      imgUrl: require("../assets/img/falldetect.png"),
  },
  {
    title: "Vocal Authentication System",
    description:
      "Implemented a voice recognition-based secure login system using Python and machine learning. Enabled biometric access through speaker verification techniques.",
      imgUrl: require("../assets/img/voiceauth.png"),
  }
];

