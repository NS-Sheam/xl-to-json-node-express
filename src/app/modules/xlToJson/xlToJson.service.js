import XLSX from "xlsx";
import fs from "fs";

const xlToJson = async (file) => {
  // Read the file from the file path
  const workbook = XLSX.readFile(file.path);

  // Get the first sheet name, if it exists
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("No sheets found in the Excel file");
  }

  // Get the worksheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert the worksheet to JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  // Return the JSON data
  return jsonData;
};

export const XlToJsonService = {
  xlToJson,
};
