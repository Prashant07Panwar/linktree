"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import Link from "next/link";

// export default function Home() {
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <HomePage />
//     </Suspense>
//   );
// }

function HomePage() {
  const [handlename, setHandlename] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    router.push(`/${data.handle}`);
  };

  const redirect = () => {
    if (handlename.trim()) {
      router.push(`/generate?handle=${handlename}`);
    } else {
      toast.error("Please enter a handle!");
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className="flex flex-col justify-center ml-[10vw] mt-16 gap-2">
          <p className="text-yellow-300 font-bold text-5xl">Everything you</p>
          <p className="text-yellow-300 font-bold text-5xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-5xl">simple link in bio.</p>
          <p className="text-yellow-300 text-xl my-4">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate, and sell from your Instagram, TikTok, Twitter, YouTube, and other social media profiles.
          </p>

          {/* Input and Button */}
          <div className="input flex flex-col mt-4 gap-y-4">
            <div className="flex gap-2">
              <input
                value={handlename}
                onChange={(e) => setHandlename(e.target.value)}
                className="px-2 py-2 font-semibold focus:outline-green-800 rounded-md shadow-md hover:shadow-lg"
                type="text"
                placeholder="Enter your Handle"
              />
              <button
                onClick={redirect}
                className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-4 font-semibold shadow-md hover:shadow-lg"
              >
                Claim your Bittree
              </button>
            </div>

            {/* Form for Logged-in Users */}
            {session && (
              <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                <input
                  {...register("handle", {
                    required: { value: true, message: "Please enter your handle" },
                  })}
                  className="px-2 py-2 font-semibold focus:outline-green-800 rounded-md shadow-md hover:shadow-lg"
                  type="text"
                  placeholder="Enter Handle"
                />
                {errors.handle && <span className="text-lg text-black font-semibold">{errors.handle.message}</span>}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-4 font-semibold shadow-md hover:shadow-lg"
                >
                  Go to your handle
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex items-end justify-center flex-col mr-[10vw] mt-16">
          <Image className="pt-8 img1 relative z-1" src="/home.png" alt="Home" width={500} height={500} />
        </div>
      </section>

      {/* Share Section */}
      <section className="bg-[#7A0016] min-h-screen grid grid-cols-2">
        <div className="flex flex-col gap-2 items-start justify-center ml-[10vw]">
          <p className="text-5xl font-bold text-[#E9C0E8]">Share your Linktree</p>
          <p className="text-5xl font-bold text-[#E9C0E8]">from your Instagram,</p>
          <p className="text-5xl font-bold text-[#E9C0E8]">TikTok, Twitter, and</p>
          <p className="text-5xl font-bold text-[#E9C0E8]">other bios</p>
          <div className="my-4">
            <p className="text-xl text-[#E9C0E8]">Add your unique Linktree URL to all the platforms where you find your audience.</p>
            <p className="text-xl text-[#E9C0E8]">Then use your QR code to drive your offline traffic online.</p>
          </div>
        </div>
        <div className="flex justify-center flex-col mr-[10vw] mt-16">
          <Image src="/lt.png" className="img2" alt="Linktree" width={500} height={500} />
        </div>
      </section>

      {/* Good Company Section */}
      <section className="min-h-screen grid grid-cols-2 bg-[#e9c0e9]">
        <div className="mt-28 pt-14 ml-16 flex justify-end animate-bounce">
          <Image src="/layout.jpg" alt="Layout" width={500} height={500} />
        </div>
        <div className="flex flex-col mx-8 justify-center items-start mr-[10vw]">
          <p className="text-7xl font-extrabold text-[#502274]">Good company</p>
          <p className="text-[#502274] pt-8 font-semibold text-lg">Sign up for the same link-in-bio tool that 50M+ of your favorite creators, musicians, influencers, and brands use to keep growing.</p>
          <Link href="/signup" className="bg-[#502274] rounded-full text-lg py-2 px-16 my-12 text-white font-semibold">
            Sign up for free
          </Link>
        </div>
      </section>

      {/* Toast Notifications */}
      <ToastContainer />
    </main>
  );
}

export default HomePage;