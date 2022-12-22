import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getClients(query) {
  let clients = await localforage.getItem("clients");
  if (!clients) clients = [];
  if (query) {
    clients = matchSorter(clients, query, { keys: ["first", "last"] });
  }
  return clients.sort(sortBy("last", "createdAt"));
}

export async function createClient() {
  let id = Math.random().toString(36).substring(2, 9);
  let client = { id, createdAt: Date.now() };
  let clients = await getClients();
  clients.unshift(client);
  await set(clients);
  return client;
}

export async function updateContact(id, updates) {
  let clients = await localforage.getItem("clients");
  let client = clients.find(client => client.id === id);
  if (!client) throw new Error("No Client Found for", id);
  Object.assign(client, updates);
  await set(clients);
  return client;
}

function set(clients) {
  return localforage.setItem("clients", clients);
}