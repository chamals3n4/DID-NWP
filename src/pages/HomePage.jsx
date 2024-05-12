import NavBar from "@/components/NavBar";
import Footer from "../components/Footer";
import { CirclePlus } from "lucide-react";

const features = [
  {
    name: "Adding a New Applicant.",
    description:
      "To add a new applicant, simply click the 'Add New Applicant' button located at the top of the page. This action will open a form where you can input the necessary information. After filling out the form, submit it to register the new applicant.",
  },
  {
    name: "Viewing All Applicants.",
    description:
      "You can view all registered applicants by clicking the 'View All Applicants' button at the top of the page.",
  },
  {
    name: "Filtering Applicants.",
    description:
      "Within the 'View All Applicants' section, you'll find filtering options. You can filter applicants by department, age, and NIC (National Identity Card) number. Utilize these filters to refine your search. Additionally, clicking on the applicant's name will redirect you to a page containing all relevant information about that specific applicant",
  },
  {
    name: "Update Applicant.",
    description:
      "To update applicant information, navigate to the 'View All Applicants' section. Click on the name of the applicant you wish to update. This action will redirect you to another page where you can view all relevant information about the selected applicant. On this page, you will find an 'Update Applicant' button at the top. Click this button to access a form pre-filled with the applicant's current information. You can then edit the form as needed to update the applicant's details. After making the necessary changes, resubmit the form to save the updated information",
  },
  {
    name: "Delete Applicant.",
    description:
      "Similar to updating applicant information, navigate to the 'View All Applicants' section and click on the name of the applicant you wish to delete. You will be redirected to another page displaying the applicant's details. On this page, you will find an 'Delete Applicant' button at the top. Clicking this button will give you the option to delete the applicant. Confirm the deletion, and the selected applicant will be removed from the system.",
  },
];

export default function HeroInstructions() {
  return (
    <>
      <div className="overflow-hidden bg-white  pr-36 pl-36 pt-[110px] pb-10">
        <NavBar />
        <div className="bg-green-50 px-10 py-10 rounded-lg">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to DIDs Application Management System
          </p>
          <p className="mt-4 text-md leading-8 font-bold text-red-500">
            Note: Currently this webapp doesn't work well on phones or tablets.
            Please use a Desktop or Laptop instead
          </p>

          <p className="mt-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            User Guide: Managing Applicants
          </p>

          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <CirclePlus
                    className="absolute left-1 top-1 h-5 w-5 text-green-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Footer />
      </div>
    </>
  );
}
