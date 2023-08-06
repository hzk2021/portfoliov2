import { Spacer, Flex } from '@chakra-ui/react';
import SidebarTab from './SidebarTab';
import {AiFillGithub, AiFillLinkedin, AiFillHome, AiFillIdcard} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {BsCodeSlash, BsFillBriefcaseFill} from 'react-icons/bs'
import TabContext from '../../contexts/TabContext';
import { useContext } from 'react';
import TabsEnum from '../../enums/Tabs';
import ProfileIcon from './ProfileIcon';

const GITHUB_URL = 'https://www.github.com/hzk2021';
const LINKEDIN_URL = 'https://www.linkedin.com/in/he-zhenkai-7b3684218/';

function goToUrl(url : string) {
  window.open(url, '_blank')?.focus();
}

function Sidebar() {
  const tab = useContext(TabContext);

  return (
    <nav>
        <Flex role={'navigation'}
              position={"relative"}
              left={0}
              minHeight={"100vh"} 
              direction="column"
              border={0}
              align='center' 
              backgroundColor={"#181818"}>

              <div>
                <ProfileIcon />
              </div>

              <Spacer/>
              
              <Flex direction="column" gap={2}>
                <SidebarTab content={<AiFillHome size={25}/>} 
                            text="Home" 
                            active={tab?.tab === TabsEnum.Home} 
                            onClick={() => tab?.setTab(TabsEnum.Home)}
                            href="/"/>
                <SidebarTab content={<BiSolidUser size={25}/>} 
                            text="About" 
                            active={tab?.tab === TabsEnum.About}
                            onClick={() => tab?.setTab(TabsEnum.About)}
                            href="/about"/>
                <SidebarTab content={<BsCodeSlash size={25}/>} 
                            text="Skills" 
                            active={tab?.tab === TabsEnum.Skills}
                            onClick={() => tab?.setTab(TabsEnum.Skills)}
                            href="/skills"/>
                <SidebarTab content={<BsFillBriefcaseFill size={25}/>} 
                            text="Projects" 
                            active={tab?.tab === TabsEnum.Projects}
                            onClick={() => tab?.setTab(TabsEnum.Projects)}
                            href="/projects"/>
                <SidebarTab content={<AiFillIdcard size={25}/>} 
                            text="Contact" 
                            active={tab?.tab === TabsEnum.Contact}
                            onClick={() => tab?.setTab(TabsEnum.Contact)}
                            href="/contact"/>

              </Flex>
              
              <Spacer/>
              
              <Flex gap={2} mb={3}>
                <SidebarTab content={<AiFillGithub size={25}/>} 
                            text="GitHub" 
                            active={false}
                            onClick={() => {goToUrl(GITHUB_URL)}}/>
                <SidebarTab content={<AiFillLinkedin size={25}/>} 
                            text="LinkedIn" 
                            active={false}
                            onClick={() => {goToUrl(LINKEDIN_URL)}}/>
              </Flex>
            
        </Flex>
    </nav>
  )
}

export default Sidebar