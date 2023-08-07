import { Grid } from '@chakra-ui/react'
import React from 'react'
import { Icons } from '../../enums/Icons'
import { icons } from '../Misc/icons'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(200px, 1fr))' columnGap={20} rowGap={10} w={"100%"}>
        <ProjectItem icon={icons[Icons.React]} bgColour="#"/>
        <ProjectItem icon={icons[Icons.dotNET]} bgColour="#green"/>
        <ProjectItem icon={icons[Icons.AlibabaCloud]} bgColour="#green"/>
        <ProjectItem icon={icons[Icons.AlibabaCloud]} bgColour="#green"/>
        <ProjectItem icon={icons[Icons.AlibabaCloud]} bgColour="#green"/>
        <ProjectItem icon={icons[Icons.AlibabaCloud]} bgColour="#green"/>
        <ProjectItem icon={icons[Icons.AlibabaCloud]} bgColour="#green"/>
        <ProjectItem icon={icons[Icons.AlibabaCloud]} bgColour="#green"/>
    </Grid>
  )
}

export default Projects