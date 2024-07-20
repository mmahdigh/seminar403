import { getRandomNumbers, wait } from "./utils";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import { Application, data } from "./datasets/rpgf3";
import { classifyProjects } from "./utils-rpgf";

dotenv.config();

const main = async () => {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const rowNumbers = getRandomNumbers(0, 530, 100);

  const rows = data.filter((val, i) => rowNumbers.includes(i));

  const resultArr: { row: Application; ai: string }[] = [];

  for (let i = 0; i < rows.length; i++) {
    console.log("Progress:", Math.floor((i / rows.length) * 100).toFixed(2));
    const row = rows[i];
    const label = await classifyProjects(anthropic, row);
    resultArr.push({ row, ai: label });
    if (i > 0 && i % 20 === 0) await wait(10 * 1000);
  }

  const positives = resultArr.reduce((acc, curr) => {
    if (
      curr.ai.trim().toLowerCase() === curr.row.pwCategory.trim().toLowerCase()
    )
      return acc + 1;
    return acc;
  }, 0);

  console.log("Accuracy:", (positives / rows.length).toFixed(2));

  fs.writeFileSync("output-rpgf.json", JSON.stringify(resultArr));
};

void main();
