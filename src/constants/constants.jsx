//import images
import imgHover1 from "../assets/Aboutme.png";
import psicoAppImg from "../assets/PsicoApp.png";
import loginImg from "../assets/Login.png";
import appoImg from "../assets/appointments.png";
import controlImg from "../assets/controlpanel.png";
import aboutmeImg from "../assets/aboutmepat.png";
import editImg from "../assets/editprof.png";
//mobiles
import aboutmeMobile from "../assets/capturaAboutMee.png";
import aboutmeImgMobile from "../assets/aboutmeImgMobile.png";
import adminImgMobile from "../assets/admin.png";
import admin2ImgMobile from "../assets/admin2.png";
import patientImg from "../assets/patient.png";

export const techs = [
  {
    name: "react-original",
    gradient: "from-blue-600 to-cyan-800",
    nombre: "React",
    time: 0.3,
  },
  {
    name: "javascript-plain",
    gradient: "from-yellow-600 to-yellow-700",
    nombre: "JavaScript",
    time: 0.7,
  },
  {
    name: "typescript-plain",
    gradient: "from-blue-400 to-blue-700",
    nombre: "TypeScript",
    time: 1.1,
  },
  {
    name: "mongodb-plain",
    gradient: "from-green-400 to-green-700",
    nombre: "MongoDB",
    time: 1.5,
  },
  {
    name: "html5-plain",
    gradient: "from-orange-500 to-red-500",
    nombre: "HTML",
    time: 1.9,
  },
  {
    name: "css3-plain",
    gradient: "from-blue-500 to-indigo-500",
    nombre: "CSS",
    time: 2.3,
  },
  {
    name: "tailwindcss-original",
    gradient: "from-teal-400 to-teal-600",
    nombre: "TailwindCss",
    time: 2.7,
  },
  {
    name: "angularjs-plain",
    gradient: "from-red-500 to-red-700",
    nombre: "Angular",
    time: 3.1,
  },
  {
    name: "nodejs-plain",
    gradient: "from-green-500 to-green-700",
    nombre: "Node.Js",
    time: 3.5,
  },
];

export const projects = [
  {
    id: 1,
    title: "Psico App",
    description:
      "Sitio web que permite el control y manejo de pacientes, desde el lado del profesional y paciente.",
    description2:
      "Sitio web que permite el control y manejo de pacientes, desde el lado del profesional y paciente. etc etc etc etc etcetc etc etc etc etcetc etc etc etc etcetc etc etc etc etcetc etc etc etc etc",
    image: psicoAppImg,
    image2: imgHover1,
    image2m: aboutmeMobile,
    image3: loginImg,
    image3m: adminImgMobile,
    image4: appoImg,
    image4m: admin2ImgMobile,
    image5: controlImg,
    image6: aboutmeImg,
    image6m: aboutmeImgMobile,
    image7: editImg,
    image7m: patientImg,
    link: "https://psico-app-iota.vercel.app/",
    techs: [
      "react-original",
      "tailwindcss-original",
      "typescript-plain",
      "nodejs-plain",
      "mongodb-plain",
    ],
    time: 0.4,
  },
  {
    id: 2,
    title: "Dashboard de Análisis",
    description: "Panel de control con gráficos interactivos y API.",
    image:
      "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
    image2:
      "https://i.pinimg.com/736x/bd/e7/01/bde701ce79f7ddda2dfb7b6886eb221b.jpg",
    link: "https://tudashboard.com",
    techs: [
      "react-original",
      "typescript-plain",
      "nodejs-plain",
      "mongodb-plain",
    ],
    time: 0.7,
  },
  {
    id: 3,
    title: "Blog Personal",
    description: "Un blog moderno con Next.js y CMS integrado.",
    image:
      "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
    image2:
      "https://i.pinimg.com/736x/bd/e7/01/bde701ce79f7ddda2dfb7b6886eb221b.jpg",
    link: "https://tublog.com",
    techs: ["nextjs-original", "typescript-plain", "tailwindcss-original"],
    time: 0.9,
  },
];
