import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserRound } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import supabase from "@/supabaseClient";

import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function UserPage() {
  const { id } = useParams();
  const [applicant, setApplicant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchApplicantDetails() {
      try {
        const { data, error } = await supabase
          .from("applicant")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.log("Error fetching data:", error.message);
        } else {
          setApplicant(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchApplicantDetails();
  }, [id]);

  const handleDeleteClick = async () => {
    try {
      const { error } = await supabase.from("applicant").delete().eq("id", id);
      if (error) {
        console.log("Error deleting applicant : ", error.message);
      } else {
        toast.success("Applicant Deleted Successfully");
        navigate("/applicants");
      }
    } catch (error) {
      console.log("Error deleting user:", error.message);
    }
  };

  const handleUpdateClick = () => {
    navigate(`/edit-applicant/${id}`);
  };

  if (!applicant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-hidden bg-white py-24 pr-36 pl-36 sm:py-32">
      <NavBar />
      <div className="px-4 sm:px-0 flex items-center">
        <UserRound className="mr-2 w-10 h-10 text-green-600" />
        <h3 className="text-lg pl-3 text-green-600 mr-8 font-bold leading-7 ">
          {applicant.name_with_initials}
        </h3>
        <Button
          className="bg-slate-700 mr-5 h-8 px-5"
          onClick={handleUpdateClick}
        >
          Update Applicant
        </Button>
        <Button className="bg-red-600 h-8 px-5" onClick={handleDeleteClick}>
          Delete Applicant
        </Button>
      </div>

      <div className="grid grid-cols-2">
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                සම්පූර්ණ නම
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.full_name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                පුද්ගලික ලිපිනය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.address}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                උපන් දිනය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.birthday}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                ජා.හැ.අංකය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.nic}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                සේවයට බැදුනු දිනය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.date_of_join}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                වයස
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.age}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                EPF අරමුදලට දායක වී තිබේද ?
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.epf ? "ඔව්" : "නැත"}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                ප්‍රතිලාභ මුදල් ලබාගෙන
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.beneifts ? "ඔව්" : "නැත"}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                සේව්‍ය අංකය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.server_num}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                සේව්‍ය අංකය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.worker_num}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                දුරකතන අංකය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.phone}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                බැංකු ගිණුම් අංකය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.bank_number}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                පුහුණුව ලබාගත් ආයතනය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.practise_center}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                සේවය කිරීමට අපේක්ෂිත අංශය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.department}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                සේවය කිරීමට අපේක්ෂිත ස්ථානය
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.work_location}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                යන්ත්‍ර අංකය(නිවෙස් තුල සේවය කරන්නේ නම්)
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {applicant.machine_num}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
