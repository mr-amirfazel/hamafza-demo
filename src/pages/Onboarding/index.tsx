import React from 'react'
import Title from '../../components/Title'
import Description from '../../components/Description'
import EducationLevel from '../../components/Onboarding/EducationLevel'

import sevenToNine from '../../assets/7-9.png'
import tenToEleven from '../../assets/10-11.png'
import twelveToThirteen from '../../assets/12-13.png'
import Bachelors from '../../assets/bachelors.png'
import Masters from '../../assets/masters.png'

type EducationLevel = {
    id: string
    image?: string,
    title: string,
    color: string
}

const Levels:EducationLevel[] =[
    {
        id: '1234',
        title: "Year 7-9",
        color: '#FDD563',
        image: sevenToNine
    }, 
    {
        id: '12345',
        title: "Year 10-11",
        color: '#8BE38B',
        image: tenToEleven
    }, {
        id: '123456',
        title: "Year 12-13",
        color: '#B3B4F7',
        image: twelveToThirteen
    }, {
        id: '12347',
        title: "Bachelors",
        color: '#C4D7FF',
        image: Bachelors
    }, {
        id: '12348',
        title: "Masters",
        color: '#E48FFF',
        image: Masters
    },
] 

const Onboarding = () => {
  return (
    <div className="h-full flex flex-col items-center justify-evenly pt-4">
        <Title>Education level</Title>
        <Description>Create a unique emotional story that describes better than words</Description>
        <div className="flex flex-col items-center gap-3 w-full">
            {Levels.map(level => <EducationLevel key={level.id} title={level.title} color={level.color} image={level.image} />)}
        </div>
        <p className="text-[#2FD1C5] font-[18px] hover:underline cursor-pointer self-end pt-2">
            skip
        </p>
    </div>
  )
}

export default Onboarding