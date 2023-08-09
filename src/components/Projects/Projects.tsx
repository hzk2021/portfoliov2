import { SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Icons } from '../../enums/Icons'
import { icons } from '../../Misc/icons'
import ProjectItem from './ProjectItem'
import shoppingImg from "../../assets/projects_images/shopping-site.png";
import shoppingMobileImg from "../../assets/projects_images/shopping-site-mobile.png";
import memoryImg from "../../assets/projects_images/memory-game.png";
import memoryMobileImg from "../../assets/projects_images/memory-game-mobile.png";
import cvImg from "../../assets/projects_images/cv-app.png";
import cvMobileImg from "../../assets/projects_images/cv-app-mobile.png";
import restaurantMenuImg from "../../assets/projects_images/restaurant-menu.png";
import restaurantMenuMobileImg from "../../assets/projects_images/restaurant-menu-mobile.png";
import myFitElderlyImg from "../../assets/projects_images/myfitelderly.png";
import myFitElderlyMobileImg from "../../assets/projects_images/myfitelderly-mobile.png";
import SITConnectImg from "../../assets/projects_images/SITConnect.png";
import SITConnectMobileImg from "../../assets/projects_images/SITConnect-mobile.png";
import OnlyPlantsAWSArchitectureImg from "../../assets/projects_images/OnlyPlants-AWS-Architecture.png";
import OnlyPlantsMobileImg from "../../assets/projects_images/OnlyPlants-mobile.png";
import MinfluencerImg from "../../assets/projects_images/Minfluencer.png";
import MinfluencerEmailMobileImg from "../../assets/projects_images/Minfluencer-email-mobile.png";
import carrySharpImg from "../../assets/projects_images/CarrySharp.png";
import ticTacToeImg from "../../assets/projects_images/tic-tac-toe.png";
import ticTacToeMobileImg from "../../assets/projects_images/tic-tac-toe-mobile.png";
import todoListImg from "../../assets/projects_images/todoList.png";
import todoListMobileImg from "../../assets/projects_images/todoList-mobile.png";
import portfolioImg from "../../assets/projects_images/portfolio.png";
import portfolioMobileImg from "../../assets/projects_images/portfolio-mobile.png";
import lostAndFoundImg from "../../assets/projects_images/lost-and-found.png";
import lostAndFoundMobileImg from "../../assets/projects_images/lost-and-found-mobile.png";
import typeIOImg from "../../assets/projects_images/typeIO.png";
import typeIOMobileImg from "../../assets/projects_images/typeIO-mobile.png";
import discordBotImg from "../../assets/projects_images/discordbot.png";
import atrixWebImg from "../../assets/projects_images/atrix-python-web.png";
import portfoliov2Img from "../../assets/projects_images/portfoliov2.png";
import portfoliov2MobileImg from "../../assets/projects_images/portfoliov2-mobile.png";

function Projects() {
  return (
    <SimpleGrid as={motion.div}
          initial={{scale: 0.5}}
          animate={{scale: 1}}
          columns={{base: 3, sm: 4, md:5, lg: 6}}
          spacingX={20}
          spacingY={[1, 5, 10]}

          w="100%"
          justifyItems='center'
          alignItems="center"> 
        <ProjectItem icon={icons[Icons.RiotGames]} 
                     name="Game Trainer" 
                     tipLabel='[LoL Game Trainer] Click to find out more!'
                     pcImgSrc={carrySharpImg}
                     techIcons={[icons[Icons.CSharp], icons[Icons.Firebase], icons[Icons.reCAPTCHAGoogle], icons[Icons.MetroUI]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://github.com/hzk2021/Game-Helper-Source'/>

        <ProjectItem icon={icons[Icons.MonkeyType]} 
                     name="TypeIO" 
                     tipLabel='[Typing Game] Click to find out more!'
                     pcImgSrc={typeIOImg}
                     mobileImgSrc={typeIOMobileImg}
                     techIcons={[icons[Icons.NextJS], icons[Icons.TypeScript], icons[Icons.MongoDB], icons[Icons.Mongoose], icons[Icons.MUI], icons[Icons.FontAwesome],icons[Icons.ESLint], icons[Icons.reCAPTCHAGoogle]]}
                     description="A live website where individuals can test their typing speed, and optionally log in to compare their high scores with other players. This project utilises latest and upcoming technologies like NextJS for server-side rendering; TypeScript for type-checking; MongoDB and Mongoose for storage; MaterialUI for styling; NextAuthJS and OAuth 2.0 for authentication."
                     liveLink='https://type-io-ashen.vercel.app/'
                     sourceLink='https://github.com/hzk2021/type.io'/>

        <ProjectItem icon={icons[Icons.AndroidStudio]} 
                     name="OnlyPlants" 
                     tipLabel='[Plant Recognition & Language Translation] Click to find out more!'
                     pcImgSrc={OnlyPlantsAWSArchitectureImg}
                     mobileImgSrc={OnlyPlantsMobileImg}
                     techIcons={[icons[Icons.AWS], icons[Icons.Kotlin]]}
                     description="Developed features for a mobile application that allows plant enthusiasts to identify various plants species, access relevant information, and language translation. Led the team in utilising Amazon Web Services such as Rekognition, S3, Lambda, API Gateway, etc. to build the core architecture."
                     liveLink='https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ECP%20Week8%20Architecture#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1o1LIymYpuHoLy6Fg6cbqemQbc39vOUwj%26export%3Ddownload'
                     sourceLink='https://github.com/hzk2021/OnlyPlants'/>

        <ProjectItem icon={icons[Icons.Vite]} 
                     name="Portfolio v2" 
                     tipLabel='[My New Portfolio] Click to find out more!'
                     pcImgSrc={portfoliov2Img}
                     mobileImgSrc={portfoliov2MobileImg}
                     techIcons={[icons[Icons.Vite], icons[Icons.React], icons[Icons.TypeScript], icons[Icons.ESLint]]}
                     description="A revamped version of my previous portfolio. The idea behind it is to come up with a sleeker design with smoother animations while still looking minimalistic. It utilises the new bundling tool, Vite, for a more enjoyable development; React, TypeScript and ChakraUI framework"
                     liveLink='https://hzk2021.github.io/portfoliov2'
                     sourceLink='https://github.com/hzk2021/portfoliov2'/>

        <ProjectItem icon={icons[Icons.GoogleFit]} 
                     name="MyFitElderly" 
                     tipLabel='[Full Stack Health & Fitness App] Click to find out more!'
                     pcImgSrc={myFitElderlyImg}
                     mobileImgSrc={myFitElderlyMobileImg}
                     techIcons={[icons[Icons.ASPNet], icons[Icons.CSharp], icons[Icons.MySQL]]}
                     description="A fullstack web-based health & fitness tracking app. I developed a comprehensive Survey Management System (similar to Google Forms) and a Web Analytics Dashboard. Implemented using technologies such as C#, Entity Framework and MySQL."
                     sourceLink='https://github.com/hzk2021/MyFitElderly'/>

        <ProjectItem icon={icons[Icons.Pokemon]} 
                     name="Memory Game" 
                     tipLabel='[Pokemon Memory] Click to find out more!'
                     pcImgSrc={memoryImg}
                     mobileImgSrc={memoryMobileImg}
                     techIcons={[icons[Icons.React], icons[Icons.Webpack], icons[Icons.Bootstrap], icons[Icons.Babel]]}
                     description="A game that tests your memory whereby you try not to select the same pokemon more than once. It saves your best score, and the game ends when you have selected every Pokemon once."
                     liveLink='https://hzk2021.github.io/react-memory-game'
                     sourceLink='https://github.com/hzk2021/react-memory-game'/>

        <ProjectItem icon={icons[Icons.React]} 
                     name="Portfolio v1" 
                     tipLabel='[My Previous Portfolio] Click to find out more!'
                     pcImgSrc={portfolioImg}
                     mobileImgSrc={portfolioMobileImg}
                     techIcons={[icons[Icons.React], icons[Icons.TypeScript], icons[Icons.Tailwind]]}
                     description="A fully responsive website. Built with React, TypeScript, Tailwind CSS, Webpack, Babel, and initialised using Create React App. It includes animations such as particle text, smooth scrolling, and custom button animations using the Framer Motion library."
                     liveLink='https://hzk2021.github.io/portfolio'
                     sourceLink='https://github.com/hzk2021/portfolio'/>

        <ProjectItem icon={icons[Icons.TacoBell]} 
                     name="Lost and Found" 
                     tipLabel='[Lost & Found Services] Click to find out more!'
                     pcImgSrc={lostAndFoundImg}
                     mobileImgSrc={lostAndFoundMobileImg}
                     techIcons={[icons[Icons.ExpressJS], icons[Icons.SequelizeORM], icons[Icons.AWS], icons[Icons.Pug]]}
                     description="A quick lost and found website for Polytechnic students to file and retrieve lost items. Hosted and and stored on AWS' EC2 & RDS, and newly reported items are notified to subscribers upon upload. Services utilised include ExpressJS, Sequelize, AWS and Pug."
                     sourceLink='https://github.com/hzk2021/Lost-and-Found'/>

        <ProjectItem icon={icons[Icons.SpringSecurity]} 
                     name="SITConnect" 
                     tipLabel='[Threat Detection & Mitigation] Click to find out more!t'
                     pcImgSrc={SITConnectImg}
                     mobileImgSrc={SITConnectMobileImg}
                     techIcons={[icons[Icons.ASPNet], icons[Icons.reCAPTCHAGoogle], icons[Icons.CSharp], icons[Icons.MySQL]]}
                     description=".NET application that identifies threats and implements mitigation methods for common vulnerabilities, specifically those in the OWASP Top 10 & MITRE. Technologies employed include reCAPTCHA, Regex, SQL and Cryptography."
                     sourceLink='https://github.com/hzk2021/204304Z_SITConnect'/>


        <ProjectItem icon={icons[Icons.ResumeCV]} 
                     name="CV Creator" 
                     tipLabel='[CV Creation] Click to find out more!'
                     pcImgSrc={cvImg}
                     mobileImgSrc={cvMobileImg}
                     techIcons={[icons[Icons.CRA], icons[Icons.Tailwind]]}
                     description="A React app that allows users to create a customised résumé by displaying a live preview of the copy, and optionally download it in PDF format."
                     liveLink='https://hzk2021.github.io/cv-creator'
                     sourceLink='https://github.com/hzk2021/cv-creator'/>

       <ProjectItem icon={icons[Icons.Discord]} 
                     name="Discord Bot" 
                     tipLabel='[Automation Discord Bot] Click to find out more!'
                     pcImgSrc={discordBotImg}
                     techIcons={[icons[Icons.Discord], icons[Icons.JavaScript], icons[Icons.Heroku]]}
                     description="An automated Discord bot that assists customers and filters profanities. Currently serving 800+ members. Built using the Discord API and JavaScript. Hosted on Heroku (free tier)" />

       <ProjectItem icon={icons[Icons.TicTacToe]} 
                     name="Tic Tac Toe" 
                     tipLabel='[Classic Tic Tac Toe] Click to find out more!'
                     pcImgSrc={ticTacToeImg}
                     mobileImgSrc={ticTacToeMobileImg}
                     techIcons={[icons[Icons.HTML], icons[Icons.CSS], icons[Icons.JavaScript]]}
                     description="Your classic childhood game made using vanilla HTML, CSS and JavaScript."
                     liveLink='https://hzk2021.github.io/Tic-Tac-Toe'
                     sourceLink='https://github.com/hzk2021/Tic-Tac-Toe'/>

       <ProjectItem icon={icons[Icons.Python]} 
                     name="Python Web App" 
                     tipLabel='[ATRiX Inspired Python Web App] Click to find out more!'
                     pcImgSrc={atrixWebImg}
                     techIcons={[icons[Icons.Python], icons[Icons.Flask]]}
                     description="First full-stack project. Inspired by ATRiX, this is an e-commerce platform for the easy purchase of PC products during the 2019 pandemic. Technologies used include Python, Flask, WTForms, etc."
                     liveLink='https://docs.google.com/presentation/d/1GjJ8igzYsfatl32DVFwEgQmmRV8eC4wfsaLQCL3-Kaw/edit'
                     sourceLink='https://github.com/hzk2021/Python-Web-App'/>

        <ProjectItem icon={icons[Icons.UIPath]} 
                     name="Minfluencer" 
                     tipLabel='[Task Automation Bot] Click to find out more!'
                     pcImgSrc={MinfluencerImg}
                     mobileImgSrc={MinfluencerEmailMobileImg}
                     techIcons={[icons[Icons.UIPath], icons[Icons.Outlook]]}
                     description="A RPA robot programmed in UIPath that systematically extracts and scrapes customers' records from a website, which will be stored in a data bank using a web form. Using the same set of data, it sends promotional emails to customers."
                     sourceLink='https://github.com/hzk2021/RPA_Minfluencer'/>


        <ProjectItem icon={icons[Icons.Shopify]} 
                     name="Shopping Site" 
                     tipLabel='[Frontend-Only Shopping Site] Click to find out more!'
                     pcImgSrc={shoppingImg}
                     mobileImgSrc={shoppingMobileImg}
                     techIcons={[icons[Icons.JavaScript], icons[Icons.Webpack], icons[Icons.Babel], icons[Icons.Bootstrap]]}
                     description="A simple frontend-only clothing store with a shopping cart. Data is retrieved directly from the Fake Store API, and styled using the Bootstrap CSS Library."
                     liveLink='https://hzk2021.github.io/neat-shopping'
                     sourceLink='https://github.com/hzk2021/neat-shopping'/>

        <ProjectItem icon={icons[Icons.GoogleSheets]} 
                     name="Todo List" 
                     tipLabel='[Todo List] Click to find out more!'
                     pcImgSrc={todoListImg}
                     mobileImgSrc={todoListMobileImg}
                     techIcons={[icons[Icons.SASS], icons[Icons.HTML], icons[Icons.CSS], icons[Icons.Babel]]}
                     description="A simple todo list application where users can manage their TODO's according to the current day and week."
                     liveLink='https://hzk2021.github.io/Todo-List'
                     sourceLink='https://github.com/hzk2021/Todo-List'/>

       <ProjectItem icon={icons[Icons.CSS]} 
                     name="Restaurant CSS"
                     tipLabel='[Static Restaurant Website] Click to find out more!'
                     pcImgSrc={restaurantMenuImg}
                     mobileImgSrc={restaurantMenuMobileImg}
                     techIcons={[icons[Icons.Webpack], icons[Icons.Babel], icons[Icons.HTML], icons[Icons.CSS]]}
                     description="Created this static sushi restaurant website as a practise when learning I first started learning Webpack and Babel."
                     liveLink='https://hzk2021.github.io/SushiRestaurant/'
                     sourceLink='https://github.com/hzk2021/SushiRestaurant/'/>


    </SimpleGrid>
  )
}

export default Projects