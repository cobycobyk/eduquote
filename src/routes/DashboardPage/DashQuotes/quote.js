import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getQuotes(query) {
  let quotes = await localforage.getItem("quotes");
  if (!quotes) quotes = [];
  if (query) {
    quotes = matchSorter(quotes, query, { keys: ["client", "total"] });
  }
  return quotes.sort(sortBy("createdAt"));
}

export async function createQuote() {
  let id = Math.random().toString(36).substring(2, 9);
  let quote = { id, createdAt: Date.now() };
  let quotes = await getQuotes();
  quotes.unshift(quote);
  await set(quotes);
  return quote;
}

export async function updateContact(id, updates) {
  let quotes = await localforage.getItem("quotes");
  let quote = quotes.find(quote => quote.id === id);
  if (!quote) throw new Error("No Client Found for", id);
  Object.assign(quote, updates);
  await set(quotes);
  return quote;
}

function set(quotes) {
  return localforage.setItem("quotes", quotes);
}