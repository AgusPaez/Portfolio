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
    name: "javascript-plain",
    gradient: "bg-gradient-to-br from-yellow-500 via-amber-600 to-yellow-600",
    nombre: "JavaScript",
    time: 0.3,
  },
  {
    name: "typescript-plain",
    gradient: "bg-gradient-to-br from-blue-400 via-sky-500 to-blue-700",
    nombre: "TypeScript",
    time: 0.7,
  },
  {
    name: "react-original",
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-600 to-cyan-700",
    nombre: "React",
    time: 1.1,
  },
  {
    name: "angularjs-plain",
    gradient: "bg-gradient-to-br from-red-500 via-rose-500 to-red-700",
    nombre: "Angular",
    time: 1.5,
  },
  {
    name: "html5-plain",
    gradient: "bg-gradient-to-br from-orange-500 via-amber-400 to-red-500",
    nombre: "HTML",
    time: 1.9,
  },
  {
    name: "css3-plain",
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-400 to-indigo-500",
    nombre: "CSS",
    time: 2.3,
  },
  {
    name: "tailwindcss-original",
    gradient: "bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-600",
    nombre: "TailwindCss",
    time: 2.7,
  },
  {
    name: "nodejs-plain",
    gradient: "bg-gradient-to-br from-green-500 via-lime-500 to-green-700",
    nombre: "Node.Js",
    time: 3.1,
  },
  {
    name: "mongodb-plain",
    gradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-green-700",
    nombre: "MongoDB",
    time: 3.5,
  },
];

export const tools = [
  {
    name: "vscode-plain colored",
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-700",
    nombre: "VS Code",
    time: 0.3,
  },
  {
    name: "intellij-plain",
    gradient: "bg-gradient-to-br from-yellow-500 via-red-500 to-blue-400",
    nombre: "Intellij IDEA",
    time: 0.7,
  },
  {
    name: "postman-plain colored",
    gradient: "bg-gradient-to-br from-orange-500 via-amber-500 to-orange-700",
    nombre: "Postman",
    time: 1.1,
  },
  {
    name: "insomnia-plain colored",
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700",
    nombre: "Insomnia",
    time: 1.5,
  },
  {
    name: "vercel-original",
    gradient: "bg-gradient-to-br from-gray-700 via-neutral-500 to-gray-900",
    nombre: "Vercel",
    time: 1.9,
  },
  {
    name: "render",
    gradient: "bg-gradient-to-br from-gray-700 via-neutral-500 to-gray-900",
    nombre: "Render",
    time: 2.3,
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
  // {
  //   id: 2,
  //   title: "Dashboard de Análisis",
  //   description: "Panel de control con gráficos interactivos y API.",
  //   image:
  //     "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
  //   image2:
  //     "https://i.pinimg.com/736x/bd/e7/01/bde701ce79f7ddda2dfb7b6886eb221b.jpg",
  //   link: "https://tudashboard.com",
  //   techs: [
  //     "react-original",
  //     "typescript-plain",
  //     "nodejs-plain",
  //     "mongodb-plain",
  //   ],
  //   time: 0.7,
  // },
  // {
  //   id: 3,
  //   title: "Blog Personal",
  //   description: "Un blog moderno con Next.js y CMS integrado.",
  //   image:
  //     "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
  //   image2:
  //     "https://i.pinimg.com/736x/bd/e7/01/bde701ce79f7ddda2dfb7b6886eb221b.jpg",
  //   link: "https://tublog.com",
  //   techs: ["nextjs-original", "typescript-plain", "tailwindcss-original"],
  //   time: 0.9,
  // },
];
