import BlogItem from '../BlogItem'
import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups.',
    publishedDate: 'Jan 10th 2024',
  },
  {
    id: 2,
    title: 'My second post',
    description: 'Learn how to use React efficiently in large-scale projects.',
    publishedDate: 'Jan 15th 2024',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A beginner-friendly guide to mastering Node.js.',
    publishedDate: 'Jan 20th 2024',
  },
  {
    id: 4,
    title: 'JavaScript Patterns',
    description:
      'Discover powerful design patterns for building robust applications.',
    publishedDate: 'Jan 25th 2024',
  },
  {
    id: 5,
    title: 'Frontend Frameworks',
    description: 'Compare and choose the best framework for your project.',
    publishedDate: 'Jan 30th 2024',
  },
]

const BlogList = () => (
  <ul className="blog-list">
    {blogsList.map(blog => (
      <BlogItem key={blog.id} blogDetails={blog} />
    ))}
  </ul>
)

export default BlogList
