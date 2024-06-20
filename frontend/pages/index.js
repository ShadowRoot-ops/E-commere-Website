import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({ products }) {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromApi("/api/products");
  //   setData(data);
  // };
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* headiing an paragragh start */}
        <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
            DAMN: Elevate Your Street Style{" "}
          </div>
          <div className='text-md md:text-xl'>
            Whether you're strolling through the city or hitting up the
            trendiest hotspots, DAMN jackets provide the perfect finishing touch
            to any outfit. Our commitment to using premium materials ensures
            durability and longevity, ensuring your style remains timeless.
          </div>
        </div>
        {/* headiing an paragragh end */}

        {/* Product grid start */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* Product grid end */}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
