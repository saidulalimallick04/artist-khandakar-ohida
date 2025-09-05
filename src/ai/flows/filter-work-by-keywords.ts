'use server';

/**
 * @fileOverview A flow to filter items (artwork, projects, events) by keywords.
 *
 * - filterItemsByKeywords - A function that filters items based on keywords.
 * - FilterItemsByKeywordsInput - The input type for the filterItemsByKeywords function.
 * - FilterItemsByKeywordsOutput - The return type for the filterItemsByKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FilterItemsByKeywordsInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords to filter the items by, comma separated.'),
  items: z.array(z.string()).describe('A list of items to filter.'),
});
export type FilterItemsByKeywordsInput = z.infer<typeof FilterItemsByKeywordsInputSchema>;

const FilterItemsByKeywordsOutputSchema = z.object({
  filteredItems: z
    .array(z.string())
    .describe('The items that match the keywords.'),
});
export type FilterItemsByKeywordsOutput = z.infer<typeof FilterItemsByKeywordsOutputSchema>;

export async function filterItemsByKeywords(input: FilterItemsByKeywordsInput): Promise<FilterItemsByKeywordsOutput> {
  return filterItemsByKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'filterItemsByKeywordsPrompt',
  input: {
    schema: FilterItemsByKeywordsInputSchema,
  },
  output: {
    schema: FilterItemsByKeywordsOutputSchema,
  },
  prompt: `You are an AI assistant that filters a list of items based on keywords.

You will receive a comma-separated list of keywords and a list of items.

Your task is to filter the items to only include the ones that are relevant to the keywords.

Keywords: {{{keywords}}}

Items: {{{items}}}

Only return the items that are relevant to the keywords. Rename the output field to filteredItems. Remove any surrounding characters from the items in the returned list. If no items are relevant, return an empty list.

Ensure the output is a JSON array of strings.`,
});

const filterItemsByKeywordsFlow = ai.defineFlow(
  {
    name: 'filterItemsByKeywordsFlow',
    inputSchema: FilterItemsByKeywordsInputSchema,
    outputSchema: FilterItemsByKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
