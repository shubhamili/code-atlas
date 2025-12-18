// import type { Request, Response } from "express";
// import pool from "../config/db.js";

// const getRepoAtlas = async (req: Request, res: Response) => {

//     const query = `

//     CREATE TABLE  users (
//       email TEXT UNIQUE NOT NULL,
//       name TEXT,
//       created_at TIMESTAMP DEFAULT NOW()
//     );

//   `;

//     const dod = await pool.query(query);


//     await pool.query(`  INSERT INTO users (email, name)
//     VALUES ('admin@mail.com', 'Admin User')
//     ON CONFLICT (email) DO NOTHING;`);


//     console.log("dod", dod);

//     const result = await pool.query("SELECT * FROM users");
//     res.json(result.rows);

// }


// export { getRepoAtlas };



import type { Request, Response } from "express";
import pool from "../config/db.js";

const getRepoAtlas = async (_req: Request, res: Response) => {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

        await pool.query(`
      INSERT INTO users (email, name)
      VALUES ('admin@mail.com', 'Admin User')
      ON CONFLICT (email) DO NOTHING;
    `);

        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};

export { getRepoAtlas };
