import React, { useState } from "react";

const Contact = () => {
  const [userType, setUserType] = useState("ֆիզիկական");
  const [feedbackType, setFeedbackType] = useState("շնորհակալություն");

  return (
    <div className="w-full min-h-screen bg-white py-10">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        {/* Վերնագիր */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center md:text-left">
          Հետադարձ կապ
        </h2>

        {/* Ինֆորմացիոն Աղյուսակ */}
        <div className="w-full border border-gray-200 rounded-xl overflow-hidden mb-12 shadow-sm text-sm md:text-base">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-[#fbfbFC] md:bg-white">
            <div className="p-4 text-gray-500 md:text-gray-600 md:border-r border-gray-200">
              Հասցե
            </div>
            <div className="p-4 col-span-2 text-gray-900 font-medium md:bg-white bg-[#fbfbFC]">
              ՀՀ 0010 Երևան, Հանրապետության փող. 44/2 շենք
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-[#fbfbFC] md:bg-white">
            <div className="p-4 text-gray-500 md:text-gray-600 md:border-r border-gray-200">
              Հեռախոսահամար
            </div>
            <div className="p-4 col-span-2 text-gray-900 font-medium md:bg-white bg-[#fbfbFC]">
              <ul className="list-disc pl-5 space-y-1">
                <li>+374 10 605555</li>
                <li>84 44</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-[#fbfbFC] md:bg-white">
            <div className="p-4 text-gray-500 md:text-gray-600 md:border-r border-gray-200">
              Էլ. փոստ
            </div>
            <div className="p-4 col-span-2 text-gray-900 font-medium md:bg-white bg-[#fbfbFC]">
              hello@evoca.am
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-[#fbfbFC] md:bg-white">
            <div className="p-4 text-gray-500 md:text-gray-600 md:border-r border-gray-200">
              SWIFT
            </div>
            <div className="p-4 col-span-2 text-gray-900 font-medium md:bg-white bg-[#fbfbFC]">
              PRML AM 22
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 bg-[#fbfbFC] md:bg-white">
            <div className="p-4 text-gray-500 md:text-gray-600 md:border-r border-gray-200">
              Աշխատանքային ժամեր
            </div>
            <div className="p-4 col-span-2 text-gray-900 font-medium md:bg-white bg-[#fbfbFC]">
              9:00 - 18:00
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#fbfbFC] md:bg-white">
            <div className="p-4 text-gray-500 md:text-gray-600 md:border-r border-gray-200">
              Հաճախորդների սպասարկման ժամեր
            </div>
            <div className="p-4 col-span-2 text-gray-900 font-medium md:bg-white bg-[#fbfbFC]">
              9:30 - 17:00
            </div>
          </div>
        </div>

        {/* Ֆորմայի հատված */}
        <div className="bg-[#fbfbFC] border border-gray-100 shadow-sm rounded-xl p-6 md:p-10 mb-20 max-w-[750px] mx-auto">
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները,
            մտահոգությունները կամ ցանկացած խնդրի հետ կապված խնդիրները, որպեսզի
            կարողանանք բարելավել մեր ծառայությունները։
            <br />
            <br />
            Հաղորդագրություն ուղարկելու համար լրացրեք ստորև բերված դաշտերը՝
          </p>

          <form className="space-y-5">
            {/* Ռադիո խումբ 1 */}
            <div>
              <p className="text-sm font-bold text-gray-800 mb-2">
                Դուք հանդիսանում եք
              </p>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "ֆիզիկական"}
                    onChange={() => setUserType("ֆիզիկական")}
                    className="w-4 h-4 accent-[#6b2593] cursor-pointer"
                  />
                  Ֆիզիկական անձ
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="userType"
                    checked={userType === "իրավաբանական"}
                    onChange={() => setUserType("իրավաբանական")}
                    className="w-4 h-4 accent-[#6b2593] cursor-pointer"
                  />
                  Իրավաբանական անձ
                </label>
              </div>
            </div>

            {/* Ռադիո խումբ 2 */}
            <div>
              <p className="text-sm font-bold text-gray-800 mb-2">
                Հետադարձ կապի տեսակը <span className="text-red-500">*</span>
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="feedbackType"
                    checked={feedbackType === "շնորհակալություն"}
                    onChange={() => setFeedbackType("շնորհակալություն")}
                    className="w-4 h-4 accent-[#6b2593] cursor-pointer"
                  />
                  Հայտնել շնորհակալություն
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="feedbackType"
                    checked={feedbackType === "առաջարկ"}
                    onChange={() => setFeedbackType("առաջարկ")}
                    className="w-4 h-4 accent-[#6b2593] cursor-pointer"
                  />
                  Ներկայացնել առաջարկ
                </label>
              </div>
            </div>

            {/* Անուն */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-800">
                Անուն <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#6b2593] focus:ring-1 focus:ring-[#6b2593] transition-colors"
              />
            </div>

            {/* Ազգանուն */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-800">
                Ազգանուն <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#6b2593] focus:ring-1 focus:ring-[#6b2593] transition-colors"
              />
            </div>

            {/* Հեռախոս */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-800">
                Հեռ՝ <span className="text-red-500">*</span>
              </label>
              <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-[#6b2593] focus-within:ring-1 focus-within:ring-[#6b2593] transition-colors bg-white">
                <div className="flex items-center bg-gray-50 px-3 py-2.5 border-r border-gray-300 cursor-pointer">
                  <span className="mr-2 text-base">🇦🇲</span>
                  <span className="text-sm text-gray-700">+374</span>
                  <svg
                    className="w-3 h-3 ml-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <input
                  type="tel"
                  className="flex-1 p-2.5 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Էլ. փոստ */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-800">
                Էլ․ փոստ <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#6b2593] focus:ring-1 focus:ring-[#6b2593] transition-colors"
              />
            </div>

            {/* Հաղորդագրություն */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-800">
                Հաղորդագրություն <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-[#6b2593] focus:ring-1 focus:ring-[#6b2593] transition-colors resize-y"
              ></textarea>
            </div>

            {/* Կցել փաստաթուղթ */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-800">
                Կցել փաստաթուղթ
              </label>
              <div className="flex justify-between items-center border border-gray-300 rounded p-2.5 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-400">Կցել ֆայլը</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
            </div>

            {/* Կապչա (Captcha) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-gray-800">
                Ստուգման ծածկագիր <span className="text-red-500">*</span>
              </label>
              <div className="bg-[#f0f0f5] p-4 rounded-md inline-block w-full sm:w-[280px]">
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Մուտքագրեք ծածկագիրը"
                    className="w-full border border-gray-300 rounded p-2 pr-8 text-sm focus:outline-none focus:border-[#6b2593]"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <polyline points="1 20 1 14 7 14"></polyline>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                  </button>
                </div>
                {/* Կապչայի Նկարի վիզուալիզացիա */}
                <div className="bg-white border border-gray-300 rounded h-14 flex items-center justify-center relative overflow-hidden select-none">
                  <span className="text-[26px] font-serif italic tracking-[0.2em] text-gray-900 relative z-10">
                    ZFX7G6
                  </span>
                  {/* Մեջտեղի գիծը */}
                  <div className="absolute w-[110%] h-[1.5px] bg-black top-1/2 left-[-5%] transform -translate-y-1/2 -rotate-3 z-20"></div>
                </div>
              </div>
            </div>

            {/* Ուղարկել Կոճակ */}
            <div className="flex justify-center md:justify-center pt-6">
              <button
                type="button"
                className="bg-[#6b2593] hover:bg-[#581d7a] text-white font-medium py-2.5 px-12 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6b2593]"
              >
                Ուղարկել
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
