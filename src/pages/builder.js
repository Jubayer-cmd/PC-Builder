import RootLayout from "@/components/layouts/RootLayout";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BiSolidMemoryCard } from "react-icons/bi";
import { BsMotherboardFill } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { GiProcessor } from "react-icons/gi";
import { MdPower } from "react-icons/md";
import { PiComputerTowerDuotone, PiMonitorFill } from "react-icons/pi";
import { useSelector } from "react-redux";
function BuilderPage() {
  const { CPU, MotherBoard, RAM, PowerSupply, StorageDevice, Monitor, Others } =
    useSelector((state) => state.builder);
  const isDisabled = () => {
    return (
      Monitor.name &&
      StorageDevice.name &&
      RAM.name &&
      CPU.name &&
      PowerSupply.name &&
      MotherBoard.name &&
      Others.name
    );
  };
  return (
    <div>
      <h1 className="text-center text-4xl text-purple-500 font-medium my-8">
        Build Your Dream PC
      </h1>

      <div class="bg-white rounded-lg shadow-md p-6 my-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <BsMotherboardFill className="text-6xl" />
            <p class="text-xl font-semibold ml-4">MotherBoard</p>
          </div>
          <div className="flex justify-around items-center">
            <Image src={MotherBoard?.image} alt="nai" width={50} height={50} />
            <p class=" font-semibold mx-10"> {MotherBoard?.name}</p>
            <p className="text-violet-500 ml-10">${MotherBoard?.price}</p>
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
          <div className="flex justify-around items-center">
            <Image
              src={StorageDevice?.image}
              alt="nai"
              width={50}
              height={50}
            />
            <p class=" font-semibold mx-10"> {StorageDevice?.name}</p>
            <p className="text-violet-500 ml-10">${StorageDevice?.price}</p>
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
          <div className="flex justify-around items-center">
            <Image src={RAM?.image} alt="nai" width={50} height={50} />
            <p class=" font-semibold mx-10"> {RAM?.name}</p>
            <p className="text-violet-500 ml-10">${RAM?.price}</p>
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
          <div className="flex justify-around items-center">
            <Image src={CPU?.image} alt="nai" width={50} height={50} />
            <p class=" font-semibold mx-10"> {CPU?.name}</p>
            <p className="text-violet-500 ml-10">${CPU?.price}</p>
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
          <div className="flex justify-around items-center">
            <Image src={PowerSupply?.image} alt="nai" width={50} height={50} />
            <p class=" font-semibold mx-10"> {PowerSupply?.name}</p>
            <p className="text-violet-500 ml-10">${PowerSupply?.price}</p>
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
          <div className="flex justify-around items-center">
            <Image src={Others?.image} alt="nai" width={50} height={50} />
            <p class=" font-semibold mx-10"> {Others?.name}</p>
            <p className="text-violet-500 ml-10">${Others?.price}</p>
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
          <div className="flex justify-around items-center">
            <Image src={Monitor?.image} alt="nai" width={50} height={50} />
            <p class=" font-semibold mx-10"> {Monitor?.name}</p>
            <p className="text-violet-500 ml-10">${Monitor?.price}</p>
          </div>
          <Link
            href={"/builder/Monitor"}
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-none"
          >
            Select Components
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          disabled={!isDisabled()}
          onClick={() => message.success("Build completed successfully")}
          className={`${
            isDisabled()
              ? "bg-purple-600 rounded text-white px-4 py-2 my-5 font-medium border-none"
              : "bg-gray-900"
          } text-white px-4 py-2 my-5 font-medium rounded border-none`}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
}

BuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default BuilderPage;
