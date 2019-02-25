import React from 'react'
import '../global_css/comment_css/styles.css'

const date = (d) => {
  return new Date(d).toLocaleDateString()
}

class Comments extends React.Component {
  render() {
    const commentList = this.props.comments.map((comment, id) => {
      return (
        <div className="posted__comments" key={id}>
          <div className="name__container">
            <div className="profile"></div>
            <div className="user__info">
              <p className="name">{comment.name}</p>
              <p className="date">{date(comment.timestamp)}</p>
              <p className="comment">{comment.comment}</p> 
            </div>
          </div>  
        </div>
      )
    })
    return (
      <div className="posted__section">
        {commentList}
      </div>
    )
  }
}

export default Comments