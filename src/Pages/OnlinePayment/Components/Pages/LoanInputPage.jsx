import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderOnl from "../HeaderOnl";
import FooterOnl from "../FooterOnl";

const LoanInputPage = () => {
  const [contractNumber, setContractNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Введен номер договора:", contractNumber);
    // Здесь в будущем можно сделать переход на следующий шаг или проверку
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between">
      <HeaderOnl />

      <main className="w-full py-8 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1240px]">
          {/* Хлебные крошки */}
          <div className="text-sm text-[#6000ff] mb-8">
            <Link to="/instant-payments" className="hover:underline">
              Գլխավոր
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link to="/loan-repayment" className="hover:underline">
              Վարկի մարում
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-600">
              Վարկի մայր գումարի վաղաժամկետ մարում
            </span>
          </div>

          {/* Заголовок */}
          <h1 className="text-center text-[32px] lg:text-[40px] font-bold text-[#222222] mb-12">
            Վարկի մայր գումարի վաղաժամկետ մարում
          </h1>

          {/* Форма ввода */}
          <div className="flex justify-center">
            <div className="bg-white rounded-[24px] p-8 sm:p-12 w-full max-w-[600px] shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#333333] font-medium">
                    * Վարկային պայմանագրի համար
                  </label>
                  <input
                    type="text"
                    value={contractNumber}
                    onChange={(e) => setContractNumber(e.target.value)}
                    placeholder="TVxxxx"
                    className="w-full h-[52px] px-4 rounded-[12px] border border-gray-300 focus:outline-none focus:border-[#6000ff] text-[16px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[52px] bg-[#6000ff] hover:bg-[#5000d6] text-white font-medium rounded-[12px] transition-all duration-300 text-[16px] cursor-pointer mt-2"
                >
                  Շարունակել
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <FooterOnl />
    </div>
  );
};

export default LoanInputPage;
