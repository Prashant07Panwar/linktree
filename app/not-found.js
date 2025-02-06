"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">Page Not Found</p>
        <Link href="/">
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md">
            Go Home
          </button>
        </Link>
      </div>
    </Suspense>
  );
};

export default NotFoundPage;
