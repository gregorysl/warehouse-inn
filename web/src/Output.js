import React from "react";
import { generateReport, parseData } from "./warehouse";
const Output = ({ text }) => {
  const itemsData = parseData(text);
  const warehouses = [...new Set(itemsData.map((item) => item.warehouseName))];
  const result = generateReport(warehouses, itemsData);
  return (
    <div>
      <h2>Result</h2>
      <textarea cols="40" rows="20" value={result} disabled type="text" />
    </div>
  );
};

export default Output;
