import { Pool } from "pg";



const pool = new Pool({
    connectionString: process.env.DB_URI,
    ssl: process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false
})


pool.on("connect", () => {
    console.log("Database connected successfully");
});

export default pool;