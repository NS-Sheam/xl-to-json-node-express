import XLSX from "xlsx";
import removeFromTempFolder from "../../utils/removeFromTempFolder.js";

const xlToJson = async (file) => {
  const workbook = XLSX.readFile(file.path);

  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("No sheets found in the Excel file");
  }

  const worksheet = workbook.Sheets[sheetName];

  const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "", range: 1 });
  removeFromTempFolder(file.filename);

  return jsonData;
};

export const XlToJsonService = {
  xlToJson,
};
