import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const InfoList = ({ activeFilter, collectionName = "loansImportantInfo" }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Используем переданное имя коллекции или дефолтное
        const querySnapshot = await getDocs(collection(db, collectionName));
        const itemsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsList);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [collectionName]);

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;
    if (item.type === activeFilter || item.categoryId === activeFilter)
      return true;

    const title = (item.title || "").toLowerCase();

    if (activeFilter === "general" && title.includes("ընդհանուր")) return true;
    if (
      activeFilter === "tariffs" &&
      (title.includes("սակագן") || title.includes("սակագներ"))
    )
      return true;
    if (
      activeFilter === "rules" &&
      (title.includes("կանոն") || title.includes("պայման"))
    )
      return true;
    if (activeFilter === "premium" && title.includes("պրեմիում")) return true;
    if (activeFilter === "gift" && title.includes("նվեր")) return true;
    if (activeFilter === "digital" && title.includes("թվային")) return true;

    return false;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">Բեռնվում է...</p>
      </div>
    );
  }

  if (filteredItems.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">
          Այս կատեգորիայում տեղեկատվություն չկա:
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-12">
      {filteredItems.map((item) => (
        <InfoCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InfoList;
