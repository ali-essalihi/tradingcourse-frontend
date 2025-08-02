import type { VideoItem, CourseRes } from "../types/course";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { baseKy } from "../api";

interface ContextValue {
  videos: VideoItem[];
  totalVideos: number;
  totalSeconds: number;
  findVideo: (videoId: string) => null | {
    video: VideoItem;
    prev: VideoItem | null;
    next: VideoItem | null;
  };
}

const CourseContext = createContext<ContextValue>({
  videos: [],
  totalVideos: 0,
  totalSeconds: 0,
  findVideo: () => null
});

const freeVideos: (VideoItem & { isFree: true })[] = [
  {
    id: "An1ZrG0mbf4", // Youtube Video ID
    title: "SHINRA TENSEI Pain Destroys Konohagakure",
    durationInSeconds: 64,
    isFree: true
  }
];

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [videos, setVideos] = useState<ContextValue["videos"]>(freeVideos);

  useEffect(() => {
    baseKy
      .get<CourseRes>("course")
      .json()
      .then(data =>
        setVideos(prev => [...prev, ...data.videos.map(v => ({ ...v, isFree: false }))])
      );
  }, []);

  const findVideo: ContextValue["findVideo"] = useCallback(
    videoId => {
      const indx = videos.findIndex(v => v.id === videoId);
      if (indx === -1) {
        return null;
      }
      return {
        video: videos[indx],
        prev: videos[indx - 1] || null,
        next: videos[indx + 1] || null
      };
    },
    [videos]
  );

  const value = useMemo<ContextValue>(() => {
    return {
      videos,
      totalVideos: videos.length,
      totalSeconds: videos.reduce((acc, v) => acc + v.durationInSeconds, 0),
      findVideo
    };
  }, [videos, findVideo]);

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export const useCourse = () => useContext(CourseContext);
