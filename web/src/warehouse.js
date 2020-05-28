const warehouseDataRegex = new RegExp(/(?:\|?(.*?),(\d+))/g);
const filterRegex = new RegExp(/^(?!#).*;(.*);(.*)/gm);

export const parseData = (text) =>
  [...text.matchAll(filterRegex)].flatMap((x) => {
    return [...x[2].matchAll(warehouseDataRegex)].map((i) => ({
      itemName: x[1],
      warehouseName: i[1],
      stock: +i[2],
    }));
  });

export const generateReport = (warehouses, items) =>
  warehouses
    .map((x) => {
      const warehouseItems = items.filter((z) => z.warehouseName === x);
      return {
        name: x,
        count: warehouseItems.reduce((acc, curr) => (acc += curr.stock), 0),
        items: warehouseItems,
      };
    })
    .sort((a, b) => {
      if (a.count === b.count) {
        return b.name.localeCompare(a.name);
      }
      return a.count > b.count ? -1 : 1;
    })
    .flatMap((x) => {
      const items = x.items
        .sort((a, b) => a.itemName.localeCompare(b.itemName))
        .map((c) => `${c.itemName}: ${c.stock}`);
      return [`${x.name} (total: ${x.count})`, ...items, ""];
    })
    .join("\n");
