import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorFallback";
import Root from "./pages/Root";
import { UserContextProvider } from "./contexts/user";
import { Toaster } from "react-hot-toast";
import { CourseProvider } from "./contexts/course";
import CourseRedirect from "./pages/Course/CourseRedirect";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AuthError = lazy(() => import("./pages/AuthError"));
const CourseLayout = lazy(() => import("./pages/Course/CourseLayout"));
const CourseVideo = lazy(() => import("./pages/Course/CourseVideo"));

function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-purple-500 leading-none">
        <ClipLoader size={48} color="inherit" speedMultiplier={0.5} />
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <UserContextProvider>
          <CourseProvider>
            <Toaster position="top-center" />
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Root />}>
                  <Route index element={<Home />} />
                  <Route path="course" element={<CourseLayout />}>
                    <Route index element={<CourseRedirect />} />
                    <Route path=":id" element={<CourseVideo />} />
                  </Route>
                  <Route path="error/auth_failed" element={<AuthError />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </CourseProvider>
        </UserContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
