"use client"; // Ensure this runs only on the client

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}