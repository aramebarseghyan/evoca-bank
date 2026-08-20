import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const CardholderLinks = () => {
  const [documents, setDocuments] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const docSnap = await getDoc(doc(db, "cardholderLinks", "main"));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDocuments(data.documents || []);
          setUpdatedAt(data.updatedAt || "");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 py-12 font-sans text-gray-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
        Հղումներ Բանկի քարտապանների համար
      </h2>

      <h3 className="text-lg font-bold text-gray-900 mb-4 max-w-[650px] mx-auto">
        Փաստաթղթեր
      </h3>

      <div className="space-y-3 max-w-[650px] mx-auto mb-12">
        {documents.map((docItem) => (
          <a
            key={docItem.id}
            href={docItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 bg-[#F6F4F9] hover:bg-[#EFE9F5] p-4 rounded-xl transition-colors duration-200 group"
          >
            <div className="shrink-0 text-[#8A2BE2] group-hover:scale-105 transition-transform duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="m9 15 3 3 3-3" />
              </svg>
            </div>

            <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
              {docItem.title}
            </span>
          </a>
        ))}
      </div>

      {updatedAt && (
        <div className="text-right text-xs text-gray-400 border-t border-gray-100 pt-4">
          Թարմացվել է` {updatedAt}
        </div>
      )}
    </section>
  );
};

export default CardholderLinks;
