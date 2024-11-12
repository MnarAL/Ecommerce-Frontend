import React from 'react'

const UserRoute = () => {
   // // const isSignedIn = true ;
  // return isSignedIn ? <Outlet/> : <SignIn/>
      const isAdmin = false ;
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/productList",
          element: <ProductsList />,
        },
        { path: "/productDetails/:id",
           element: <ProductDetails /> },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />

    </div>
  ) }


export default UsertRoute
