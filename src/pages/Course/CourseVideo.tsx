import { useParams } from "react-router-dom";
import { useCourse } from "../../contexts/course";
import NotFound from "../NotFound";

export default function CourseVideo() {
  const course = useCourse();
  const { id } = useParams();
  const match = course.findVideo(id!);

  if (!match) {
    return <NotFound />;
  }

  const { video, prev, next } = match;

  return <h2>Video {JSON.stringify({ video, prev, next })}</h2>;
}
