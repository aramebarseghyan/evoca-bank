import React from "react";

export default function BenefitCardBenefits({ item }) {
  const firstSpaceIndex = item.title.indexOf(" ");
  const percent =
    firstSpaceIndex !== -1
      ? item.title.substring(0, firstSpaceIndex)
      : item.title;
  const name =
    firstSpaceIndex !== -1 ? item.title.substring(firstSpaceIndex + 1) : "";

  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white pb-4 hover:shadow-md transition-shadow">
      <div className="h-[180px] bg-[#111] flex items-center justify-center relative overflow-hidden">
        <img
          src={item.imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="px-4 pt-4">
        <h3 className="font-bold text-gray-900 text-lg">
          <span className="text-[#5D00E0]">{percent}</span> {name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
          {item.discountType}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs px-3 py-1 bg-gray-100 rounded-md text-gray-700 font-medium">
            {item.category}
          </span>
          {item.socials?.instagram && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
