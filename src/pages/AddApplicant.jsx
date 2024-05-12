import { useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import supabase from "@/supabaseClient";
import NavBar from "@/components/NavBar";

export default function AddJob() {
  const [fullName, setFullName] = useState("");
  const [nameWithInitials, setNameWithInitials] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nic, setNic] = useState("");
  const [dateOfJoin, setDateOfJoin] = useState("");
  const [phone, setPhone] = useState("");
  const [bankNumber, setBankNumber] = useState("");
  const [practiseCenter, setPractiseCenter] = useState("");

  const [department, setDepartment] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [machineNum, setMachineNum] = useState("");
  const [serverNum, setServerNum] = useState("");
  const [workerNum, setWorkerNum] = useState("");
  const [epf, setEpf] = useState(false);
  const [benefits, setBenefits] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const birthDate = dayjs(birthday);
    const today = dayjs();
    const age = today.diff(birthDate, "years");

    const newApplicant = {
      full_name: fullName,
      name_with_initials: nameWithInitials,
      address: address,
      birthday: birthday,
      nic: nic,
      date_of_join: dateOfJoin,
      phone: phone,
      bank_number: bankNumber,
      practise_center: practiseCenter,
      department: department,
      work_location: workLocation,
      machine_num: machineNum,
      server_num: serverNum,
      worker_num: workerNum,
      epf: epf,
      benefits: benefits,
      age: age,
    };

    // console.log(newApplicant);

    try {
      const { data, error } = await supabase
        .from("applicant")
        .insert([newApplicant])
        .select();
      if (error) {
        console.log("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } catch (error) {
      console.log("Error inserting data:", error.message);
    }

    toast.success("Application Added Successfully");
    return navigate("/applicants");
  };

  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">
      <NavBar />
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl pt-9 text-start pl-8">
        <h2 className="text-3xl font-bold tracking-tight text-ey-black sm:text-4.5xl">
          නව අයදුම්කරුවෙකු ඇතුළත් කරන්න
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          සියලු දත්ත ඇතුළත් කර පහල ඇති Submit the Application Button එක click
          කරන්න
        </p>
      </div>
      <div className="flex items-center py-3 justify-center h-full">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Full Name */}
                <div className="col-span-full">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    සම්පූර්ණ නම
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Name with initials */}
                <div className="col-span-full">
                  <label
                    htmlFor="nameWithInitials"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    මුලකුරු සමග නම
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nameWithInitials"
                      value={nameWithInitials}
                      onChange={(e) => setNameWithInitials(e.target.value)}
                      id="nameWithInitials"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="col-span-full">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    පුද්ගලික ලිපිනය
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      autoComplete="address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Birthday */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    උපන් දිනය
                  </label>

                  <div className="mt-2">
                    <input
                      type="date"
                      placeholder="John Doe"
                      name="birthday"
                      id="birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* NIC */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="nic"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ජා.හැ. අංකය
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="nic"
                      id="nic"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Date of Join */}
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="dateOfJoin"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    සේවයට බැදුනු දිනය
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="dateOfJoin"
                      id="dateOfJoin"
                      value={dateOfJoin}
                      onChange={(e) => setDateOfJoin(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    දුරකතන අංකය
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Bank Number */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="bankNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    බැංකු ගිණුම් අංකය
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="bankNumber"
                      id="bankNumber"
                      value={bankNumber}
                      onChange={(e) => setBankNumber(e.target.value)}
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Practised Center */}
                <div className="col-span-full">
                  <label
                    htmlFor="practiseCenter"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    පුහුණුව ලබාගත් ආයතනය
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="practiseCenter"
                      id="practiseCenter"
                      value={practiseCenter}
                      onChange={(e) => setPractiseCenter(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Department */}
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    සේවය කිරීමට අපේක්ෂිත අංශය
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="peesha"
                          name="peesha"
                          type="radio"
                          value="පේෂ"
                          checked={department === "පේෂ"}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="peesha"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          පේෂ
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="wadu"
                          name="wadu"
                          type="radio"
                          value="වඩු"
                          checked={department === "වඩු"}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="wadu"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          වඩු
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="kohu"
                          name="kohu"
                          type="radio"
                          value="කොහු"
                          checked={department === "කොහු"}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="kohu"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          කොහු
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="clay"
                          name="clay"
                          type="radio"
                          value="මැටි"
                          checked={department === "මැටි"}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="clay"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          මැටි
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="bathik"
                          name="bathik"
                          type="radio"
                          value="බතික්"
                          checked={department === "බතික්"}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="bathik"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          බතික්
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="hana"
                          name="hana"
                          type="radio"
                          value="හණ"
                          checked={department === "හණ"}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="hana"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          හණ
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="jankala"
                          name="jankala"
                          type="radio"
                          value="ජනකලා"
                          checked={department === "ජනකලා"}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="jankala"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ජනකලා
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    සේවය කිරීමට බලාපොරොත්තුවන ස්ථානය
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="onSite"
                          name="onSite"
                          type="radio"
                          value="onSite"
                          checked={workLocation === "onSite"}
                          onChange={(e) => setWorkLocation(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="onSite"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          මධ්‍යස්ථානය තුළ
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="wfh"
                          name="wfh"
                          type="radio"
                          value="wfh"
                          checked={workLocation === "wfh"}
                          onChange={(e) => setWorkLocation(e.target.value)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="wfh"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          නිවෙස තුල
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-full">
                  <label
                    htmlFor="machineNum"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    නිවෙස තුල සේවය කරනු ලබන්නේ නම් යන්ත්‍ර අංකය ( Ex:
                    NWP/DID/KU/IB/TE/M/36-1 )
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="machineNum"
                      id="machineNum"
                      value={machineNum}
                      onChange={(e) => setMachineNum(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    සේවක අර්ථසාධක අරමුදලට දායක වී :
                  </legend>
                  <div className=" space-t-2">
                    <div className="relative flex gap-x-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="epfYes"
                          name="epfYes"
                          type="radio"
                          value={true}
                          checked={epf === true}
                          onChange={() => setEpf(true)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="epfYes"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ඇත
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="epfNo"
                          name="epfNo"
                          type="radio"
                          value={false}
                          checked={epf === false}
                          onChange={() => setEpf(false)}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label
                          htmlFor="epfNo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          නැත
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="pt-6">
                <legend className="text-sm font-semibold leading-6 space-y-3 text-gray-900">
                  දායක වී තිබේනම්
                </legend>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="serverNum"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    සේව්‍ය අංකය
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="serverNum"
                      id="serverNum"
                      value={serverNum}
                      onChange={(e) => setServerNum(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="workerNum"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    සේවක අංකය
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="workerNum"
                      id="workerNum"
                      value={workerNum}
                      onChange={(e) => setWorkerNum(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  මේ වනවිට ප්‍රතිලාභ මුදල්
                </legend>
                <div className=" space-t-2">
                  <div className="relative flex gap-x-3">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="benefitsYes"
                        name="benefitsYes"
                        type="radio"
                        value={true}
                        checked={benefits === true}
                        onChange={() => setBenefits(true)}
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                      />
                      <label
                        htmlFor="benefitsYes"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ලබාගෙන ඇත
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="benefitsNo"
                        name="benefitsNo"
                        type="radio"
                        value={false}
                        checked={benefits === false}
                        onChange={() => setBenefits(false)}
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                      />
                      <label
                        htmlFor="benefitsNo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ලබාගෙන නැත
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="block w-full rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Submit the Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
