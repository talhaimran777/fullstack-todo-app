import { SignIn } from "@clerk/nextjs";

type Props = {
  searchParams: {
    redirectUrl: string;
  };
};

const Page = async ({ searchParams }: Props) => {
  const { redirectUrl } = searchParams;

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <SignIn redirectUrl={redirectUrl || "/"} />
        </div>
      </div>
    </section>
  );
};

export default Page;
