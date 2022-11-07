import React from "react";

import { handleEmptyData } from "~/Core/Hooks/variables";

interface Iprops {
  title: string;
  value: string | number | undefined | null;
}

const ReadOnlyItem = ({ title, value }: Iprops) => (
  <>
    <span className="text-gray-700"> {title}:</span>
    <span className="ml-4 break-words">{handleEmptyData(value)}</span>
  </>
);

export default ReadOnlyItem;
