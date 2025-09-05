'use server';

import { filterItemsByKeywords } from '@/ai/flows/filter-items-by-keywords';
import type { WorkItem, EventItem } from '@/lib/data';

export async function filterWorkAction(
  keywords: string,
  workItems: WorkItem[]
): Promise<WorkItem[]> {
  if (!keywords || keywords.trim() === '') {
    return workItems;
  }

  // Convert work items to a string format that the AI can understand, including an ID for reliable matching.
  const workItemsAsStrings = workItems.map(
    (item) => `ID:${item.id} | Title: ${item.title} | Description: ${item.description} | Tags: ${item.tags.join(', ')}`
  );

  try {
    const result = await filterItemsByKeywords({
      keywords,
      items: workItemsAsStrings,
    });

    // The AI returns a list of strings representing the matched items. We need to parse the IDs from them.
    const filteredIds = new Set<number>();
    result.filteredItems.forEach((itemString) => {
      // The AI might not return the string exactly as provided, so we look for the ID marker.
      const match = itemString.match(/ID:(\d+)/);
      if (match && match[1]) {
        filteredIds.add(parseInt(match[1], 10));
      }
    });
    
    // Filter the original work items based on the returned IDs to ensure data integrity.
    return workItems.filter((item) => filteredIds.has(item.id));
  } catch (error) {
    console.error('Error filtering work items with AI:', error);
    // On error, return an empty array to indicate failure, or return all items as a fallback.
    // Returning an empty list might be better UX to show the search failed.
    return [];
  }
}

export async function filterEventsAction(
  keywords: string,
  eventItems: EventItem[]
): Promise<EventItem[]> {
  if (!keywords || keywords.trim() === '') {
    return eventItems;
  }

  const eventItemsAsStrings = eventItems.map(
    (item) => `ID:${item.id} | Title: ${item.title} | Description: ${item.description} | Location: ${item.location} | Date: ${item.date}`
  );

  try {
    const result = await filterItemsByKeywords({
      keywords,
      items: eventItemsAsStrings,
    });

    const filteredIds = new Set<number>();
    result.filteredItems.forEach((itemString) => {
      const match = itemString.match(/ID:(\d+)/);
      if (match && match[1]) {
        filteredIds.add(parseInt(match[1], 10));
      }
    });
    
    return eventItems.filter((item) => filteredIds.has(item.id));
  } catch (error) {
    console.error('Error filtering event items with AI:', error);
    return [];
  }
}
