import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import NoteForm from "../components/Noteform";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch single note
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`);

        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.put(`http://localhost:5001/api/notes/${id}`, {
        title,
        content,
      });

      console.log("Note updated");

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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Update Note</h1>

        <NoteForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          onSubmit={handleUpdate}
          loading={loading}
          buttonText="Update Note"
        />
      </div>
    </div>
  );
};

export default UpdatePage;
