export interface VideoItem {
  id: string;
  title: string;
  durationInSeconds: number;
  isFree: boolean;
}

export interface CourseRes {
  videos: Omit<VideoItem, "isFree">[];
}
