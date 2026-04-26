import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import NoteForm from "../components/Noteform";

const CreateNotePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) return;

    try {
      setLoading(true);

      // backend logic later
      await axios.post("http://localhost:5001/api/notes", {
        title,
        content,
      });

      console.log("Note created");

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Create Note</h1>
        <p className="text-sm text-gray-500 mb-6">
          Write down your thoughts and ideas
        </p>

        {/* Form */}
        <NoteForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          onSubmit={handleSubmit}
          loading={loading}
          buttonText="Create Note"
        />
      </div>
    </div>
  );
};

export default CreateNotePage;
