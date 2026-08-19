import React, { useState, useEffect } from "react";
import LoanProductCard from "./LoanProductCard";
import { db } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const LoanList = ({ activeFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "loans"));
        const loansList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(loansList);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "all") return true;
    if (product.type === activeFilter || product.categoryId === activeFilter)
      return true;

    const title = (product.title || "").toLowerCase();

    if (activeFilter === "online" && title.includes("օնլայն")) return true;
    if (
      activeFilter === "mortgage" &&
      (title.includes("հիփոթեք") || title.includes("հիփոթեքային"))
    )
      return true;
    if (
      activeFilter === "auto" &&
      (title.includes("ավտո") || title.includes("մեքենա"))
    )
      return true;
    if (activeFilter === "secured" && title.includes("գրավով")) return true;
    if (activeFilter === "unsecured" && title.includes("անգրավ")) return true;
    if (activeFilter === "credit" && title.includes("ապառիկ")) return true;

    return false;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">Բեռնվում է...</p>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">
          Այս կատեգորիայում դեռ վարկեր չկան.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-12">
      {filteredProducts.map((product) => (
        <LoanProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LoanList;
