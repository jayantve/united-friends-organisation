import { SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiExpress, SiPython, SiFlask, SiFastapi, SiNumpy, SiPandas, SiCplusplus, SiRust, SiMongodb, SiMysql, SiFirebase } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const icons = {
  js: <SiJavascript size={50} />,
  ts: <SiTypescript size={50} />,
  nextjs: <SiNextdotjs size={50} />,
  react: <SiReact size={50} />,
  expressjs: <SiExpress size={50} />,
  python: <SiPython size={50} />,
  flask: <SiFlask size={50} />,
  fastapi: <SiFastapi size={50} />,
  numpy: <SiNumpy size={50} />,
  pandas: <SiPandas size={50} />,
  java: <FaJava size={50} />,
  cpp: <SiCplusplus size={50} />,
  rust: <SiRust size={50} />,
  mongodb: <SiMongodb size={50} />,
  mysql: <SiMysql size={50} />,
  firebase: <SiFirebase size={50} />,
};

export default icons;


export const Skills = [
  { name: 'JavaScript', icon: icons.js, description: 'My love language for the web.' },
  { name: 'TypeScript', icon: icons.ts, description: 'Enhancing JavaScript with static types.' },
  { name: 'Python', icon: icons.python, description: 'My second love, perfect for data and backends.' },
  { name: 'Java', icon: icons.java, description: 'Building robust, scalable enterprise applications.' },
  { name: 'C / C++ / C#', icon: icons.cpp, description: 'Foundation in systems programming and game development.' },
  { name: 'Rust', icon: icons.rust, description: 'For high-performance and reliable systems.' },
  { name: 'Next.js', icon: icons.nextjs, description: 'Building server-rendered React applications.' },
  { name: 'React.js', icon: icons.react, description: 'Creating modern, single-page web applications.' },
  { name: 'Express.js', icon: icons.expressjs, description: 'A flexible and minimalistic Node.js web framework.' },
  { name: 'Flask', icon: icons.flask, description: 'A lightweight and modular Python web framework.' },
  { name: 'FastAPI', icon: icons.flask, description: 'A modern, fast web framework for building APIs with Python.' },
  { name: 'NumPy / Pandas / Matplotlib', icon: icons.numpy, description: 'Data analysis and visualization in Python.' },
  { name: 'MongoDB', icon: icons.mongodb, description: 'A powerful NoSQL database for flexible data.' },
  { name: 'MySQL', icon: icons.mysql, description: 'A reliable and widely used relational database.' },
  { name: 'Firebase', icon: icons.firebase, description: 'Google\'s platform for building web and mobile apps.' },
];