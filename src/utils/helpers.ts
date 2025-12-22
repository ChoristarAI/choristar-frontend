function generateChurchId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
}

export interface Church {
  id: string
  name: string
  category: string
  headquarters: string
  founder: string
  yearFounded: number
  estimatedMembership: string
}

export function createChurchEntry(church: Omit<Church, 'id'>): Church {
  return {
    id: generateChurchId(church.name),
    ...church,
  }
}
