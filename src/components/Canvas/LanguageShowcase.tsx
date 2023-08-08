// import { Box } from '@chakra-ui/react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import RotatingTags from './RotatingTags'

import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud"

function goToURL(url : string) {
  window.open(url, '_blank')?.focus();
}

function LanguageShowcase() {
  return (

    <TagCloud
    className="hii"
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "normal",
    })}
    onClick={(tag: string) => {


      switch (tag) {
        case "NEXTJS":
          goToURL("https://nextjs.org/");
          break;
        case "VITE":
          goToURL("https://vitejs.dev/");
          break;
        case "REACT":
          goToURL("https://react.dev/");
          break;
        case "TYPESCRIPT":
          goToURL("https://www.typescriptlang.org/");
          break;
        case "JAVASCRIPT":
          goToURL("https://en.wikipedia.org/wiki/JavaScript");
          break;
        case "NODEJS":
          goToURL("https://nodejs.org/en");
          break;
        case "WEBPACK":
          goToURL("https://webpack.js.org/");
          break;
        case "BABEL":
          goToURL("https://babeljs.io/");
          break;
        case "GIT":
          goToURL("https://git-scm.com/");
          break;
        case "JQUERY":
          goToURL("https://jquery.com/");
          break;
        case "FLASK":
          goToURL("https://flask.palletsprojects.com/en/2.3.x/");
          break;
        case "ORACLE APEX":
          goToURL("https://apex.oracle.com/en/");
          break;
        case "JEST":
          goToURL("https://jestjs.io/");
          break;
        case "ORM":
          goToURL("https://www.theserverside.com/definition/object-relational-mapping-ORM");
          break;
        case ".NET":
          goToURL("https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet");
          break;
        case "PYTHON":
          goToURL("https://www.python.org/");
          break;
        case "SQL":
          goToURL("https://en.wikipedia.org/wiki/SQL");
          break;
        case "NOSQL":
          goToURL("https://en.wikipedia.org/wiki/NoSQL");
          break;
        case "EXPRESSJS":
          goToURL("https://expressjs.com/");
          break;
        case "AWS CLOUD":
          goToURL("https://aws.amazon.com/");
          break;
        case "ALIBABA CLOUD":
          goToURL("https://sg.alibabacloud.com/?utm_key=se_1012048803&utm_content=se_1012048803");
          break;
        default:
          break;
      }
    }}
    onClickOptions={{ passive: true }}
    >

    {[
        "NextJS",
        "Vite",
        "React",
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "Webpack",
        "Babel",
        "Git",
        "jQuery" ,
        "Flask",
        "Oracle APEX",
        "Jest",
        "ORM",
        ".NET",
        "Python",
        "SQL",
        "NoSQL",
        "ExpressJS",
        "AWS Cloud",
        "Alibaba Cloud"
    ]}
    </TagCloud>
  )
}

export default LanguageShowcase