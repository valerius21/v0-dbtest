import { sql } from "@/util/db";

async function fetchTemplates() {
  'use server'
  const result = await sql`SELECT * FROM templates`;
  return result;
}

export default async function Home() {
  const templates = await fetchTemplates();

  return (<div style={{ padding: '20px' }}>
    <pre>{JSON.stringify(templates, null, 2)}</pre>
  </div>);
}
