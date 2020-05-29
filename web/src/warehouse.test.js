import { parseData, generateReport } from "./warehouse";

test("should return empty array for no data", () => {
  const result = parseData("");
  expect(result).toStrictEqual([]);
});
test("shouldn't parse anything with comments", () => {
  const result = parseData("# test");
  expect(result).toStrictEqual([]);
});
test("shouldn't parse anything with comment sign even good data", () => {
  const result = parseData("# test;test;warehouse,1");
  expect(result).toStrictEqual([]);
});

test("should return parsed data", () => {
  const data = "# test\ntest;test;warehouse,1";
  const result = parseData(data);
  expect(result).toStrictEqual([
    {
      itemName: "test",
      stock: 1,
      warehouseName: "warehouse",
    },
  ]);
});
test("should return parsed data", () => {
  const data = "# test\ntest;test;warehouse,1";
  const result = parseData(data);
  expect(result).toStrictEqual([
    {
      itemName: "test",
      stock: 1,
      warehouseName: "warehouse",
    },
  ]);
});

test("should generate empty string with bad data", () => {
  const result = generateReport([], []);
  expect(result).toStrictEqual("");
});

test("should generate empty string with bad warehouses data", () => {
  const result = generateReport(
    [],
    [
      {
        itemName: "test",
        stock: 1,
        warehouseName: "warehouse",
      },
    ]
  );
  expect(result).toStrictEqual("");
});

test("should generate report", () => {
  const result = generateReport(
    ["warehouse"],
    [
      {
        itemName: "test",
        stock: 1,
        warehouseName: "warehouse",
      },
    ]
  );
  expect(result).toStrictEqual("warehouse (total: 1)\ntest: 1\n");
});

test("should generate report with products sorted", () => {
  const result = generateReport(
    ["warehouse"],
    [
      {
        itemName: "b item",
        stock: 1,
        warehouseName: "warehouse",
      },
      {
        itemName: "a item",
        stock: 1,
        warehouseName: "warehouse",
      },
    ]
  );
  expect(result).toStrictEqual("warehouse (total: 2)\na item: 1\nb item: 1\n");
});

test("should generate report warehouse sorted by name descending if count is same", () => {
  const result = generateReport(
    ["a warehouse", "warehouse"],
    [
      {
        itemName: "b item",
        stock: 1,
        warehouseName: "a warehouse",
      },
      {
        itemName: "a item",
        stock: 1,
        warehouseName: "warehouse",
      },
    ]
  );
  expect(result).toStrictEqual(
    "warehouse (total: 1)\na item: 1\n\na warehouse (total: 1)\nb item: 1\n"
  );
});
test("should generate report warehouse sorted by item count", () => {
  const result = generateReport(
    ["a warehouse", "warehouse"],
    [
      {
        itemName: "b item",
        stock: 1,
        warehouseName: "a warehouse",
      },
      {
        itemName: "a item",
        stock: 1,
        warehouseName: "warehouse",
      },
      {
        itemName: "b item",
        stock: 1,
        warehouseName: "warehouse",
      },
    ]
  );
  expect(result).toStrictEqual(
    "warehouse (total: 2)\na item: 1\nb item: 1\n\na warehouse (total: 1)\nb item: 1\n"
  );
});
