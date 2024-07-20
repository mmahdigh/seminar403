import Anthropic from "@anthropic-ai/sdk";
import { allCategories, Application, data } from "./datasets/rpgf3";

export async function classifyProjects(
  anthropic: Anthropic,
  jsonObject: Application,
): Promise<typeof allCategories[number] | "INVALID"> {
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 150,
    temperature: 0,
    system: `Use all information given to you such impact description, contribution
    description and display name to classify a given project to one of the below categories \n
    categories: ${allCategories.toString()} \n
     VERY IMPORTANT: YOUR OUTPUT SHOULD ONLY BE EXACTLY ONE OF THE CATEGORIES. AND IT SHOULD BE VERBATIM`,
    messages: [
      {
        role: "user",
        content: [
          {
            text: `display name: ${jsonObject.displayName}\n 
            Impact Description: ${jsonObject.impactDescription}\n
            Contribution Description: ${jsonObject.contributionDescription}\n`,
            type: "text",
          },
        ],
      },
    ],
  });

  // @ts-ignore
  if (msg.content[0].type === "text" && allCategories.includes(msg.content[0].text)) return msg.content[0].text

  console.log(msg)
  return "INVALID";
}
