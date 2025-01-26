import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    investDate: 3.5,
    volume: "5,768",
    change: 4.8,
    price: 590,
    numOfLots:4000,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    investDate: 2.2,
    volume: "4,635",
    change: 4.3,
    price: 467,
    numOfLots:50000,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    investDate: 2.1,
    volume: "4,290",
    change: 44,
    price: 120,
    numOfLots: 60000,

  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    investDate: 1.5,
    volume: "3,580",
    change: 2.5,
    price: 389,
    numOfLots:100,
    
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    investDate: 3.5,
    volume: "6,768",
    change: 4.2,
    price: 390,
    numOfLots:2525,
    
  },
];

const TableOne = () => {
  return (
    <div className="rounded-2xl border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black">
        My Stocks
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 sm:grid-cols-6">
          <div className="p-2 xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name Stock
            </h5>
          </div>
          <div className="p-2 text-center xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Invest Date
            </h5>
          </div>
          <div className="p-2 text-center xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Volume
            </h5>
          </div>
          <div className="hidden p-2 text-center sm:block xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Change
            </h5>
          </div>
          <div className="hidden p-2 text-center sm:block xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price/Stock
            </h5>
          </div>
          <div className="hidden p-2 text-center sm:block xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Number of lots
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke "
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo as string} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black ">{brand.investDate}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.volume}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.change}%</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black">{brand.price}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black">{brand.numOfLots}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
