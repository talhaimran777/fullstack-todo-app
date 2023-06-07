import { UserProfile, SignedIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <SignedIn>
        <UserProfile path="/user-profile" />
      </SignedIn>
    </div>
  );
};

export default Page;
