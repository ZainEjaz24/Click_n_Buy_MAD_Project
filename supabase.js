import { createClient } from "@supabase/supabase-js";



const supabaseUrl = 'https://xxuysviwyrhyqvmnjogh.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4dXlzdml3eXJoeXF2bW5qb2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4ODY2OTgsImV4cCI6MjAzMDQ2MjY5OH0.fajsqPn718lNweR1JX_k7ZdbJzFeSPXycY6zYzXswFo";


export const supabase = createClient(supabaseUrl, supabaseAnonKey);