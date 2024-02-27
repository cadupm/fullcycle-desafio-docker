const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const insertData = async () => {
  const connection = mysql.createConnection(config);

  const insertQuery1 = 'INSERT INTO people(name) VALUES("Cadu")';
  const insertQuery2 = 'INSERT INTO people(name) VALUES("Wesley")';

  const insertPromises = [insertQuery1, insertQuery2].map((query) => {
    return new Promise((resolve, reject) => {
      connection.query(query, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  });

  try {
    await Promise.all(insertPromises);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    connection.end();
  }
};

// Endpoint to fetch data from the table
app.get("/", async (req, res) => {
  const connection = mysql.createConnection(config);

  try {
    const queryResult = await new Promise((resolve, reject) => {
      connection.query("SELECT name FROM people", (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });

    const people = queryResult.map((person) => person.name).join(", ");
    console.log("People:", people);

    res.send(`<h1>Full Cycle Rocks!</h1><p>Lista de pessoas: ${people}</p>`);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    connection.end();
  }
});

// Start the Express server
app.listen(port, () => {
  console.log("Rodando na porta", port);
});

// Insert data after the server is started
insertData();
