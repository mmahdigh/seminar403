import { parse } from "csv-parse";
import { readFile } from "fs/promises";
import Anthropic from "@anthropic-ai/sdk";

enum NewsTypes {
  Invalid = 0,
  World = 1,
  Sports = 2,
  Business = 3,
  SciTech = 4,
}

export const getRandomNumbers = (min: number, max: number, count: number) => {
  const sofar: number[] = [];

  while (sofar.length < count) {
    const number = Math.floor(Math.random() * (max - min) + min);
    if (sofar.includes(number)) continue;
    else sofar.push(number);
  }

  return sofar;
};

export interface NewsItem {
  "Class Index": string;
  Title: string;
  Description: string;
}

export async function getRowsAsJson(
  filePath: string,
  rowNumbers: number[]
): Promise<NewsItem[]> {
  try {
    // Read the file
    const fileContent = await readFile(filePath, { encoding: "utf-8" });

    // Parse the CSV
    const records: NewsItem[] = await new Promise((resolve, reject) => {
      parse(
        fileContent,
        {
          columns: true,
          skip_empty_lines: true,
          trim: true,
        },
        (err, records: NewsItem[]) => {
          if (err) reject(err);
          else resolve(records);
        }
      );
    });

    // Filter the records based on row numbers
    // Note: rowNumbers are 1-indexed, but array is 0-indexed
    return rowNumbers.map((rowNum) => records[rowNum - 1]).filter(Boolean);
  } catch (error) {
    console.error("Error reading or parsing the CSV file:", error);
    return [];
  }
}

function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}

export const wait = async (ms: number) => {
  return new Promise((res) =>
    setTimeout(() => {
      res("finished");
    }, ms)
  );
};


export async function classifyJsonObject(
  anthropic: Anthropic,
  jsonObject: Omit<NewsItem, "Class Index">
): Promise<NewsTypes> {
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 50,
    temperature: 0,
    system: `Classify the news item below according to its title and description \n
     We have 4 classes: Class 1 represents "World"\n
     Class 2 represents "Sports"\n
     Class 3 represents "Business"\n
     Class 4 represents "Sci/Tech"\n

     VERY IMPORTANT: YOUR OUTPUT SHOULD ONLY BE THE CLASS NUMBER. (example: 3)`,
    messages: [
      {
        role: "user",
        content: [
          {
            text: `Title: ${jsonObject.Title}\nDescription: ${jsonObject.Description}`,
            type: "text",
          },
        ],
      },
    ],
  });

  if (msg.content[0].type === "text" && isNumeric(msg.content[0].text))
    return Number(msg.content[0].text);

  console.log(msg)
  return 0;

  // const input = {
  //   top_p: 0.9,
  //   prompt: `Classify the news item below according to its title and description \n
  //   We have 4 classes: Class 1 represents "World"\n
  //   Class 2 represents "Sports"\n
  //   Class 3 represents "Business"\n
  //   Class 4 represents "Sci/Tech"\n

  //   VERY IMPORTANT: YOUR OUTPUT SHOULD ONLY BE THE NUMBER OF THE CLASS. (example: 3)
  //   Title: ${jsonObject.Title}\n
  //   Description: ${jsonObject.Description}\n\n`,
  //   min_tokens: 0,
  //   temperature: 0.6,
  //   presence_penalty: 1.15,
  // };

  // try {
  //   for await (const event of replicate.stream("meta/meta-llama-3-70b", {
  //     input,
  //   })) {
  //     process.stdout.write(`${event}`);
  //   }
  // } catch (error) {
  //   console.error("Error classifying JSON object:", error);
  // }
}
