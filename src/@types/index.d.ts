export interface DescriptionJob {
  type: 'paragraph'
  text: string[]
}

export interface ListJob {
  type: 'list'
  text: string[]
}

export interface SocialMedia {
  github: string
  linkedin: string
}

export interface Project {
  title: string
  isFeatured: boolean
  thumbnail: string
  githubUrl: string
  liveUrl: string
}

export interface Job {
  name: string
  startDate: string
  endDate: string
  link?: string
  description: Array<DescriptionJob | ListJob>
  technologies: string[]
}

export interface Experience {
  name: string
  location: string
  job: Job[]
}

export interface Info {
  name: string
  aboutMeShort: string
  aboutMe: string[]
  professionalExp: Experience[]
  academicExp: Experience[]
  socialMedia: SocialMedia
  projects: Project[]
}
