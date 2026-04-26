import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Card = ({ note }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteNote = async () => {
    try {
      setLoading(true);

      await axios.delete(`http://localhost:5001/api/notes/${note._id}`);

      console.log("Note deleted successfully");

      // NOTE: UI update should be handled in parent later
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
        {note.title}
      </h3>

      {/* Content */}
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{note.content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {note.createdAt || "Just now"}
        </span>

        <div className="flex items-center gap-2">
          <Link
            to={`/note/update/${note._id}`}
            className="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
          >
            Edit
          </Link>

          <button
            onClick={handleDeleteNote}
            disabled={loading}
            className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
