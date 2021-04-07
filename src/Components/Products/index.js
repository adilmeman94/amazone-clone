import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";
import "./styles.css";

export const products = [
  {
    id: "1",
    name: "Iphone 6",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: 45000,
    brand: "Apple",
    rating: 4.5,
    numReviews: 10,
    description:
      'It is a high quality product "Iphone6" as a handset. It belongs to a brand name "Apple". and people also loves features of this mobile',
  },
  {
    id: "2",
    name: "Samsung S20",
    category: "Mobile",
    image:
      "https://images.samsung.com/is/image/samsung/hk-en-galaxy-s20-5g-g981-sm-g9810zadtgy-cosmicgray-223425255?$LazyLoad_Home_IMG$",
    price: 30000,
    brand: "Samsung",
    rating: 4.0,
    numReviews: 10,
    description:
      'It is a high quality product "Samsung S20" as a handset. It belongs to a brand name "Samsung". and people also loves features of this mobile',
  },
  {
    id: "3",
    name: "Huawei P20",
    category: "Mobile",
    image:
      "https://www.searchpng.com/wp-content/uploads/2019/02/HUAWEI-P20-715x856.png",
    price: 19500,
    brand: "Huawai",
    rating: 4.8,
    numReviews: 17,
    description:
      'It is a high quality product "Huawei P20" as a handset. It belongs to a brand name "Huawei". and people also loves features of this mobile',
  },
  {
    id: "4",
    name: "asus-zenbook",
    category: "Laptop",
    image:
      "https://images.anandtech.com/doci/15377/ZenBook-Duo_UX481_10th-Gen-Core-i7-with-ScreenPad-Plus-678_678x452.jpg",
    price: 55000,
    brand: "Asus",
    rating: 4.5,
    numReviews: 14,
    description:
      'It is a high quality product "asus-zenbook" as a Laptop. It belongs to a brand name "Asus". and people also loves features of this laptop',
  },
  {
    id: "5",
    name: "HP Spectre x360",
    category: "Laptop",
    image:
      "https://cnet1.cbsistatic.com/img/Lt6RzR_6J4woW1QgVpaScsXCnm8=/1200x675/2019/11/27/bb5014cc-9049-4ccf-b946-f8cc33449b8e/hp-spectre-x360-13-late-2019-20.jpg",
    price: 65000,
    brand: "HP",
    rating: 4.5,
    numReviews: 10,
    description:
      'It is a high quality product "HP Spectre x360" as a Laptop. It belongs to a brand name "HP". and people also loves features of this laptop',
  },
  {
    id: "6",
    name: "Lenovo Ideapad",
    category: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8wCupwtVZ7zmDjFS08gS5LmURb1hb-wfPQ&usqp=CAU",
    price: 48000,
    brand: "Lenovo",
    rating: 4.5,
    numReviews: 15,
    description:
      'It is a high quality product "Lenovo Ideapad" as a Laptop. It belongs to a brand name "Lenovo". and people also loves features of this laptop',
  },
];

export default function Products(props) {
  console.log("Products props", props);

  const productsContainer = products.map((item, index) => {
    return (
      <Link
        key={item.id}
        to={{
          pathname: "/products/" + item.id,
          state: item,
        }}
      >
        <ProductItem product={item} />
      </Link>
    );
  });
  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">{productsContainer}</div>
    </div>
  );
}
