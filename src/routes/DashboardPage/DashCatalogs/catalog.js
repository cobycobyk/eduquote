import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getCatalogs(query) {
  let catalogs = await localforage.getItem("catalogs");
  if (!catalogs) catalogs = [];
  if (query) {
    catalogs = matchSorter(catalogs, query, { keys: ["client", "total"] });
  }
  return catalogs.sort(sortBy("createdAt"));
}

export async function createQuote() {
  let id = Math.random().toString(36).substring(2, 9);
  let catalog = { id, createdAt: Date.now() };
  let catalogs = await getCatalogs();
  catalogs.unshift(catalog);
  await set(catalogs);
  return catalog;
}

export async function updateContact(id, updates) {
  let catalogs = await localforage.getItem("catalogs");
  let catalog = catalogs.find(catalog => catalog.id === id);
  if (!catalog) throw new Error("No Client Found for", id);
  Object.assign(catalog, updates);
  await set(catalogs);
  return catalog;
}

function set(catalogs) {
  return localforage.setItem("catalogs", quotes);
}