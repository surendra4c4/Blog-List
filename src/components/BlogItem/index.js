// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemTitle, date, itemDescription} = props
  return (
    <>
      <div className="name-date-container">
        <h1 className="title">{itemTitle}</h1>
        <p className="date">{date}</p>
      </div>
      <p className="description">{itemDescription}</p>
      <hr />
    </>
  )
}

export default BlogItem
