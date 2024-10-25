import { NextPage } from "next";

const Meeting: NextPage<{ params: { id: string } }> = ({ params }) => {
  return <div>Meeting Room: #{params.id}</div>;
};

export default Meeting;
