import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;

// reactnode type define krnai k liye jesai jsx, string, number
// RootLayout: A functional component that accepts a single prop called children.
// children: This is a special prop in React used to pass child elements into a component.
// nside RootLayout, it wraps the children inside a <main> element, which is often used to define the main content area in HTML for accessibility and layout purposes.
