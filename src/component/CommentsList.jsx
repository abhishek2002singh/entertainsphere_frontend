import Comment from "./Comment";

const CommentList = ({ comments, setComments }) => {
  const handleReact = (id, action) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id !== id) return comment;
        const isLiked = action === "like" && !comment.liked;
        const isDisLiked = action === "dislike" && !comment.disliked;

        return {
          ...comment,
          liked: action === "like" ? !comment.liked : false,
          disliked: action === "dislike" ? !comment.disliked : false,
          likeCount:
            action === "like"
              ? comment.likeCount + (isLiked ? 1 : -1)
              : comment.likeCount,
         dislikeCount:
            action === "dislike"
              ? comment.dislikeCount + (isDisLiked ? 1 : -1)
              : comment.dislikeCount,
        };
      })
    );
  };

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onReact={handleReact} />
      ))}
    </div>
  );
};

export default CommentList;
