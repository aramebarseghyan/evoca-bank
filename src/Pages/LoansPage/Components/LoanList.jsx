import React, { useState, useEffect } from "react";
import LoanProductCard from "./LoanProductCard";
import { db } from "../../../firebase"
import { collection, getDocs } from "firebase/firestore";

const LoanList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Функция для получения данных из базы Firebase
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        // Делаем запрос к коллекции 'loans' в Firestore
        const querySnapshot = await getDocs(collection(db, "loans"));

        // Превращаем полученные документы в удобный массив объектов
        const loansList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(loansList);
      } catch (error) {
        console.error("Ошибка при загрузке данных из Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  // Если данные еще грузятся
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">Загрузка карточек...</p>
      </div>
    );
  }

  // Если в базе пусто
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">
          В базе данных пока нет карточек.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-6">
      {/* Перебираем все карточки из Firebase и выводим их через компонент */}
      {products.map((product) => (
        <LoanProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LoanList;
