import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../layout/Dashboard/DashboardLayout'
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import ProductsList from '../pages/Admin/Products/ProductsList'
import ProductsDetails from '../pages/Admin/Products/ProductsDetails'
import AddColor from '../pages/Admin/Products/Color/AddColor'
import OrderList from '../pages/Admin/Order/OrderList'
import Theme from '../pages/Theme'
import ErrorPage from '../pages/Admin/Error/ErrorPage'
import CouponsList from '../pages/Admin/Coupons/CouponsList'
import CreateCoupon from '../pages/Admin/Coupons/CreateCoupon'
import OrderTracking from '../pages/Admin/Order/OrderTracking'
import BlogList from '../pages/Admin/Blogs/BlogList'
import BlogCategories from '../pages/Admin/Blogs/BlogCategories'
import BlogAdd from '../pages/Admin/Blogs/BlogAdd'
import BlogTags from '../pages/Admin/Blogs/BlogTags'
import UploadedFiles from '../pages/Admin/UploadedFiles/UploadedFiles'
import CampaignAdd from '../pages/Admin/Campaign/CampaignAdd'
import CampaignList from '../pages/Admin/Campaign/CampaignList'
import Banner from '../pages/Admin/Banner/Banner'
import UserList from '../pages/Admin/User/UserList'
import UserProfile from '../pages/Admin/User/UserProfile'
import UserProfileSettings from '../pages/Admin/User/UserProfileSettings'
import SignIn from '../pages/Admin/Auth/SignIn'
import SignUp from '../pages/Admin/Auth/SignUp'
import FrontendLayout from '../layout/Frontend/FrontendLayout'
import HomePage from '../pages/Frontend/Home/HomePage'
import Brand from '../pages/Admin/Products/Brand/Brand'
import PointOfSale from '../pages/Admin/POS/PointOfSale'
import Language from '../pages/Admin/Language/Language'
import DashboardForgotPassword from '../pages/Admin/Auth/DashboardForgotPassword'
import CategoriesV2 from '../pages/Admin/Products/Categories/CategoriesV2'
import EditCategoriesV2 from '../pages/Admin/Products/Categories/EditCategoriesV2'
import AddProductV2 from '../pages/Admin/Products/AddProductV2/AddProductV2'
import EditProductV2 from '../pages/Admin/Products/EditProductV2/EditProductV2'
import EditSize from '../pages/Admin/Products/Size/editSize'
import Unit from '../pages/Admin/Products/Units/Unit'
import AddVendor from '../pages/Admin/Vendor/AddVendor'
import VendorList from '../pages/Admin/Vendor/VendorList'
import VendorProfile from '../pages/Admin/Vendor/VendorProfile'
import AddCategoryV2 from '../pages/Admin/Products/Categories/AddCategoryV2'
import FrontendSignIn from '../pages/Frontend/Auth/SignIn'
import FrontendSignUp from '../pages/Frontend/Auth/SignUp'
import SeearchPage from '../pages/Frontend/SearchPage/search_page'
import AddSize from '../pages/Admin/Products/Size/AddSize'
// import Cart from '../pages/Frontend/userCartAndFav/Cart'
import Fav from '../pages/Frontend/userCartAndFav/Fav'
import Checkout from '../pages/Frontend/Checkout/Checkout'
import Store from '../pages/Frontend/Store/Store'
import CustomerDashboard from '../pages/Frontend/CustomerPanel/CustomerDashboard'
import CuctomerWallet from '../pages/Frontend/CustomerPanel/CuctomerWallet'
import CustomerWishlist from '../pages/Frontend/CustomerPanel/CustomerWishlist'
import CustomerProfile from '../pages/Frontend/CustomerPanel/CustomerProfile'
import CustomerOrder from '../pages/Frontend/CustomerPanel/CustomerOrder'
import CustomerPanel from '../pages/Frontend/CustomerPanel/CustomerPanel'
import MenCollection from '../pages/Frontend/MenCollection/MenCollection'
import WomenCollection from '../pages/Frontend/WomenCollection/WomenCollection'
import AccessoriesCollection from '../pages/Frontend/AccessoriesCollection/AccessoriesCollection'
import CategoryProducts from '../pages/Frontend/CategoryProducts/CategoryProducts'
import SingleProductDetails from '../pages/Frontend/Product/Single-Product-details'
import AdminProfileSettings from '../pages/Admin/AdminProfileSettings/AdminProfileSettings'

const FRONTEND_ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/product/:slug', element: <SingleProductDetails /> },
  { path: '/signin', element: <FrontendSignIn></FrontendSignIn> },
  { path: '/signup', element: <FrontendSignUp></FrontendSignUp> },
  { path: '/search', element: <SeearchPage></SeearchPage> },
  // { path: '/cart', element: <Cart></Cart> },
  { path: '/fav', element: <Fav></Fav> },
  { path: '/checkout', element: <Checkout></Checkout> },
  { path: '/store', element: <Store></Store> },
  { path: '/men-collection', element: <MenCollection></MenCollection> },
  { path: '/women-collection', element: <WomenCollection></WomenCollection> },
  { path: '/accessories', element: <AccessoriesCollection /> },
  { path: '/category/:slug', element: <CategoryProducts /> },
]

const CUSTOMER_PANEL_ROUTES = [
  { path: 'user/dashboard', element: <CustomerDashboard /> },
  { path: 'user/wallet', element: <CuctomerWallet /> },
  { path: 'user/orders', element: <CustomerOrder /> },
  { path: 'user/wishlist', element: <CustomerWishlist /> },
  { path: 'user/profile', element: <CustomerProfile /> },
]

const DASHBOARD_ROUTES = [
  { path: '/dashboard',element: <Dashboard />,},
  { path: 'dashboard/products-list', element: <ProductsList /> },
  { path: 'dashboard/add-product', element: <AddProductV2 /> },
  { path: 'dashboard/edit-product/:id', element: <EditProductV2 /> },
  { path: 'dashboard/products-details', element: <ProductsDetails /> },
  { path: 'dashboard/category', element: <CategoriesV2 /> },
  { path: 'dashboard/add-category', element: <AddCategoryV2 /> },
  { path: 'dashboard/categoryV2/edit/:id', element: <EditCategoriesV2 /> },
  { path: 'dashboard/brand', element: <Brand /> },
  { path: 'dashboard/unit', element: <Unit /> },
  { path: 'dashboard/size', element: <AddSize /> },
  {path: '/dashboard/attributes/edit/:attributeId',element: <EditSize />,},
  { path: 'dashboard/color', element: <AddColor /> },
  { path: 'dashboard/coupons-list', element: <CouponsList /> },
  { path: 'dashboard/create-coupon', element: <CreateCoupon /> },
  { path: 'dashboard/user-list', element: <UserList /> },
  { path: 'dashboard/user-profile', element: <UserProfile /> },
  { path: 'dashboard/userprofile-settings', element: <UserProfileSettings /> },
  { path: 'dashboard/add-vendor', element: <AddVendor /> },
  { path: 'dashboard/vendor-list', element: <VendorList /> },
  { path: 'dashboard/vendor-profile/:id', element: <VendorProfile /> },
  { path: 'dashboard/order-list', element: <OrderList /> },
  { path: 'dashboard/blog-list', element: <BlogList /> },
  { path: 'dashboard/blog-category', element: <BlogCategories /> },
  { path: 'dashboard/add-post', element: <BlogAdd /> },
  { path: 'dashboard/blog-tag', element: <BlogTags /> },
  { path: 'dashboard/banner', element: <Banner /> },
  { path: 'dashboard/uploaded-files', element: <UploadedFiles /> },
  { path: 'dashboard/campaign-add', element: <CampaignAdd /> },
  { path: 'dashboard/campaign-list', element: <CampaignList /> },
  { path: 'dashboard/settings', element: <AdminProfileSettings /> },
  { path: 'dashboard/settings/language', element: <Language /> },
  { path: 'dashboard/pos', element: <PointOfSale /> },
  { path: 'dashboard/theme', element: <Theme /> },
  { path: 'dashboard/order-tracking', element: <OrderTracking /> },
]

const AUTH_ROUTES = [
  { path: 'dashboard/signin', element: <SignIn /> },
  { path: 'dashboard/signup', element: <SignUp /> },
  {
    path: 'dashboard/signin/forgetpassword',
    element: <DashboardForgotPassword />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      ...FRONTEND_ROUTES,
      {
        path: '/',
        element: <CustomerPanel></CustomerPanel>,
        children: CUSTOMER_PANEL_ROUTES,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,

    children: DASHBOARD_ROUTES,
  },
  ...AUTH_ROUTES,
])

export default router
