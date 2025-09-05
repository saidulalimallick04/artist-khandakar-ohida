'use server';

import type { WorkItem, EventItem } from '@/lib/data';

export async function filterWorkAction(
  keywords: string,
  workItems: WorkItem[]
): Promise<WorkItem[]> {
  if (!keywords || keywords.trim() === '') {
    return workItems;
  }

  const lowercasedKeywords = keywords.toLowerCase().trim().split(/\s+/);

  return workItems.filter((item) => {
    const itemText = [
      item.title,
      item.description,
      item.category,
      ...item.tags,
    ]
      .join(' ')
      .toLowerCase();

    return lowercasedKeywords.every((keyword) => itemText.includes(keyword));
  });
}

export async function filterEventsAction(
  keywords: string,
  eventItems: EventItem[]
): Promise<EventItem[]> {
  if (!keywords || keywords.trim() === '') {
    return eventItems;
  }

  const lowercasedKeywords = keywords.toLowerCase().trim().split(/\s+/);
  
  return eventItems.filter((item) => {
    const itemText = [
        item.title,
        item.description,
        item.location,
        item.date
    ].join(' ').toLowerCase();

    return lowercasedKeywords.every(keyword => itemText.includes(keyword));
  });
}
