import { Tabs, TabList, Spacer } from '@chakra-ui/react';
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
        <Tabs role={'navigation'}
              position={"relative"}
              left={0}
              height={"100vh"} 
              orientation="vertical" 
              border={0}
              align='center' 
              backgroundColor={"#181818"}>

            <TabList display={"flex"}>
                <div>
                  <ProfileIcon />
                </div>
                <Spacer />
                <div>
                  <SidebarTab content={<AiFillHome size={25}/>} 
                              text="Home" 
                              active={tab?.tab === TabsEnum.Home} 
                              onClick={() => tab?.setTab(TabsEnum.Home)}/>
                  <SidebarTab content={<BiSolidUser size={25}/>} 
                              text="About" 
                              active={tab?.tab === TabsEnum.About}
                              onClick={() => tab?.setTab(TabsEnum.About)}/>
                  <SidebarTab content={<BsCodeSlash size={25}/>} 
                              text="Skills" 
                              active={tab?.tab === TabsEnum.Skills}
                              onClick={() => tab?.setTab(TabsEnum.Skills)}/>
                  <SidebarTab content={<BsFillBriefcaseFill size={25}/>} 
                              text="Projects" 
                              active={tab?.tab === TabsEnum.Projects}
                              onClick={() => tab?.setTab(TabsEnum.Projects)}/>
                  <SidebarTab content={<AiFillIdcard size={25}/>} 
                              text="Contact" 
                              active={tab?.tab === TabsEnum.Contact}
                              onClick={() => tab?.setTab(TabsEnum.Contact)}/>

                </div>
                <Spacer />
                <div>
                  <SidebarTab content={<AiFillGithub size={25}/>} 
                              text="GitHub" 
                              active={false}
                              onClick={() => {goToUrl(GITHUB_URL)}}/>
                  <SidebarTab content={<AiFillLinkedin size={25}/>} 
                              text="LinkedIn" 
                              active={false}
                              onClick={() => {goToUrl(LINKEDIN_URL)}}/>
                </div>
            </TabList>
            
        </Tabs>
    </nav>
  )
}

export default Sidebar