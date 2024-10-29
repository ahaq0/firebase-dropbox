import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div
        className="flex flex-col lg:flex-row items-center bg-[#1A1D23]
dark:bg-gray-900"
      >
        <div
          className="p-10 flex flex-col bg-[#1A1D23]
dark:bg-gray-900 text-gray-100 space-y-5"
        >
          <h1 className="text-5xl font-bold">
            Not Toxic AI
            <br />
            <br />
            All your AI labelling needs. All in one place
          </h1>
          <p className="pb-20">
            Get all of your AI data labelled and validated for up to 20x accuracy gains.
          </p>
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-[#00ADB5] hover:bg-[#00A1AB] p-5 w-fit text-gray-900 font-semibold rounded"
          >
            Get started for free
            <ArrowRight className="ml-10 text-gray-900" />
          </Link>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5 text-gray-100">Disclaimer</p>
      <p className="text-center font-light p-2 text-gray-300">
        Our AI Labelling is so good it might be illegal.
      </p>
      <p className="text-center font-light p-2 text-gray-300">
        Use at your own risk.
      </p>
    </main>
  );
}
