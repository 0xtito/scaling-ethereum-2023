// OrderSection.tsx
import React, { useRef, useState } from "react";

import { AssetInputDropdown, PriceInput, AmountInput } from "./";
import { classNames } from "../utils";

interface OrderSectionProps {
  assets: { id: number; name: string; symbol: string }[];
  onSubmit: (
    pair: string,
    price: number,
    amount: number,
    total: number
  ) => void;
}

export function OrderSection({ assets, onSubmit }: OrderSectionProps) {
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);
  // const price = useRef<number | null>(null);
  const [price, setPrice] = useState<string>("");
  const [amountToPurchase, setAmountToPurchase] = useState<string>("");
  const [isBuy, setIsBuy] = useState<boolean>(true);

  // const [amountToPurchase, setAmountToPurchase] = useState<number>(0);
  // const amount = useRef<number>(0);

  const handleSubmit = () => {
    const total = parseFloat(price) * parseFloat(amountToPurchase);

    onSubmit(
      `${selectedAsset.name}/xDAI`,
      parseFloat(price),
      parseFloat(amountToPurchase),
      total
    );
  };

  //   border-1 border-gray-200 rounded-lg p-4 shadow-2xl sm:mx-auto sm:w-full sm:max-w-md

  return (
    <div className=" rounded-lg p-4 bg-white shadow ring-1 ring-black ring-opacity-5">
      <div className="flex place-content-center">
        <span className="isolate inline-flex rounded-md shadow-sm place-content-center">
          <button
            type="button"
            className={classNames(
              isBuy
                ? "relative inline-flex items-center rounded-l-md bg-green-300 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10"
                : "relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            )}
            onClick={() => setIsBuy(true)}
          >
            Buy
          </button>

          <button
            type="button"
            className={classNames(
              !isBuy
                ? "relative inline-flex -ml-px items-center rounded-r-md bg-red-300 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10"
                : "relative inline-flex -ml-px items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            )}
            onClick={() => setIsBuy(false)}
          >
            Sell
          </button>
        </span>
      </div>

      <AssetInputDropdown
        assets={assets}
        setSelectedAsset={setSelectedAsset}
        selectedAsset={selectedAsset}
      />
      <div className="mt-4">
        {/* <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price.current}
          onChange={(e) => (price.current = e.target.valueAsNumber)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base text-gray-700"
        /> */}
        <PriceInput price={price} setPrice={setPrice} />
      </div>
      <div className="mt-4">
        {/* <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount.current}
          onChange={(e) => (amount.current = e.target.valueAsNumber)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base text-gray-700"
        />
      </div>*/}

        <AmountInput
          amount={amountToPurchase}
          setAmount={setAmountToPurchase}
          asset={selectedAsset.name}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-6 w-full px-4 py-2 font-semibold text-white bg-logo-blue rounded-lg shadow-md hover:bg-blue-500 focus:bg-blue-700 focus:ring-logo-blue focus:ring-opacity-75"
        >
          {isBuy ? "Submit Buy Order" : "Submit Sell Order"}
        </button>
      </div>
    </div>
  );
}