import {
  CloudArrowUpIcon,
  ListBulletIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import instruction from "../assets/images/instruction.png";

const features = [
  {
    name: "How to add a new applicant.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Hero() {
  return (
    <div className="overflow-hidden bg-white py-24 pr-36 pl-36 sm:py-32">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Instruction for How to use application
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </p>
      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <feature.icon
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
  );
}
