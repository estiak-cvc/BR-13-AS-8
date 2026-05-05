import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.vexels.com/media/users/3/197715/raw/11cacd38d67e910a70b66534f911a4a2-online-courses-slider-template.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
             SkillSphere – Online Learning Platform
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Enroll Now
              </Button>
            </Link>

            <Link href="/Courses">
              <Button variant="outline" className="text-white">
                View Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;