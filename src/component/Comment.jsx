import { ThumbsUp, ThumbsDown } from "lucide-react";

const Comment = ({ comment, onReact }) => {
  const {
    id, author, profileImg, text,
    likeCount, publishedAt, liked, disliked,dislikeCount,
  } = comment;

  return (
    <div className="flex gap-3 border border-gray-200 rounded-2xl p-4">
        <img
            src={profileImg || `https://api.dicebear.com/7.x/thumbs/svg?seed=${author}`}
            onError={(e) =>
                (e.target.src = `https://api.dicebear.com/7.x/thumbs/svg?seed=${author}`)
            }
            alt="user"
            className="w-10 h-10 rounded-full"
        />


       <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500">
            {new Date(publishedAt).toLocaleString()}
            </p>
            <p className="my-1">{text}</p>
            <div className="flex items-center gap-4 mt-1">
                <button
                    onClick={() => onReact(id, "like")}
                    className={`flex items-center gap-1 ${
                    liked ? "text-blue-600 font-semibold" : ""
                    }`}
                >
                    <ThumbsUp size={16} />
                    {likeCount}
                </button>
                <button
                    onClick={() => onReact(id, "dislike")}
                    className={`flex items-center gap-1 ${
                    disliked ? "text-red-600 font-semibold" : ""
                    }`}
                >
                    <ThumbsDown size={16} />{dislikeCount}
                </button>
            </div>
        </div>
    </div>
   );
};

export default Comment;
