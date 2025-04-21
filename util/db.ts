import postgres from 'postgres'

export const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!,{
    ssl: false,
    connect_timeout: 5 * 1_000
});
