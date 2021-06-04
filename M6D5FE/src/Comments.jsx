import { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <>
        {this.props.showComments && (
          <ul>
            {this.props.comments.map((comment) => (
              <li key={comment._id}>
                <p>{comment.text}</p>
                <p>rate:{comment.rate}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Comment;
