
import { tool } from "ai";
import { z } from "zod";

export const getWeather = tool({
  description:
    "show the weather in a given city to the user",
  parameters: z.object({
    city: z.string().describe("The city to get weather for"),
  }),
  execute: async ({ city }: { city: string }) => {
    const weatherOptions = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy'];
    // fake wait for weather data
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return weatherOptions[
      Math.floor(Math.random() * weatherOptions.length)
    ];
  },
});