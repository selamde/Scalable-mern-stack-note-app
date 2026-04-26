const NoteForm = ({
  title,
  content,
  setTitle,
  setContent,
  onSubmit,
  loading,
  buttonText,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        className="px-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Loading..." : buttonText}
      </button>
    </form>
  );
};

export default NoteForm;
