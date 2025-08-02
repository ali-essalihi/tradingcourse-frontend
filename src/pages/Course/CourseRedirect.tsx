import { Navigate } from "react-router-dom";
import { useCourse } from "../../contexts/course";

export default function CourseRedirect() {
  const course = useCourse();

  return <Navigate to={`/course/${course.videos[0].id}`} />;
}
