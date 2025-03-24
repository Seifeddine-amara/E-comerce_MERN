import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { BASE_URL } from "../constants/baseUrl";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch( `${BASE_URL}/product`);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2}>
      {products.map((p) => (
          <Grid item md={4} key={p._id}>
            <ProductCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
