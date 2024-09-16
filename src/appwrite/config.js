import { Client, Databases, Account } from "appwrite";

console.log(import.meta.env.VITE_ENDPOINT);


const client = new Client()
    .setEndpoint(String(import.meta.env.VITE_ENDPOINT))
    .setProject(String(import.meta.env.VITE_PROJECT_ID));

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };
