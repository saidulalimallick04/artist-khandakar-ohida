'use server';

/**
 * @fileOverview A flow to filter work (artwork, projects, gallery, events) by keywords.
 *
 * - filterWorkByKeywords - A function that filters work based on keywords.
 * - FilterWorkByKeywordsInput - The input type for the filterWorkByKeywords function.
 * - FilterWorkByKeywordsOutput - The return type for the filterWorkByKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FilterWorkByKeywordsInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords to filter the work by, comma separated.'),
  workItems: z.array(z.string()).describe('A list of work items to filter.'),
});
export type FilterWorkByKeywordsInput = z.infer<typeof FilterWorkByKeywordsInputSchema>;

const FilterWorkByKeywordsOutputSchema = z.object({
  filteredWorkItems: z
    .array(z.string())
    .describe('The work items that match the keywords.'),
});
export type FilterWorkByKeywordsOutput = z.infer<typeof FilterWorkByKeywordsOutputSchema>;

export async function filterWorkByKeywords(input: FilterWorkByKeywordsInput): Promise<FilterWorkByKeywordsOutput> {
  return filterWorkByKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'filterWorkByKeywordsPrompt',
  input: {
    schema: FilterWorkByKeywordsInputSchema,
  },
  output: {
    schema: FilterWorkByKeywordsOutputSchema,
  },
  prompt: `You are an AI assistant that filters a list of work items based on keywords.

You will receive a comma-separated list of keywords and a list of work items.

Your task is to filter the work items to only include the ones that are relevant to the keywords.

Keywords: {{{keywords}}}

Work Items: {{{workItems}}}

Only return the work items that are relevant to the keywords. Remove any surrounding characters from the items in the returned list. If no items are relevant, return an empty list.

Ensure the output is a JSON array of strings.`,
});

const filterWorkByKeywordsFlow = ai.defineFlow(
  {
    name: 'filterWorkByKeywordsFlow',
    inputSchema: FilterWorkByKeywordsInputSchema,
    outputSchema: FilterWorkByKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
