import RootLayout from '../../pages/Root';
import ErrorPage from '../../pages/Error';
import { checkAuthLoader, tokenLoader } from '../../hooks/auth';

import SuppliersPage , { loader as SuppliersLoader }from '../../pages/Repository/supplier/Suppliers';
import SupplierDetailPage , {
  loader as SupplierDetailLoader,
  action as deleteSupplierAction
} from '../../pages/Repository/supplier/SupplierDetail';
import EditSupplierPage from '../../pages/Repository/supplier/EditSupplier';
import { action as manipulateSupplierAction } from '../../components/Repository/supplier/SupplierForm';
import NewSupplierPage from '../../pages/Repository/supplier/NewSupplier';


import CategoriesPage , { loader as CategoriesLoader } from '../../pages/Repository/category/Categories';
import NewCategoryPage from '../../pages/Repository/category/NewCategory';
import CategoryDetailPage , {
  loader as CategoryDetailLoader,
  action as deleteCategoryAction
} from '../../pages/Repository/category/CategoryDetail';
import EditCategoryPage from '../../pages/Repository/category/EditCategory';
import { action as manipulateCategoryAction } from '../../components/Repository/category/CategoryForm';

import NewProductPage from '../../pages/Repository/product/NewProduct';
import ProductsPage , { loader as ProductsLoader } from '../../pages/Repository/product/Products';
import ProductDetailPage , {
  loader as ProductDetailLoader,
  action as deleteProductAction
} from '../../pages/Repository/product/ProductDetail';
import EditProductPage from '../../pages/Repository/product/EditProduct';
import { action as manipulateProductAction } from '../../components/Repository/product/ProductForm';

import { productAttribute } from './productAttribute';
import React from 'react';
import NewProductDetail from '../../pages/Repository/product/productDetail/NewProductDetail';
import  { action as manipulateProductDetailAction } from '../../components/Repository/product/productDetail/ProductDetailNewForm';

import EditProductDetailPage, {
  loader as DetailOfProductAttributeLoader
} from '../../pages/Repository/product/productDetail/EditProductDetail';
import { action as EditProductDetailAction } from '../../components/Repository/product/productDetail/ProductDetailEditForm';

export const repositoryRoute = {
  path: '/repository',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  loader:tokenLoader,
  children: [
    {
      path: '/repository/suppliers',
      children: [
        {
          index: true,
          element: <SuppliersPage />,
          loader: SuppliersLoader,
        },
        {
          path: '/repository/suppliers/new',
          element: <NewSupplierPage />,
          loader: checkAuthLoader,
          action: manipulateSupplierAction,
        },
        {
          path: '/repository/suppliers/supplier-detail',
          id: 'supplier-detail',
          loader: SupplierDetailLoader,
          children: [
            {
              path: '/repository/suppliers/supplier-detail/:supplierId',
              element: <SupplierDetailPage />,
              action: deleteSupplierAction,
              loader: checkAuthLoader,
            },
            {
              path: '/repository/suppliers/supplier-detail/edit/:supplierId',
              element: <EditSupplierPage />,
              action: manipulateSupplierAction,
              loader: checkAuthLoader,
            },
          ],
        }
      ]
    },
    {
      path: '/repository/categories',
      children: [
        {
          index: true,
          element: <CategoriesPage />,
          loader: CategoriesLoader,
        },
        {
          path: '/repository/categories/new',
          element: <NewCategoryPage />,
          loader: checkAuthLoader,
          action: manipulateCategoryAction,
        },
        {
          path: '/repository/categories/category-detail',
          id: 'category-detail',
          loader: CategoryDetailLoader,
          children: [
            {
              path: '/repository/categories/category-detail/:categoryId',
              element: <CategoryDetailPage />,
              action: deleteCategoryAction,
              loader: checkAuthLoader,
            },
            {
              path: '/repository/categories/category-detail/edit/:categoryId',
              element: <EditCategoryPage />,
              action: manipulateCategoryAction,
              loader: checkAuthLoader,
            },
          ],
        },
      ],
    },
    {
      path: '/repository/products',
      children: [
        {
          index: true,
          element: <ProductsPage />,
          loader: ProductsLoader,
        },
        {
          path: '/repository/products/new',
          children: [
            {
              index: true,
              element: <NewProductPage />,
              loader: checkAuthLoader,
              action: manipulateProductAction,
            },
            {
              path: '/repository/products/new/newDetail/:productId',
              element: <NewProductDetail />,
              loader: checkAuthLoader,
              action: manipulateProductDetailAction,
            },
          ],
        },
        {
          path: '/repository/products/product-detail',
          id: 'product-detail',
          loader: ProductDetailLoader,
          children: [
            {
              path: '/repository/products/product-detail/:productId',
              element: <ProductDetailPage />,
              action: deleteProductAction,
              loader: checkAuthLoader,
            },
            {
              path: '/repository/products/product-detail/edit/:productId',
              element: <EditProductPage />,
              action: manipulateProductAction,
              loader: checkAuthLoader,
            },
          ],
        },
        {
          path: '/repository/products/product-detail/editDetail/:detailId',
          element: <EditProductDetailPage />,
          action: EditProductDetailAction,
          loader: DetailOfProductAttributeLoader,
        },
        productAttribute,
      ],
    },
  ],
};
