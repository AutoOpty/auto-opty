"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GetData } from "@/fetch/clientFetch";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();
  const { data, mutate, isLoading } = GetData();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (
    session.status === "authenticated" &&
    session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN
  ) {
    router.push("/");
  }

  if (
    session.status === "authenticated" &&
    session.data.user.email === process.env.NEXT_PUBLIC_ADMIN
  ) {
    return (
      <div>
        Dashboard
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => {
            return (
              <div key={index}>
                <Link href={`/dashboard/${item._id}`}>{item.article}</Link>
              </div>
            );
          })
        )}
      </div>
    );
  }
};

export default Dashboard;
