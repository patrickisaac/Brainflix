import React from 'react'
import '../global_css/comment_css/styles.css'

const comments = [
  {
    name: "Michael Jordan",
    timestamp: "02/23/2019",
    comment: "This is a comment",
    id: 123
  },
  {
    name: "Kobe Bryant",
    timestamp: "02/08/2019",
    comment: "This is another comment",
    id: 321
  },
  {
    name: "Vince Carter",
    timestamp: "01/15/2019",
    comment: "This is one last comment",
    id: 132
  }
]


class Comments extends React.Component {
  render() {
    const commentList = comments.map((comment, id) => {
      return (
        <div className="posted__comments" key={id}>
          <div className="name__container">
            <div className="profile"></div>
            <div className="user__info">
              <p className="name">{comment.name}</p>
              <p className="date">{comment.timestamp}</p>
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