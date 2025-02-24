import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import authOptions
import Header from "@/components/Header";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";
import Main from "@/components/Main";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) return <Login />;
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
