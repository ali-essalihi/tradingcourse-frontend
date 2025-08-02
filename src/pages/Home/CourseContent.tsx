import type { VideoItem } from "../../types/course";
import { Play, Lock, Clock, Video } from "lucide-react";
import { useCourse } from "../../contexts/course";
import { formatVideoDuration } from "../../utils/format";
import { useState } from "react";

function VideoListItem({ video, order }: { video: VideoItem; order: number }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 rounded-xl p-4 transition-all duration-300 hover:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex-grow space-y-2">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-purple-400">#{order}</span>
            {video.isFree && (
              <span className="bg-green-500 text-white px-2 py-1 ml-2 rounded-full text-xs font-medium">
                FREE
              </span>
            )}
          </div>
          <h4 className="text-white font-medium text-lg">{video.title}</h4>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{formatVideoDuration(video.durationInSeconds)}</span>
          </div>
        </div>
        <div className="shrink-0 ml-4">
          {video.isFree ? (
            <button className="select-none flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              <Play size={16} />
              <span className="hidden ml-2 md:inline">Start</span>
            </button>
          ) : (
            <div className="select-none bg-gray-700 text-gray-400 px-6 py-2 rounded-lg flex items-center">
              <Lock size={16} />
              <span className="hidden ml-2 md:inline">Locked</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CourseContent() {
  const [showAll, setShowAll] = useState(false);
  const limit = 5;
  const course = useCourse();

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Course Content
            </span>
          </h2>
          <div className="flex items-center justify-center flex-wrap text-gray-300 mb-8">
            <div className="flex items-center space-x-2 mr-8 mb-2">
              <Video className="text-purple-400" />
              <span className="text-lg font-medium">{course.totalVideos} Videos</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="text-purple-400" />
              <span className="text-lg font-medium">
                {Math.floor(course.totalSeconds / 3600)}h{" "}
                {Math.floor((course.totalSeconds % 3600) / 60)}m Total
              </span>
            </div>
          </div>
        </div>
        <ul className="space-y-3">
          {course.videos.map((video, indx) => (
            <li key={video.id} hidden={!showAll && indx + 1 > limit}>
              <VideoListItem video={video} order={indx + 1} />
            </li>
          ))}
        </ul>
        {course.totalVideos > limit && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(b => !b)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
