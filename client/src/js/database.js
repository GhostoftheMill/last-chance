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

// TODO: Add logic to a method that accepts some content and adds it to the database - DONE
export const putDb = async (id, val) => {
  const jateDB = await openDB('jate', 1);
  const text = jateDB.transaction('jate', 'readwrite');
  const storeOb = text.objectStore('jate');
  const req = storeOb.put({ id: id, val: val });
  const res = await req;
  console.log('Date saved.', res);
};


// TODO: Add logic for a method that gets all the content from the database - DONE
export const getDb = async (val) => {
  console.log('Getting data from jate database');
  const jateDB = await openDB('jate', 1);
  const text = jateDB.transaction('jate', 'readwrite');
  const storeOb = text.objectStore.getAll();
  const res = await req;
  console.log('Data saved.', res);
};


initdb();
