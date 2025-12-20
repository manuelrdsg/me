import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { Post, PostMetadata } from 'models/PostModel'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      metadata: matterResult.data as PostMetadata,
    }
  })
  // Sort posts by date
  return allPostsData.sort((articleA, articleB) => {
    if (articleA.metadata.date < articleB.metadata.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

function validatePostId(id: string): boolean {
  return /^[a-zA-Z0-9_-]+$/.test(id) && !id.includes('..') && !path.isAbsolute(id)
}

export async function getPostData(id: string): Promise<Post> {
  if (!validatePostId(id)) {
    throw new Error('Invalid post ID')
  }

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const resolvedPath = path.resolve(fullPath)
  const resolvedPostsDir = path.resolve(postsDirectory)
  
  if (!resolvedPath.startsWith(resolvedPostsDir)) {
    throw new Error('Invalid post path')
  }

  // Check if file exists before reading
  if (!fs.existsSync(fullPath)) {
    throw new Error('Post not found')
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id and contentHtml
  return {
    id,
    body: matterResult.content,
    metadata: matterResult.data as PostMetadata,
  }
}
