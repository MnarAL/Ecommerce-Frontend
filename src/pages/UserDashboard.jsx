import React, { useState } from "react";
import ProductList from "./ProductList"; // المكون الجاهز لعرض المنتجات
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";

function UserDashboard() {
  const [cart, setCart] = useState([]); // حالة السلة لتخزين المنتجات التي يختارها المستخدم
  const navigate = useNavigate();

  // دالة لإضافة المنتج إلى السلة
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // إضافة المنتج إلى السلة
    console.log("Product added to cart:", product);
  };

  // دالة للتنقل إلى صفحة البروفايل
  const goToProfile = () => {
    navigate("/profile"); // الانتقال إلى مكون البروفايل
  };

  return (
    <div>
      <h1>لوحة تحكم المستخدم</h1>
      <button onClick={UserProfile}>الانتقال إلى البروفايل</button>
      <h2>قائمة المنتجات</h2>
      <ProductCard onAddToCart={handleAddToCart} />{" "}
      {/* تمرير دالة إضافة المنتج للسلة */}
      <h2>السلة</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;
