import RootLayout from '../../pages/Repository/Root';
import ErrorPage from '../../pages/Repository/Error';
import { checkAuthLoader, tokenLoader } from '../auth';

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

export const repositoryRoute = {
  path: '/repository',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
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
          element: <NewProductPage />,
          loader: checkAuthLoader,
          action: manipulateProductAction,
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
      ],
    },
  ],
};
