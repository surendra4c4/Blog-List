// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-item">
      <BlogItem
        itemTitle={title}
        date={publishedDate}
        itemDescription={description}
      />
    </li>
  )
}

export default BlogList
