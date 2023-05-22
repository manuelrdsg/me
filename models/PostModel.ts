export interface PostMetadata {
  title: string
  subtitle?: string
  location?: string
  date: string
}
export interface Post {
  id: string
  body: string
  metadata: PostMetadata
}
