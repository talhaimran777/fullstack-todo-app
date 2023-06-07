import { SignUp } from "@clerk/nextjs";

type Props = {
  searchParams: {
    redirectUrl: string;
  };
};

const Page = async ({ searchParams }: Props) => {
  const { redirectUrl } = searchParams;

  return (
    <div className="flex justify-center items-center p-4 h-screen w-screen">
      <SignUp redirectUrl={redirectUrl || "/"} />
    </div>
  );
};

export default Page;
