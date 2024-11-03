import Dropzone from "@/components/Dropzone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firbase";
import { FileType } from "@/typing";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link';
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

async function Home() {
  const { userId } = auth();

  if (!userId) {
    return (
      <div className="border-t">
        <section className="container space-y-3 p-4 flex flex-col items-center text-center">
          <h2 className="text-xl">Sign In Atlas AI</h2>
          <h4 className="text-gray-200">
            <SignedOut>
              Please{" "}
              <SignInButton afterSignInUrl="" mode="modal">
                <span className="text-blue-500 underline hover:text-blue-200 transition duration-200 cursor-pointer">
                  sign in
                </span>
              </SignInButton>{" "}
            </SignedOut>
            to access your files and enjoy the entire Atlas AI experience.
          </h4>
        </section>
      </div>
    );
      }

  const docsResults = await getDocs(collection(db, "users", userId, "files"));
  const skeletonFiles = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
    status: doc.data().status
  }));

  return (
    <div className="border-t">
      <Dropzone />
      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Home;
