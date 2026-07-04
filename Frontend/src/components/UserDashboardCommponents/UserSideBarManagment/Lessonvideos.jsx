import { useOutletContext } from "react-router-dom";

function Lessonvideos() {
  const { selectedLesson } = useOutletContext();

  const getEmbedUrl = (url) => {
    if (!url) return "";

    if (url.includes("youtu.be")) {
      const videoId = url.split("/").pop().split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("watch?v=")) {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  };

  if (!selectedLesson) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2>Select a lesson</h2>
      </div>
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        {selectedLesson.lesson_name}
      </h1>

      <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
            src={getEmbedUrl(selectedLesson.video_url)}
            title={selectedLesson.lesson_name}
            className="w-full h-130"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
      </div>

    </div>
  );
}

export default Lessonvideos;