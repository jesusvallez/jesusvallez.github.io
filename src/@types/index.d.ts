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
  email: string
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
  description: Array<DescriptionJob | ListJob>
}

export interface Experience {
  name: string
  location: string
  job: Job[]
}
export interface Experiences {
  [key: string]: Experience[]
}

export interface Info {
  name: string
  jobDescription: string
  aboutMeShort: string
  aboutMe: string[]
  experience: Experiences
  socialMedia: SocialMedia
  projects: Project[]
}
