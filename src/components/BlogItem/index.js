import './index.css'

const BlogItem = ({blogDetails}) => {
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-header">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
