import { SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Icons } from '../../enums/Icons'
import { icons } from '../Misc/icons'
import ProjectItem from './ProjectItem'
import CarrySharp from "../../assets/projects_images/CarrySharp.png"
import CvAppPC from "../../assets/projects_images/cv-app.png"
import CvAppMobile from "../../assets/projects_images/cv-app-mobile.png"

function Projects() {
  return (
    <SimpleGrid as={motion.div}
          initial={{scale: 0.5}}
          animate={{scale: 1}}
          columns={{base: 2, sm: 2, md:3, lg: 4}}
          spacing={10}
          w="100%"
          justifyItems='center'> 
        <ProjectItem icon={icons[Icons.CSharp]} 
                     name="External Game Trainer" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CarrySharp}
                     techIcons={[icons[Icons.CSharp], icons[Icons.Firebase], icons[Icons.reCAPTCHAGoogle], icons[Icons.MetroUI]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>

        <ProjectItem icon={icons[Icons.React]} 
                     name="React" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CvAppPC}
                     mobileImgSrc={CvAppMobile}
                     techIcons={[icons[Icons.React], icons[Icons.NextJS]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>

        <ProjectItem icon={icons[Icons.React]} 
                     name="React" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CvAppPC}
                     mobileImgSrc={CvAppMobile}
                     techIcons={[icons[Icons.React], icons[Icons.NextJS]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>

        <ProjectItem icon={icons[Icons.React]} 
                     name="React" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CvAppPC}
                     mobileImgSrc={CvAppMobile}
                     techIcons={[icons[Icons.React], icons[Icons.NextJS]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>

        <ProjectItem icon={icons[Icons.React]} 
                     name="React" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CvAppPC}
                     mobileImgSrc={CvAppMobile}
                     techIcons={[icons[Icons.React], icons[Icons.NextJS]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>

        <ProjectItem icon={icons[Icons.React]} 
                     name="React" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CvAppPC}
                     mobileImgSrc={CvAppMobile}
                     techIcons={[icons[Icons.React], icons[Icons.NextJS]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>

        <ProjectItem icon={icons[Icons.React]} 
                     name="React" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CvAppPC}
                     mobileImgSrc={CvAppMobile}
                     techIcons={[icons[Icons.React], icons[Icons.NextJS]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>        <ProjectItem icon={icons[Icons.React]} 
                     name="React" 
                     tipLabel='Check Out react application I have builtbuiltbuiltbuiltbuiltbuiltbuiltbuilt'
                     pcImgSrc={CvAppPC}
                     mobileImgSrc={CvAppMobile}
                     techIcons={[icons[Icons.React], icons[Icons.NextJS]]}
                     description="An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques."
                     liveLink='https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D'
                     sourceLink='https://zhenkai.codes/#:~:text=Live%20Demo-,Source,-About%20Me'/>

    </SimpleGrid>
  )
}

export default Projects