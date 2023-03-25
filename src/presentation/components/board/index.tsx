import * as React from 'react'
import Box from '../box'
import SkillLevel from '../skill-level'
import { type Skill } from '@/domain/models/profile-data-model'

interface IProps {
  skills?: Skill[]
}

const Board = (props: IProps): JSX.Element => {
  return (
    <Box size="large">
      {props.skills?.map((skill, i) => (
        <SkillLevel key={i} label={skill.title} score={skill.score} />
      ))}
    </Box>
  )
}

export default Board
