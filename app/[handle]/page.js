import React from 'react';
import Link from 'next/link';
import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';

const Handle = async ({ params }) => {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = await db.collection("bittrees");
  const item = await collection.findOne({ handle: handle });

  if (!item) {
    return notFound();
  }

  return (
    <div className='flex flex-col min-h-[150vh] bg-gradient-to-l from-amber-100 to-amber-200 filter opacity-95 items-center py-4'>
      {item && (
        <div className="photo flex flex-col items-center justify-center gap-4 w-2/3">
          {item.Piclink !== "" ? (
            <img
              src={item.Piclink}
              className='w-[10vw] h-[18vh] px-4 py-4 rounded-full object-contain'
              alt="photo"
            />
          ) : (
            <img
              src="/default.png"
              className='w-[10vw] h-[18vh] px-4 py-4 rounded-full object-contain'
              alt="Profile photo"
            />
          )}
          <div className='flex flex-col justify-center items-center w-full'>
            <p className='text-2xl font-bold'>@{item.handle}</p>
            <p className='desc text-lg text-center font-semibold'>{item.desc}</p>
          </div>
          <div className="links w-[70%]">
            {item.links.map((link, index) => (
              <Link
                key={index}
                href={link.link.startsWith("http") ? link.link : `https://${link.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className='bg-purple-100 font-semibold py-4 shadow-lg px-2 flex justify-center rounded-md my-3 bg-gradient-to-r from-violet-200 to-violet-500'>
                  {link.linktext || "No Text Provided"}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className='flex flex-col items-center fixed bottom-2'>
        <div className='flex items-center rounded-full px-2 buttom bg-gradient-to-r from-lime-400 to bg-green-700'>
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2023/12/linktree_logo-freelogovectors.net_.png"
            className='w-6 h-6'
            alt=""
          />
          <span className='py-2 px-2 rounded-full font-bold'>Linktree/{handle}</span>
          <Link href="/">
            <svg width="12" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 10,10 L 90,90 M 90,10 L 10,90"
                stroke="black"
                strokeWidth="30"
                fill="none"
              />
            </svg>
          </Link>
        </div>
        <span className='font-bold text-lg'>Join expedia on linktree today</span>
      </div>
    </div>
  );
};

export default Handle;
