import { useSearchParams } from "react-router-dom";
import useVideoData from "../hooks/getVideoComment";
import CommentsList from "./CommentsList";

const CommentContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const { comments, setComments, loading } = useVideoData(videoId);

  if (loading) return <p className="mt-4">Loading comments...</p>;

  if (!comments || !Array.isArray(comments)) {
    return <p className="mt-4">No comments available.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">
        {comments.length} Comments
      </h2>
      <CommentsList comments={comments} setComments={setComments} />
    </div>
  );
};

export default CommentContainer;
