import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ListProduct from "../components/ListProduct";
import { withIronSessionSsr } from "iron-session/next";
import { getUserProducts, getUserFromSession } from "../lib/database";

const MyProfile = ({ user, purchases }) => {
  console.log(purchases);
  return (
    <div>
      <Navigation session={user} />
      <div className="hero-image w-full h-80 relative">
        <Image
          src={"/profilebg.jpeg"}
          alt="background iamge"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="user-info px-5 md:px-10">
        <div className="content relative -top-36 -mb-36">
          <div className="bg-neutral-200 p-5 profile-picture h-44 md:h-52 w-44 md:w-52 relative rounded-full border-8 border-white shadow-lg">
            <Image
              src={user.profilePicture}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="name pt-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-primary tracking-tighter">
              {user ? `${user.name} ${user.lastName}` : "Loading..."}
            </h1>
          </div>
          <div className="stats text-teal-500 flex justify-start items-center gap-4 font-tertiary">
            <div className="balance flex justify-start items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-base md:text-lg pt-1">
                {user &&
                  Intl.NumberFormat("en-US", {
                    style: "currency",
                    notation: "compact",
                    currency: "USD",
                  })
                    .format(user.balance)
                    .replace("$", "")}
              </span>
            </div>
            <div className="join-date flex justify-start items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-base md:text-lg pt-1">
                {user && new Date(user.joinDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="purchased-products py-5 pb-10">
          <div className="title">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary tracking-tighter pb-2">
              Purchased Products
            </h1>
          </div>
          <div className="products grid grid-cols-1 md:grid-cols-4 gap-4">
            {purchases.length > 0 ? (
              purchases.map((purchase) => {
                const { Product } = purchase;
                return (
                  <ListProduct
                    key={Product.id}
                    id={Product.id}
                    name={Product.name}
                    price={Product.price}
                    image={Product.image}
                  />
                );
              })
            ) : (
              <div className="no-products w-full bg-gray-100 rounded-xl col-span-4 p-5 flex flex-col justify-center items-center min-h-[50vh]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20 text-teal-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <h1 className="text-xl font-medium font-sans">
                  No products purchased yet
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session.user) {
      try {
        const user = await getUserFromSession(req.session.user.id);
        const purchases = await getUserProducts(user.id);

        return {
          props: {
            user: JSON.parse(JSON.stringify(user)),
            purchases: JSON.parse(JSON.stringify(purchases)),
          },
        };
      } catch (e) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }

    return {
      redirect: {
        destination: "/error?error=not-logged-in",
      },
    };
  },
  {
    cookieName: "coding_academy_session",
    password: process.env.COOKIE_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
