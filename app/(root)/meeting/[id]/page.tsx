import React from "react";

interface MeetingProps {
  params: {
    id: string;
  };
}

const Meeting: React.FC<MeetingProps> = ({ params }) => {
  return <div>Meeting Room: # {params.id}</div>;
};

// Export the component as the default export
export default Meeting;

// Use the following function to specify dynamic route segments (if needed):
export const dynamic = "force-dynamic"; // This will ensure the component is rendered dynamically
