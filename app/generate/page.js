"use client";

import React, { Suspense, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const SearchParamsHandler = ({ sethandle, sethandleredirect }) => {
  const searchParams = useSearchParams();
  const handleValue = searchParams.get("handle") || "";

  useEffect(() => {
    sethandle(handleValue);
    sethandleredirect(handleValue);
  }, [handleValue, sethandle, sethandleredirect]);

  return null; 
};

const GeneratePage = () => {
  const [Links, setLinks] = useState([{ linktext: "", link: "" }]);
  const [Piclink, setPiclink] = useState("");
  const [handle, sethandle] = useState("");
  const [desc, setdesc] = useState("");
  const [display, setdisplay] = useState(false);
  const [handleredirect, sethandleredirect] = useState("");

  const addlink = () => {
    setLinks([...Links, { link: "", linktext: "" }]);
  };

  const linkchange = (i, link, linktext) => {
    setLinks(
      Links.map((item, index) => (i === index ? { link, linktext } : item))
    );
  };

  const createbitlink = async (Links, handle, Piclink, desc) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: Links,
      handle: handle,
      Piclink: Piclink,
      desc: desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let r = await fetch("http://localhost:3000/api/add", requestOptions);
    let res = await r.json();

    if (res.success) {
      toast.success(res.message);
      setLinks([{ linktext: "", link: "" }]);
      setPiclink("");
      sethandle("");
      setdesc("");
      setdisplay(true);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="grid grid-cols-2 h-[150vh] bg-[#E9C0E9]">
      <Suspense fallback={null}>
        <SearchParamsHandler sethandle={sethandle} sethandleredirect={sethandleredirect} />
      </Suspense>

      <div className="col2 flex flex-col justify-start mt-[17vh] items-center">
        <div className="flex flex-col gap-3 shadow-lg px-2 rounded-lg bg-gradient-to-r from-purple-300 to-pink-300 shadow-pink-950">
          <h1 className="font-bold text-4xl">Create your Bittree</h1>
          <div className="item">
            <h2 className="font-semibold text-2xl">Step 1: Claim your handle</h2>
            <div className="mx-4">
              <input
                value={handle}
                onChange={(e) => {
                  sethandle(e.target.value);
                  sethandleredirect(e.target.value);
                }}
                type="text"
                className="px-4 py-2 my-1 mx-1 focus:outline-pink-500 rounded-full"
                placeholder="Choose Handle"
              />
            </div>
          </div>
          <div className="item flex flex-col items-start">
            <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
            {Links.map((item, index) => (
              <div key={index} className="mx-4">
                <input
                  type="text"
                  value={item.linktext}
                  onChange={(e) => linkchange(index, item.link, e.target.value)}
                  className="px-4 py-2 my-1 mx-1 focus:outline-pink-500 rounded-full"
                  placeholder="Enter Link text"
                />
                <input
                  value={item.link}
                  onChange={(e) => linkchange(index, e.target.value, item.linktext)}
                  className="px-4 py-2 my-1 mx-1 focus:outline-pink-500 rounded-full"
                  type="text"
                  placeholder="Enter link"
                />
              </div>
            ))}
            <button onClick={addlink} className="text-white ml-5 font-bold rounded-3xl bg-slate-900 mx-2 p-5 py-2">
              Add Link +
            </button>
          </div>
          <div className="item">
            <h2 className="font-semibold text-2xl">Step 3: Add Picture and Finalize</h2>
            <div className="mx-4 flex flex-col">
              <input
                value={Piclink}
                onChange={(e) => setPiclink(e.target.value)}
                type="text"
                className="px-4 py-2 my-1 mx-1 focus:outline-pink-500 rounded-full"
                placeholder="Enter Link to your Picture"
              />
              <input
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                type="text"
                className="px-4 py-2 my-1 mx-1 focus:outline-pink-500 rounded-full"
                placeholder="Enter description"
              />
              <button
                disabled={!handle || !Links[0].linktext || !desc}
                onClick={() => createbitlink(Links, handle, Piclink, desc)}
                className="text-white disabled:bg-slate-500 w-fit my-5 font-bold rounded-3xl bg-slate-900 mx-2 p-5 py-2"
              >
                Create your Bitlink
              </button>
            </div>
          </div>
        </div>
        {display && (
          <div className="flex w-[58%] px-[2] justify-start mt-8">
            <Link
              href={`/${handleredirect}`}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-4 font-semibold shadow-md shadow-slate-950 hover:shadow-lg hover:shadow-slate-950"
            >
              Go to your handle
            </Link>
          </div>
        )}
      </div>
      <div className="col1 h-screen flex flex-col items-start">
        <img className="object-contain h-full img3" src="/generate.png" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default GeneratePage;  