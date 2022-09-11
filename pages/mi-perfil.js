import React from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { withIronSessionSsr } from "iron-session/next";
import { getUserProducts, getUserFromSession } from "../lib/database";

const MyProfile = ({ user, purchases }) => {
  console.log(purchases[0].Product.name);
  return (
    <div>
      <Navigation session={user} />
      <div className="hero-image w-full h-80 relative">
        <Image
          src={"/moon.jpeg"}
          alt="background iamge"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="user-info px-5 md:px-10">
        <div className="content relative -top-36">
          <div className="bg-neutral-200 p-5 profile-picture h-44 md:h-52 w-44 md:w-52 relative rounded-full border-8 border-white shadow-lg grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-teal-500"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
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
          <div className="purchased-products py-5">
            <div className="title">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary tracking-tighter pb-2">
                Purchased Products
              </h1>
            </div>
            <div className="products grid grid-cols-2 md:grid-cols-4 gap-4">
              {purchases.map((purchase) => {
                const { Product } = purchase;
                return (
                  <div
                    key={purchase.id}
                    className="product bg-gray-100 p-5 grid place-items-center"
                  >
                    <Image
                      src={Product.image}
                      alt="Product image"
                      height={100}
                      width={100}
                      objectFit={"cover"}
                    />
                    <h1 className="text-2xl font-bold font-secondary">
                      {purchase.Product.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session.user) {
      const user = await getUserFromSession(req.session.user.id);
      const purchases = await getUserProducts(user.id);

      return {
        props: {
          user: JSON.parse(JSON.stringify(user)),
          purchases: JSON.parse(JSON.stringify(purchases)),
        },
      };
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
