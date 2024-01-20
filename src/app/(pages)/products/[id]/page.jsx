// import { getMetaById } from '@/fetch/serverFetch';
import ProductId from '@/screens/products/ProductId';
import React from 'react';

const ProductIdPage = async ({ params }) => {
  // const product = await getMetaById(params.id);
  return (
    <>
      <ProductId params={params} />
    </>
  );
};

export default ProductIdPage;
