import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-black text-2xl font-bold">
                Department of Industrial Development - NWP
              </h1>
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-4">
            <Link
              to="/add-applicant"
              className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add new applicant
            </Link>
            <Link
              to="/applicants"
              className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View All Applicants
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
