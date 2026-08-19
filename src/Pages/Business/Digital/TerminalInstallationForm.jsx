import React, { useState } from "react";

const TerminalInstallationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    directorPassport: "",
    passportDate: "",
    passportIssuedBy: "",
    contactPhone: "",
    contactEmail: "",
    legalForm: "ՍՊԸ",
    terminalType: "POS",
    storeName: "",
    storeAddress: "",
    websiteName: "",
    averageTurnover: "",
    activityDescription: "",
    previousCardAcceptance: "",
    forecastedTurnover: "",
    notes: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
          Տերմինալի տեղադրման հայտ
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Անուն
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ազգանուն
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
              />
            </div>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Տնօրենի անձնագրի համարը <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="directorPassport"
              value={formData.directorPassport}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            />
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Անձնագրի տրման ամսաթիվը <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="passportDate"
                value={formData.passportDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition text-gray-600"
              />
              <span className="text-xs text-gray-400 mt-1 block">dd-MMM-yyyy</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ում կողմից է տրված <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="passportIssuedBy"
                value={formData.passportIssuedBy}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
              />
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ. փոստի հասցեն
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
              />
            </div>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Կազմակերպության իրավական ձևը <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-6">
              {["ԱՁ", "ՍՊԸ", "ՓԲԸ", "ԲԲԸ", "Այլ"].map((form) => (
                <label key={form} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="legalForm"
                    value={form}
                    checked={formData.legalForm === form}
                    onChange={handleChange}
                    className="text-purple-600 focus:ring-purple-500 h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">{form}</span>
                </label>
              ))}
            </div>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Պահանջվող տերմինալի ձևը <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-6">
              {["POS", "ՀՊՄ POS", "V-POS", "M-POS"].map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="terminalType"
                    value={type}
                    checked={formData.terminalType === type}
                    onChange={handleChange}
                    className="text-purple-600 focus:ring-purple-500 h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Առևտրային և սպասարկման կետի անվանում (հայերեն և անգլերեն) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="storeName"
              rows="3"
              value={formData.storeName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            ></textarea>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Առևտրային և սպասարկման կետի հասցե
            </label>
            <textarea
              name="storeAddress"
              rows="3"
              value={formData.storeAddress}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            ></textarea>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ինտերնետային կայքի անվանում (V-POS-ի դեպքում)
            </label>
            <input
              type="text"
              name="websiteName"
              value={formData.websiteName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Վերջին տարվա, ամսվա միջին շրջանառությունը ՀՀ դրամով
            </label>
            <input
              type="text"
              name="averageTurnover"
              value={formData.averageTurnover}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը <span className="text-red-500">*</span>
            </label>
            <textarea
              name="activityDescription"
              rows="3"
              value={formData.activityDescription}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            ></textarea>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Արդյոք նախկինում վճարումներ ընդունել եք վճարային քարտերով: Եթե այն, խնդրում ենք նշել նաև սպասարկող կազմակերպության անվանումը և վերջինիս հետ պայմանագիրը խզելու պատճառները:
            </label>
            <textarea
              name="previousCardAcceptance"
              rows="3"
              value={formData.previousCardAcceptance}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            ></textarea>
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="forecastedTurnover"
              value={formData.forecastedTurnover}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            />
          </div>

          {}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Նշումների համար
            </label>
            <textarea
              name="notes"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600 transition"
            ></textarea>
          </div>

          {}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              name="agreed"
              id="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="agreed" className="text-xs md:text-sm text-gray-600 select-none">
              Սույն հայտը լրացնելով՝ հավաստում եմ, որ դրանում ներկայացված տվյալները ստույգ են, լրիվ և արժանահավատ: Տալիս եմ իմ համաձայնությունը, որպեսզի Բանկը ստուգի դրանց իսկությունը:
            </label>
          </div>

          {}
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-[#6b11cb] hover:bg-[#580ea8] text-white font-semibold px-12 py-3 rounded-full transition shadow-md text-base"
            >
              Ուղարկել
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TerminalInstallationForm;