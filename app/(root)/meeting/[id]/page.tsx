import React from "react";

interface MeetingProps {
  params: {
    id: string;
  };
}

const Meeting: React.FC<MeetingProps> = ({ params }) => {
  return <div>Meeting Room: # {params.id}</div>;
};

// Add getServerSideProps here, outside the Meeting component
export async function getServerSideProps(context: { params: { id: string } }) {
  return {
    props: {
      params: context.params,
    },
  };
}

export default Meeting;
