import * as React from 'react'
import Box from '../box'
import SkillLevel from '../skill-level'
import type { Score } from '../skill-level'

interface Skill {
  title: string
  level: Score
}

interface IProps {
  skills?: Skill[]
}

const Board = (props: IProps): JSX.Element => {
  return (
    <Box size="large">
      {props.skills?.map((skill, i) => (
        <SkillLevel key={i} label={skill.title} level={skill.level} />
      ))}
    </Box>
  )
}

export default Board
