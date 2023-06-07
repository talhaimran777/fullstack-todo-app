import { UserProfile, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

const Page = () => {
  return (
    <div className="py-4 flex flex-col justify-center items-center min-h-screen w-screen">
      <Link className="mb-4" href={"/"}>Go to home</Link>
      <SignedIn>
        <UserProfile path="/user-profile" />
      </SignedIn>
    </div>
  );
};

export default Page;
