"use client";

import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { Loader } from "lucide-react";
import { NextPage } from "next";
import { useState } from "react";

type MeetingProps = {
  params: {
    id: string;
  };
};

const Meeting: NextPage<MeetingProps> = ({ params }) => {
  const {isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);
  if (!isLoaded || isCallLoading) return <Loader />

  return (
    <main className="h-screen w-full">
      {call && (
        <StreamCall call={call}>
          <StreamTheme>
            {!isSetupComplete ? <MeetingSetup setIsSetupComplete = {setIsSetupComplete} /> : <MeetingRoom />}
          </StreamTheme>
        </StreamCall>
      )}
    </main>
  );
};

export default Meeting;
