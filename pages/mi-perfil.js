import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import { useUserContext } from "../context/UserContext";

const MyProfile = () => {
  const { session, signOut } = useUserContext();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (session && session.userId) {
        const response = await fetch("/api/user/" + session.userId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const fetchedUser = await response.json();
        setUser(fetchedUser);
      }
    };
    fetchUser();
  }, [session]);

  return (
    <div>
      <Navigation />
      <div className="hero-image w-full h-80 relative">
        <Image
          src={"/desert.jpeg"}
          alt="background iamge"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="user-info px-5 md:px-10 ">
        <div className="content relative -top-36">
          <div className="profile-picture h-44 md:h-52 w-44 md:w-52 relative rounded-full border-8 border-white shadow-lg">
            <Image
              src={"/bear.jpeg"}
              alt="profile picture"
              layout="fill"
              className="rounded-full"
              objectFit="cover"
            ></Image>
          </div>
          <div className="name pt-4">
            <h1 className="text-xl md:text-4xl lg:text-6xl font-bold font-primary tracking-tighter">
              {user ? user.name : "Loading..."}
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
              <span className="text-base md:text-lg pt-1">{ user && new Date(user.joinDate).toLocaleDateString() }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
