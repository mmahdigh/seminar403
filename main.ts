import {
  classifyJsonObject,
  getRandomNumbers,
  getRowsAsJson,
  NewsItem,
  wait,
} from "./utils";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";
import * as fs from 'fs'

dotenv.config();


const filePath = "./datasets/train.csv";

const main = async () => {

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const rowNumbers = getRandomNumbers(2, 120_000, 1000);
  const rows = await getRowsAsJson(filePath, rowNumbers);

  const resultArr: { row: NewsItem; ai: number }[] = [];

  for (let i = 0; i < rows.length; i++) {
    console.log("Progress:", Math.floor(i / rows.length * 100).toFixed(2));
    const row = rows[i];
    const label = await classifyJsonObject(anthropic, row);
    resultArr.push({ row, ai: label });
    if (i > 0 && i % 20 === 0) await wait(10 * 1000);
  }

  const positives = resultArr.reduce((acc, curr) => {
    if (curr.ai === Number(curr.row["Class Index"])) return acc + 1;
    return acc;
  }, 0);

  console.log("Accuracy:", (positives / rows.length).toFixed(2))

  fs.writeFileSync('output', JSON.stringify(resultArr))

};

void main();
