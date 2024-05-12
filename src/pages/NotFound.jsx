import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <section className="text-center flex flex-col pt-[200px] justify-center items-center h-96">
        <h3 className="text-3xl  mb-4">
          Ooh Sorry ! This page does not exist.
        </h3>
        <Link
          to="/"
          className="text-white bg-red-500 rounded-md px-10 py-2 mt-4"
        >
          Click here & Go back to the Home Page
        </Link>
      </section>
    </>
  );
}
