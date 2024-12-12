import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome to the world of nextjs</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button>Logout</Button>
      </form>
    </>
  );
}

export default Home;
