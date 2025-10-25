import { config } from "dotenv";

config();

/* ALL ENV VARIABLES FETCHED HERE */

export const PORT=process.env.PORT;
export const DATABASE_URL=process.env.DATABASE_URL;