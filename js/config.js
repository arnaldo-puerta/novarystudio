/* ==========================================================================
   NALU · Conexión con Supabase
   Copia estos dos valores de Supabase → Project Settings → API Keys.
   Ambos son públicos por diseño: la seguridad la dan las reglas (RLS)
   de supabase/esquema.sql, que solo dejan escribir al correo admin.

   Mientras estén vacíos, el sitio muestra data/catalogo.json y el admin
   indica cómo configurarlo.
   ========================================================================== */

window.NALU_SUPABASE = {
    url: "",            // ej. "https://abcdefghijkl.supabase.co"
    clave: ""           // la "Publishable key" (sb_publishable_…) o la "anon key"
};
