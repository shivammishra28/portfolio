import { Client, Databases, ID } from 'appwrite';

const projectId = process.env.REACT_APP_APPWRITE_PROJECT_ID;
const endpoint = process.env.REACT_APP_APPWRITE_ENDPOINT;

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint(endpoint) // 👈 your appwrite endpoint, replace with the actual endpoint
    .setProject(projectId); // 👈 your Appwrite project ID, replace with the actual ID

const databases = new Databases(client);
// Export client, databases, and ID so you can use them in other files
export { client, databases, ID };
