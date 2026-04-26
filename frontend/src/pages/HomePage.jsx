import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        setNotes(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Notes</h1>
          <p className="text-sm text-gray-500">
            Organize your thoughts in one place
          </p>
        </div>

        {/* Loading */}
        {loading && <div className="text-gray-500">Loading notes...</div>}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Card key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
