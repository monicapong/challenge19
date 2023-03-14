import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Export function used to PUT to the database
export const putDb = async (content) => {
  console.log('PUT from the database');
  // create connection to JATE database
  const jateDB = await openDB("jate", 1);
  // create new transaction 
  const tx = jateDB.transaction("jate", "readwrite");
  // open desired object store
  const store = tx.objectStore("jate");
  // .put() method to pass in content
  const request = store.put({ jate: content });
  // console.log confirmation of request
  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
// Export function used to GET to the database
export const getDb = async () => {
  console.log('GET from the database');
  // create connection to JATE database
  const jateDB = await openDB("jate", 1);
  // create new transaction 
  const tx = jateDB.transaction("jate", "readonly");
  // open desired object store
  const store = tx.objectStore("jate");
  // .getAll() method to get all data from database
  const request = store.getAll();
  // console.log confirmation of request
  const result = await request;
  console.log(result);
};

initdb();
