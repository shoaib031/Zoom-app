// app/meeting/[id]/page.tsx
import { NextPage } from "next";

type MeetingProps = {
  params: {
    id: string;
  };
};

const Meeting: NextPage<MeetingProps> = ({ params }) => {
  return <div>Meeting Room: #{params.id}</div>;
};

export default Meeting;
