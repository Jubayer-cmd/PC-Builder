import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";
import { BiSolidMemoryCard } from "react-icons/bi";
import { BsMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { GiProcessor } from "react-icons/gi";
import { MdPower } from "react-icons/md";
import { PiComputerTowerDuotone, PiMonitorFill } from "react-icons/pi";
function builderPage() {
  return (
    <div>
      <h1 className="text-center text-4xl text-purple-500 font-medium my-8">
        Build Your Dream PC
      </h1>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <BsMotherboardFill className="text-6xl" />
            <p class="text-xl font-semibold ml-4">Motherboard</p>
          </div>
          <Link
            href={"/builder/Motherboard"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <BiSolidMemoryCard className="text-6xl" />
            <p class="text-xl font-semibold ml-4">Memory Storage</p>
          </div>
          <Link
            href={"/builder/Storage Device"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <CgSmartphoneRam className="text-6xl" />
            <p class="text-xl font-semibold ml-4">RAM</p>
          </div>
          <Link
            href={"/builder/RAM"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <GiProcessor className="text-6xl" />
            <p class="text-xl font-semibold ml-4">CPU</p>
          </div>
          <Link
            href={"/builder/CPU"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <MdPower className="text-6xl" />
            <p class="text-xl font-semibold ml-4">Power Supply</p>
          </div>
          <Link
            href={"/builder/Power Supply"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <PiComputerTowerDuotone className="text-6xl" />
            <p class="text-xl font-semibold ml-4">Others</p>
          </div>
          <Link
            href={"/builder/Others"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <PiMonitorFill className="text-6xl" />
            <p class="text-xl font-semibold ml-4">Monitor</p>
          </div>
          <Link
            href={"/builder/Monitor"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>
    </div>
  );
}

builderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default builderPage;
