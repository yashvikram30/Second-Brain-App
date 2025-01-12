import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { Brain, PenTool, Search, Share2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="#">
          <Brain className="h-6 w-6 mr-2" />
          <span className="font-bold">SecondBrain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            Blog
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 bg-gray-800 text-white rounded-md px-2 py-1"
            to={localStorage.getItem("token")?"/dashboard":"/signin"}
          >
            Signin
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Second Brain, Organized
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Capture, organize, and retrieve your thoughts effortlessly.
                  Boost your productivity and creativity with SecondBrain.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  to="/Signup"
                  className="bg-gray-800 text-white font-bold px-8 py-2 rounded-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-center">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <PenTool className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Easy Note-Taking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Quickly capture your thoughts with our intuitive interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Search className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Powerful Search</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Find any piece of information in seconds with our advanced
                  search.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Share2 className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Easy Sharing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Collaborate with others by sharing your notes and ideas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Brain className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Gain new perspectives with AI-generated connections and
                  summaries.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Organizing Your Thoughts Today
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of users who have transformed their
                  productivity with SecondBrain.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button variant="primary" text="Sign Up" size="md" />
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free 14-day trial. No credit card required.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Already have an account?
                  </span>
                  <Link
                    className="font-medium hover:underline underline-offset-4"
                    to={localStorage.getItem("token")?"/dashboard":"/signin"}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 SecondBrain Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
