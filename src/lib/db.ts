import { PGlite } from "@electric-sql/pglite";

const db = new PGlite('idb://patients-db')

const createTable = async () => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS patients (
        id TEXT PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        dateofbirth TEXT NOT NULL,
        sex TEXT NOT NULL,
        height REAL NOT NULL,
        weight REAL NOT NULL,
        maritalStatus TEXT NOT NULL,
        contact_email TEXT NOT NULL,
        contact_phone TEXT NOT NULL,
        address_street TEXT NOT NULL,
        address_city TEXT NOT NULL,
        address_state TEXT NOT NULL,
        address_zip TEXT NOT NULL,
        takingMedications TEXT NOT NULL,
        emergencyContact_firstname TEXT NOT NULL,
        emergencyContact_lastname TEXT NOT NULL,
        emergencyContact_relationship TEXT NOT NULL,
        emergencyContact_phone TEXT NOT NULL
      );
    `);
  };
  
  createTable(); 


export default db;
