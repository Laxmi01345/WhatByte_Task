"use client";

import LineChart from "./lineChart"
import Image from "next/image";
import imgg from "./images.png"
import trophy from "./imagess/trophy.png"
import Leftbar from "./leftbar";
import logo from "./imagess/logo (1).jpg"
import html from "./imagess/htmll.d8e9ba79.png"
import notes from "./imagess/notes.148dff8c-removebg-preview.png"
import ProgressBar from "@ramonak/react-progress-bar";
import { FaArrowRight } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tick from "./imagess/tick.a79929c1.jpeg"
import girldev from "./imagess/girldev.png"
import { useState } from "react";

export default function Home() {
  const [Update, setUpdate] = useState(false);
  const [Rank, setRank] = useState(4);
  const [Percentile, setPercentile] = useState(90);
  const [Score, setScore] = useState(12);

  const dataSaved = () => {
    setUpdate(false);

  }
  const percentage = (Score / 15) * 100;
  const Updatefunc = () => {
    setUpdate(true);
  }
  const handleClose = () => {
    setUpdate(false);
  };


  return (
    <div>
      <div className="p-4 font-bold text-3xl m-1 flex items-center justify-between space-x-4">
  <div className="flex items-center">
    <Image src={logo} className="md:h-10 h-8" alt="" />
    <h1 className="pl-2 text-sm md:text-xl">WhatBytes</h1>
  </div>

  <div className="flex border-2 rounded-md p-2 shadow-lg items-center">
    <Image src={girldev} className="rounded-full h-10 w-10" alt="" />
    <p className="md:text-xl text-sm ml-2">Laxmi Ray</p>
  </div>
</div>

      <div className="md:grid md:grid-cols-[18%_82%] border-2 h-full border-gray-200  m-2">
        <div className=" border-gray-200 border-x-2 hidden md:block">
          <Leftbar />
        </div>
        <div className=" p-4  md:grid md:grid-cols-[60%_40%]">
          <div >
            <h1 className="p-4">Skill Test</h1>
            <div className=" p-2 mt-2">
              <div className="border-2 border-gray-200 rounded-md md:flex pb-6  pt-6 ">
                <div className="justify-center flex md:pt-4">
                  <Image src={html} alt="html logo" className="h-16 w-16" />
                </div>
                <div className="md:pt-4">
                  <h1 className="font-extrabold  text-center md:text-left">HyperText Markup Language</h1>
                  <div>
                    <h1 className="text-gray-600 pt-1 px-4 text-center">
                      Questions: 08 | Duration: 15 mins |
                      <span className="block sm:inline">Submitted on 5 June 2021</span>
                    </h1>
                  </div>

                </div>
                <div className="md:pl-10 justify-center justify-content flex pt-4 md:pb-4">
                  <div className="border-2 border-black p-2 w-24 text-center rounded-md text-white bg-blue-900">
                    <button onClick={Updatefunc}>Update</button>
                  </div>

                </div>
              </div>

              {Update && (
                <>

                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

                  <div className="fixed inset-0 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg md:w-[40%] w-[80%]">
                      <div className="flex justify-between items-center mb-4">
                        <h1 className="font-bold text-lg">Update scores</h1>

                        <Image src={html} alt="html logo" className="h-10 w-10" />
                      </div>

                      <div className="space-y-4">
                        {/* Rank Input */}
                        <div className="flex items-center">
                          <div className="flex items-center w-[60%]">
                            <span className="rounded-full text-white bg-blue-800 border-2 border-black md:w-6 md:h-6 w-6 h-6 flex items-center justify-center font-bold text-sm mr-4">
                              1
                            </span>
                            <p>Update your <b>Rank</b></p>
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="Rank"
                              onChange={(e) => setRank(Number(e.target.value))}
                              className="border border-blue-800 rounded p-2 w-[96%]"
                            />
                            <br />
                            {(!Rank || isNaN(Rank)) && (
                              <span className="text-red-800 text-xs">required | Should be a valid number</span>
                            )}
                          </div>
                        </div>



                        <div className="flex items-center">
                          <div className="flex items-center md:w-[60%] w-[80%]">
                            <span className="text-white rounded-full bg-blue-800 border-2 border-black  w-6 h-6 flex items-center justify-center font-bold text-sm mr-4">
                              2
                            </span>
                            <p>Update your <b>Percentile</b></p>
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="Percentile"
                              onChange={(e) => setPercentile(Number(e.target.value))}
                              className="border border-blue-800 rounded p-2 w-[96%]"
                            />
                            <br />
                            {(!Percentile || isNaN(Percentile)) && (
                              <span className="text-red-800 text-xs">required | percentile 0-100</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="flex items-center w-[60%]">
                            <span className="rounded-full text-white border-2 bg-blue-800 border-black md:w-6 md:h-6 w-12 h-6 flex items-center justify-center font-bold text-sm mr-4">
                              3
                            </span>
                            <p>Update your <b>Current Score (out of 15)</b></p>
                          </div>
                          <div>
                            <input
                              type="number"
                              placeholder="Score"
                              onChange={(e) => setScore(Number(e.target.value))}
                              className="border border-blue-800 rounded p-2 w-[96%]"
                            />
                            <br />
                            {(isNaN(Score)) && (
                              <span className="text-red-800 text-xs">required | Should be 0-15</span>
                            )}
                          </div>
                        </div>
                      </div>


                      <div className="mt-6 flex justify-end space-x-4">
                        <button
                          onClick={handleClose}
                          className="text-blue-800 border-2 border-black px-4 py-2 rounded-md"
                        >
                          Cancel
                        </button>
                        <button className="flex items-center text-white bg-blue-800 border-2 border-black px-4 py-2 rounded-md space-x-2" onClick={dataSaved}>
                          <span>Save</span>
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>


                </>
              )}

              <div className="border-2 border-gray-200 rounded-md  pb-6  pt-6 mt-4 p-4">
                <h1 className="font-extrabold ml-2">Quick Statistics</h1>
                <div className="md:grid md:grid-cols-3 ">
                  <div className="flex items-center m-2">
                    <div className="flex items-center justify-center rounded-full h-14 w-14   bg-gray-100">
                      <Image
                        src={trophy}
                        alt="trophy image"
                        className=" h-8 w-8"
                      />
                    </div>

                    <div className="ml-4">
                      <h1 className="font-bold text-2xl">{Rank}</h1>
                      <p className="text-gray-400 text-xs capitalize">YOUR RANK</p>
                    </div>





                  </div>
                  <div className="md:border-x  border-grey-300 flex  m-2 pl-2">

                    <div className="flex items-center justify-center rounded-full h-14 w-14   bg-gray-100">
                      <Image
                        src={notes}
                        alt="trophy image"
                        className=" h-8 w-8"
                      />
                    </div>
                    <div className="m-2">
                      <h1 className="font-bold text-2xl">{Percentile}%</h1>
                      <p className="text-gray-400 text-xs capitalize">PERCENTILE</p>
                    </div>
                  </div>
                  <div className=" m-2 flex">
                    <div className="flex items-center justify-center rounded-full h-14 w-14   bg-gray-100">
                      <Image
                        src={Tick}
                        alt="trophy image"
                        className=" h-8 w-8"
                      />
                    </div>
                    <div className="m-2">
                      <h1 className="font-bold text-2xl">{Score} / 15</h1>
                      <p className="text-gray-400 text-xs capitalize">CORRECT ANSWERS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 rounded-md  pb-6 p-4 pt-6 mt-4">
                <h1 className="font-extrabold ml-2">Comparison Graph</h1>
                <p className="p-4"><b className="text-gray-600 font-bold">You have scored {Percentile}% percentile</b> which is lower than the average percentile 72% of all the engineers who took the assessment</p>

                <div className="flex justify-center items-center ">
                  <LineChart value={Percentile} />
                </div>

              </div>
            </div>


          </div>
          <div className="mt-14" >
            <div className="border-2 border-grey-400 rounded p-4 ">
              <h1 className="font-extrabold p-2 mt-5">Syllabus Wise Analysis</h1>


              <p className="p-2 mt-5">HTML Tools, Forms, History</p>
              <div className="flex items-center mb-4">

                <ProgressBar
                  completed={80}
                  bgColor="#0066ff"
                  isLabelVisible={false}
                  className="flex-1"
                />
                <p className="ml-4 font-extrabold text-[#0066ff]">80%</p>
              </div>

              <p className="p-4">Tags and References in HTML</p>
              <div className="flex items-center mb-4 ">

                <ProgressBar
                  completed={60}
                  bgColor="#ff6600"
                  isLabelVisible={false}
                  className="flex-1"
                />
                <p className="ml-4 font-extrabold text-[#ff6600]">60%</p>
              </div>
              <p className="p-4">Tags and References in HTML</p>
              <div className="flex items-center mb-4">

                <ProgressBar
                  completed={24}
                  bgColor="#ff0000"
                  isLabelVisible={false}
                  className="flex-1"
                />
                <p className="ml-4 font-extrabold text-[#ff0000]">24%</p>
              </div>

              <p className="p-4">Tables and CSS Basics</p>
              <div className="flex items-center mb-4">

                <ProgressBar
                  completed={96}
                  bgColor="#33cc33"
                  isLabelVisible={false}
                  className="flex-1"
                />
                <p className="ml-4 font-extrabold text-[#33cc33]">96%</p>
              </div>
            </div>
            <div className=" border-2 border-gray-200 mt-4 pt-4 rounded-md mb-8">
              <div className="mt-4 md:pl-4 pl-6 flex  md:space-x-60 mb-6 space-x-20">

                <h1 className="font-extrabold md:pl-2">Question Analysis</h1>
                <h1 className="font-bold  text-[#0066ff]">{Score}/15</h1>
              </div>
              <div>
                <p className="ml-6"><b className="text-gray-600">You scored {Score} question correct out of 15.</b> However it still needs some improvements</p>
              </div>
              <div className="flex justify-center justify-items-center">
                <div style={{ width: 150, height: 150, position: "relative" }} className="p-4">
                  <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                      pathColor: "#0066ff",
                      trailColor: "#d6d6d6",
                    })}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",

                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                    }}
                  >
                    <Image
                      src={imgg}
                      alt="Custom Icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  );
}
