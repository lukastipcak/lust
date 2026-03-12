import { PROJECTS } from '../constants/constant'
import { Project } from '../types'

export const getLatestPracticeProjects = (n = 3): Project[] => {
    return PROJECTS.practice.items.slice(0, n)
}
