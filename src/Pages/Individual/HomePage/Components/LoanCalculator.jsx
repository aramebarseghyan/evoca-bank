import React, { useState } from "react";

const LoanCalculator = () => {
  // Տաբերի վիճակը (loan կամ deposit)
  const [activeTab, setActiveTab] = useState("loan");

  // Վարկի state-եր
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(1);
  const [term, setTerm] = useState(1);
  const [repaymentType, setRepaymentType] = useState("spring");

  // Ավանդի state-եր
  const [depositAmount, setDepositAmount] = useState(0);
  const [depositRate, setDepositRate] = useState(1);
  const [depositTerm, setDepositTerm] = useState(91);

  return (
    // Ավելացված է 2xl:max-w-[1100px] լայն էկրանների համար
    <div className=" w-full max-w-[900px] xl:max-w-[800px] 2xl:max-w-[1100px] mx-auto p-5 pt-25 font-sans">
      <div className="-mt-[370px] md:-mt-[-30px] -mb-[290px] md:mb-[70px] relative z-10 transition-all">
        {/* Հաշվիչներ վերնագիրը */}
        <h1 className="text-[28px] md:text-[35px] 2xl:text-[40px] font-extrabold text-gray-900 mb-6 2xl:mb-8 tracking-tight px-1">
          Հաշվիչներ
        </h1>

        {/* Հիմնական քարտ */}
        <div className="bg-[#fdfbfe] rounded-[24px] 2xl:rounded-[32px] p-1.5 2xl:p-2 shadow-[0_0_35px_rgba(92,14,214,0.06)] border border-purple-50 relative">
          {/* Տաբեր */}
          <div className="flex px-3 2xl:px-4 cursor-pointer">
            <div
              onClick={() => setActiveTab("loan")}
              className={`px-7 py-3 2xl:px-9 2xl:py-4 text-[14px] 2xl:text-[15px] transition-all ${
                activeTab === "loan"
                  ? "bg-white border-t-[3px] border-[#5C0ED6] rounded-t-xl 2xl:rounded-t-2xl text-[#111] font-bold shadow-[0_-2px_8px_rgba(0,0,0,0.02)] z-10"
                  : "text-gray-500 font-medium"
              }`}
            >
              Վարկ
            </div>
            <div
              onClick={() => setActiveTab("deposit")}
              className={`px-7 py-3 2xl:px-9 2xl:py-4 text-[14px] 2xl:text-[15px] transition-all ${
                activeTab === "deposit"
                  ? "bg-white border-t-[3px] border-[#5C0ED6] rounded-t-xl 2xl:rounded-t-2xl text-[#111] font-bold shadow-[0_-2px_8px_rgba(0,0,0,0.02)] z-10"
                  : "text-gray-500 font-medium"
              }`}
            >
              Ավանդ
            </div>
          </div>

          {/* Հաշվիչի բուն ձևը */}
          <div className="bg-white rounded-[20px] 2xl:rounded-[24px] rounded-tl-none p-4 lg:p-8 xl:p-6 2xl:p-10 pt-6 2xl:pt-8 relative z-0 min-h-[450px] xl:min-h-[420px] 2xl:min-h-[480px] flex flex-col">
            {/* ================= ՎԱՐԿԻ ԲԱԺԻՆ ================= */}
            {activeTab === "loan" && (
              <div className="animate-fade-in flex flex-col h-full flex-grow">
                {/* 2 սյունակով Grid մեծ էկրանների համար */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-8 2xl:gap-x-16">
                  {/* Ձախ սյունակ */}
                  <div>
                    <RangeInput
                      label="Վարկի գումար"
                      value={loanAmount}
                      min={0}
                      max={50000000}
                      step={10000}
                      displayValue={loanAmount}
                      minLabel="0"
                      maxLabel="50000000"
                      onChange={setLoanAmount}
                    />
                    <RangeInput
                      label="Տարեկան տոկոսադրույք"
                      value={interestRate}
                      min={1}
                      max={36}
                      step={1}
                      displayValue={`${interestRate} %`}
                      minLabel="1 %"
                      maxLabel="36 %"
                      onChange={setInterestRate}
                    />
                  </div>

                  {/* Աջ սյունակ */}
                  <div>
                    <RangeInput
                      label="Ժամկետ"
                      value={term}
                      min={1}
                      max={1200}
                      step={1}
                      displayValue={`${term} ամիս`}
                      minLabel="1 ամիս"
                      maxLabel="1200 ամիս"
                      onChange={setTerm}
                    />

                    <div className="mb-8 mt-2 2xl:mt-4">
                      <p className="text-[12px] 2xl:text-[14px] text-gray-500 mb-4 2xl:mb-5 font-semibold px-1">
                        Մարման ձև
                      </p>
                      <div className="flex gap-10 2xl:gap-14 px-1">
                        <label
                          className="flex items-center space-x-3 cursor-pointer"
                          onClick={() => setRepaymentType("spring")}
                        >
                          <div
                            className={`w-[22px] h-[22px] 2xl:w-[24px] 2xl:h-[24px] rounded-full flex items-center justify-center transition-all ${
                              repaymentType === "spring"
                                ? "border-[6px] border-[#5C0ED6] bg-white"
                                : "border border-gray-300 bg-white"
                            }`}
                          ></div>
                          <span className="text-[14px] 2xl:text-[15px] font-bold text-gray-900">
                            Զսպանակաձև
                          </span>
                        </label>

                        <label
                          className="flex items-center space-x-3 cursor-pointer"
                          onClick={() => setRepaymentType("annuity")}
                        >
                          <div
                            className={`w-[22px] h-[22px] 2xl:w-[24px] 2xl:h-[24px] rounded-full flex items-center justify-center transition-all ${
                              repaymentType === "annuity"
                                ? "border-[6px] border-[#5C0ED6] bg-white"
                                : "border border-gray-300 bg-white"
                            }`}
                          ></div>
                          <span className="text-[14px] 2xl:text-[15px] font-bold text-gray-900">
                            Անուիտետ
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ներքևի հատված՝ տեքստ և կոճակ */}
                <div className="mt-auto pt-6 2xl:pt-10 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-end gap-6">
                  <p className="text-[12px] 2xl:text-[13px] text-gray-600 leading-relaxed px-1 max-w-[450px] 2xl:max-w-[500px]">
                    Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում
                    հրապարակային առաջարկ:
                  </p>
                  <button className="bg-[#5C0ED6] hover:bg-[#4a0ba8] transition-colors text-white font-bold py-[14px] px-16 2xl:py-[16px] 2xl:px-20 rounded-[14px] 2xl:rounded-[16px] text-[15px] 2xl:text-[16px] w-full lg:w-auto">
                    Հաշվել
                  </button>
                </div>
              </div>
            )}

            {/* ================= ԱՎԱՆԴԻ ԲԱԺԻՆ ================= */}
            {activeTab === "deposit" && (
              <div className="animate-fade-in flex flex-col h-full flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-8 2xl:gap-x-16">
                  {/* Ձախ սյունակ */}
                  <div>
                    <RangeInput
                      label="Ներդրվող գումար"
                      value={depositAmount}
                      min={0}
                      max={50000000}
                      step={10000}
                      displayValue={depositAmount}
                      minLabel="0"
                      maxLabel="50000000"
                      onChange={setDepositAmount}
                    />
                    <RangeInput
                      label="Տարեկան տոկոսադրույք"
                      value={depositRate}
                      min={1}
                      max={36}
                      step={1}
                      displayValue={`${depositRate} %`}
                      minLabel="1 %"
                      maxLabel="36 %"
                      onChange={setDepositRate}
                    />
                    <RangeInput
                      label="Ավանդի ժամկետ"
                      value={depositTerm}
                      min={91}
                      max={1095}
                      step={1}
                      displayValue={`${depositTerm} օր`}
                      minLabel="91 օր"
                      maxLabel="1095 օր"
                      onChange={setDepositTerm}
                    />
                  </div>

                  {/* Աջ սյունակ - Արդյունքներ */}
                  <div className="mt-8 lg:mt-0 space-y-6 2xl:space-y-8 px-1 lg:pl-4 2xl:pl-8">
                    <div>
                      <p className="text-[14px] 2xl:text-[15px] text-gray-800 font-medium mb-2 2xl:mb-3">
                        Օրական կտրվածքով հաշվարկվող տոկոսագումար *
                      </p>
                      <p className="text-[18px] 2xl:text-[20px] font-bold text-gray-900">
                        0
                      </p>
                      <div className="h-[1px] bg-gray-200 w-full mt-4 2xl:mt-5"></div>
                    </div>

                    <div>
                      <p className="text-[14px] 2xl:text-[15px] text-gray-800 font-medium mb-2 2xl:mb-3 lg:pr-12">
                        Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող
                        ընդհանուր տոկոսային եկամուտ
                      </p>
                      <p className="text-[18px] 2xl:text-[20px] font-bold text-gray-900">
                        0
                      </p>
                      <div className="h-[1px] bg-gray-200 w-full mt-4 2xl:mt-5"></div>
                    </div>

                    <div>
                      <p className="text-[14px] 2xl:text-[15px] text-gray-800 font-medium mb-2 2xl:mb-3">
                        Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին
                        փաստացի վճարվող զուտ տոկոսային եկամուտ
                      </p>
                      <p className="text-[18px] 2xl:text-[20px] font-bold text-gray-900">
                        0
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ինֆո բլոկ և ընդհանուր տեքստ */}
                <div className="mt-auto pt-8 2xl:pt-12 flex flex-col gap-6 2xl:gap-8">
                  <div className="flex items-start justify-between gap-4 px-1 max-w-[450px] 2xl:max-w-[550px]">
                    <p className="text-[12px] 2xl:text-[13px] text-gray-500 font-medium leading-[1.4]">
                      Ներդրված ավանդի դիմաց ստացվող տոկոսագումարները հարկվում
                      են՝ 10% եկամտային հարկի չափով
                    </p>
                    <div className="min-w-[24px] mt-0.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 11V16"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <circle cx="12" cy="7.5" r="1" fill="#9CA3AF" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-[12px] 2xl:text-[13px] text-gray-600 leading-relaxed px-1">
                    Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում
                    հրապարակային առաջարկ:
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const RangeInput = ({
  label,
  value,
  min,
  max,
  step,
  displayValue,
  minLabel,
  maxLabel,
  onChange,
}) => {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-6 2xl:mb-8">
      <div className="relative border border-gray-200 rounded-[12px] 2xl:rounded-[14px] p-4 py-4 2xl:p-5 flex justify-between items-center bg-white">
        <span className="text-gray-800 text-[13px] 2xl:text-[14px] font-semibold">
          {label}
        </span>
        <span className="text-black text-[18px] 2xl:text-[20px] font-bold">
          {displayValue}
        </span>

        <div
          className="absolute -bottom-[1px] left-0 h-[2px] 2xl:h-[3px] bg-[#5C0ED6] z-10 rounded-l-[12px]"
          style={{ width: `${progress}%` }}
        ></div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute -bottom-[1px] left-0 w-full h-[2px] 2xl:h-[3px] bg-transparent appearance-none z-20 outline-none
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0 
          [&::-webkit-slider-thumb]:border-l-[5px] [&::-webkit-slider-thumb]:border-l-transparent 
          [&::-webkit-slider-thumb]:border-r-[5px] [&::-webkit-slider-thumb]:border-r-transparent 
          [&::-webkit-slider-thumb]:border-b-[7px] [&::-webkit-slider-thumb]:border-b-[#5C0ED6] 
          [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:-mt-[6px] 2xl:[&::-webkit-slider-thumb]:-mt-[5px]
          
          [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-0 [&::-moz-range-thumb]:h-0 
          [&::-moz-range-thumb]:border-l-[5px] [&::-moz-range-thumb]:border-l-transparent 
          [&::-moz-range-thumb]:border-r-[5px] [&::-moz-range-thumb]:border-r-transparent 
          [&::-moz-range-thumb]:border-b-[7px] [&::-moz-range-thumb]:border-b-[#5C0ED6] 
          [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-t-0 [&::-moz-range-thumb]:bg-transparent"
        />
      </div>

      <div className="flex justify-between text-[11px] 2xl:text-[12px] text-gray-500 mt-2 2xl:mt-3 font-medium px-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

export default LoanCalculator;
