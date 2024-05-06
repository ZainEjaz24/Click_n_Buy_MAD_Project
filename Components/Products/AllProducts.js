import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import productStyle from "./ProductStyle";
import { productContext } from "../Context/Context";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

export default function AllProducts() {
  const value = useContext(productContext);

  return (
    <View style={{ gap: 30, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
        <Pressable style={productStyle.selectProduct}>
          <Text style={productStyle.allproductText}>All</Text>
        </Pressable>
        <Pressable style={productStyle.selectProduct}>
          <Text style={productStyle.allproductText}>Popular</Text>
        </Pressable>
        <Pressable style={productStyle.selectProduct}>
          <Text style={productStyle.allproductText}>Latest</Text>
        </Pressable>
        <Pressable style={productStyle.selectProduct}>
          <Text style={productStyle.allproductText}>Best Price</Text>
        </Pressable>
      </View>

      <View style={productStyle.allproductView}>
        {value.all_products.map((product, i) => {
          return (
            <ProductDisplay
              id={product.id}
              name={product.name}
              image={product.image}
              store={product.store}
              price={product.price}
              oldPrice={product.oldPrice}
              key={i}
            />
          );
        })}
      </View>
    </View>
  );
}

// import React, { useEffect, useState } from "react";
// import { View, Text, Pressable } from "react-native";
// import productStyle from "./ProductStyle";
// import ProductDisplay from "../ProductDisplay/ProductDisplay";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase"; // Import your Firestore instance

// export default function AllProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const productsCollectionRef = collection(db, "products");
//       const snapshot = await getDocs(productsCollectionRef);
//       const productsData = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productsData);
//     } catch (error) {
//       console.error("Error fetching products:", error.message);
//     }
//   };

//   return (
//     <View style={{ gap: 30, alignItems: "center", justifyContent: "center" }}>
//       <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
//         <Pressable style={productStyle.selectProduct}>
//           <Text style={productStyle.allproductText}>All</Text>
//         </Pressable>
//         <Pressable style={productStyle.selectProduct}>
//           <Text style={productStyle.allproductText}>Popular</Text>
//         </Pressable>
//         <Pressable style={productStyle.selectProduct}>
//           <Text style={productStyle.allproductText}>Latest</Text>
//         </Pressable>
//         <Pressable style={productStyle.selectProduct}>
//           <Text style={productStyle.allproductText}>Best Price</Text>
//         </Pressable>
//       </View>

//       <View style={productStyle.allproductView}>
//         {products.map((product) => (
//           <ProductDisplay
//             id={product.id}
//             name={product.name}
//             image={product.image}
//             store={product.store}
//             price={product.price}
//             oldPrice={product.oldPrice}
//             key={product.id} // Ensure each item has a unique key
//           />
//         ))}
//       </View>
//     </View>
//   );
// }
