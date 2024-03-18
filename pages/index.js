import Image from "next/image";
import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);
  return (
    <div className="p-3 bg-white border-b-2">
      <div className="max-w-[1140px] m-auto justify-between flex items-center">
        <div className="flex gap-5">
          <Link href="/" className="sm:inline-block">
            <div>Logo</div>
          </Link>
        </div>
        <div className="gap-8 sm:flex">
          <div className="flex justify-end gap-6 sm:gap-8">
            <div
              className="cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              {session ? (
                <div>
                  <Image
                    width={250}
                    height={250}
                    src={session?.user?.image}
                    alt="profilna slika"
                    className="rounded-full w-[30px]"
                  />
                </div>
              ) : (
                <div>Profile</div>
              )}
              {visible && (
                <div className="absolute z-10 bg-white p-2 ml-[-255px] shadow-xl w-[300px] mt-2">
                  {session ? (
                    <ul className="space-y-1">
                      <li
                        onClick={() => signOut()}
                        className="flex hover:bg-slate-100 cursor-pointer rounded-sm p-1"
                      >
                        <span>Sign out</span>
                      </li>
                    </ul>
                  ) : (
                    <div className={`p-1`}>
                      <div
                        onClick={() => signIn()}
                        className="p-1 mb-1 hover:bg-gray-100"
                      >
                        <button>Sign up</button>
                      </div>
                      <div
                        onClick={() => signIn()}
                        className="p-1 hover:bg-gray-100"
                      >
                        <button>Sign in</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
