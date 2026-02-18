import { DollarSign, ShoppingCart } from "lucide-react";

export const StatWidgets = () => {
  return (
    <div className="p-5  justify-center items-center">
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5  bg-amber-300">
        <div className=" bg-green-600 rounded-lg p-4 relative h-30">
          <h1 className="text-2xl ">Total Order</h1>
          <span>1000</span>
          <div className="absolute bottom-6 right-6 ">
            <ShoppingCart />
          </div>
        </div>
        <div className=" bg-green-600 rounded-lg p-4 relative h-30">
          <h1 className="text-2xl ">Total Sales</h1>
          <span>1000</span>
          <div className="absolute bottom-6 right-6">
            <DollarSign />
          </div>
        </div>
        <div className=" bg-green-600 rounded-lg p-4 relative h-30">
          <h1 className="text-2xl ">Total Order</h1>
          <span>1000</span>
          <div className="absolute bottom-6 right-6">
            <ShoppingCart />
          </div>
        </div>

        <div className=" bg-green-600 rounded-lg p-4 relative h-30">
          <h1 className="text-2xl ">Wallet</h1>
          <span>1000</span>
          <div className="absolute bottom-6 right-6">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
