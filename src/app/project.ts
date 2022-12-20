export interface Project {
    id: number,
    name: string,
    description: string,
    images: Image[]
}

export interface Image {
    name: string,
    altText: string
}

export interface AboutImage {
    id: number,
    name: string
  }