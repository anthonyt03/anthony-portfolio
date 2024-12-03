// Timeline
const skills = [
  {
    id: 1,
    name: 'Svelte',
    image: '/svelte.webp',
  },
  {
    id: 2,
    name: 'Docker',
    image: '/docker.png',
  },
  {
    id: 3,
    name: 'JavaScript',
    image: '/js.png',
  },
  {
    id: 4,
    name: 'Shadcn',
    image: '/shadcn.png',
  },
  {
    id: 5,
    name: 'Skeleton',
    image: '/skeleton.png',
  },
  {
    id: 6,
    name: 'React',
    image: '/react.png',
  },
  {
    id: 7,
    name: 'MaterialUI',
    image: '/mui.png',
  },
  {
    id: 8,
    name: 'CesiumJS',
    image: '/cesium.png',
  },
  {
    id: 9,
    name: 'SpringBoot',
    image: '/springboot.png',
  },
]
const getSkill = (name: string) => {
  const matchingSkill = skills.find(skill => skill.name === name)
  return matchingSkill
}
export const constructSkillItems = (
  names: string[],
): { id: number; name: string; image: string }[] => {
  return names
    .map(name => getSkill(name))
    .filter(
      (skill): skill is { id: number; name: string; image: string } =>
        skill !== undefined,
    )
}

// NavBar
export const navItems = [
  {
    name: 'Home',
    link: '',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Projects',
    link: 'projects',
  },
]
