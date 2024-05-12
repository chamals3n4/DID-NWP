import { useState, useEffect } from "react";

import supabase from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";

export default function Applicants() {
  const [applicants, setApplicants] = useState([]);

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedAgeRange, setSelectedAgeRange] = useState("");
  const [nicFilter, setNicFilter] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchApplicants() {
      try {
        const { data, error } = await supabase.from("applicant").select("*");

        if (error) {
          console.error("Error fetching data:", error.message);
        } else {
          setApplicants(data || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchApplicants();
  }, []);

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleAgeRangeChange = (e) => {
    setSelectedAgeRange(e.target.value);
  };

  const handleNicFilterChange = (e) => {
    setNicFilter(e.target.value);
  };

  const filterApplicants = () => {
    let filtered = applicants;

    //Login for filtering departments
    if (selectedDepartment) {
      filtered = filtered.filter(
        (applicant) => applicant.department === selectedDepartment
      );
    }

    //Logic for filtering Age
    if (selectedAgeRange) {
      const [minAge, maxAge] = selectedAgeRange.split("-");
      filtered = filtered.filter((applicant) => {
        const age = applicant.age; // Assuming 'age' is the field in your database
        return age >= parseInt(minAge, 10) && age <= parseInt(maxAge, 10);
      });
    }

    //Login for filtering users typin nic
    if (nicFilter) {
      filtered = filtered.filter((applicant) =>
        applicant.nic.includes(nicFilter)
      );
    }

    return filtered;
  };

  const ageRanges = [
    { label: "13-29", value: "13-29" },
    { label: "30-39", value: "30-39" },
    { label: "40-49", value: "40-49" },
    { label: "50-59", value: "50-59" },
    { label: "60-69", value: "60-69" },
    { label: "70 and up", value: "70-" },
  ];

  const filteredApplicants = filterApplicants();

  return (
    <div className="overflow-hidden bg-white py-24 pr-36 pl-36 mb-10 sm:py-32">
      <NavBar />
      <div className="sm:col-span-3">
        <label
          htmlFor="department"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ආයතන අනුව තෝරන්න
        </label>
        <div className="mt-2">
          <select
            id="department"
            name="department"
            autoComplete="department-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={handleDepartmentChange}
            value={selectedDepartment}
          >
            <option value="">සියලු ආයතන</option>
            <option value="පේෂ">පේෂ</option>
            <option value="වඩු">වඩු</option>
            <option value="කොහු">කොහු</option>
            <option value="මැටි">මැටි</option>
            <option value="බතික්">බතික්</option>
            <option value="හණ">හණ</option>
            <option value="ජනකලා">ජනකලා</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3 mt-4">
        <label
          htmlFor="ageRange"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          වයස අනුව තෝරන්න
        </label>
        <div className="mt-2">
          <select
            id="ageRange"
            name="ageRange"
            autoComplete="age-range"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={handleAgeRangeChange}
            value={selectedAgeRange}
          >
            <option value="">සියලු වයස් සීමාවන්</option>
            {ageRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sm:col-span-3 mt-4">
        <label
          htmlFor="nicFilter"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ජා.හැ.අංකය ඇතුලත් කරන්න
        </label>
        <div className="mt-2">
          <input
            id="nicFilter"
            type="text"
            autoComplete="nic-filter"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={handleNicFilterChange}
            value={nicFilter}
          />
        </div>
      </div>

      <Table className="mt-5">
        <TableCaption>All Listed Applicants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>මුලකුරු සමග නම</TableHead>
            <TableHead>අංශය</TableHead>
            <TableHead>දුරකතන අංකය</TableHead>
            <TableHead>ලිපිනය</TableHead>
            <TableHead>ජා.හැ.අංකය</TableHead>
            <TableHead>සේවයට බැදුනු දිනය</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredApplicants.map((applicant, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium w-[200px]">
                <Link to={`/applicants/${applicant.id}`}>
                  {applicant.name_with_initials}
                </Link>
              </TableCell>
              <TableCell>
                <Link to={`/applicants/${applicant.id}`}>
                  {applicant.department}
                </Link>
              </TableCell>
              <TableCell>
                <Link to={`/applicants/${applicant.id}`}>
                  {applicant.phone}
                </Link>
              </TableCell>
              <TableCell>
                <Link to={`/applicants/${applicant.id}`}>
                  {applicant.address}
                </Link>
              </TableCell>
              <TableCell>
                <Link to={`/applicants/${applicant.id}`}>{applicant.nic}</Link>
              </TableCell>
              <TableCell>
                <Link to={`/applicants/${applicant.id}`}>
                  {applicant.date_of_join}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
