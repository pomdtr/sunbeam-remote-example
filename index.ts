// simple_api.js

import { serve } from "https://deno.land/std@0.186.0/http/server.ts";

serve(
  () =>
    new Response(
      JSON.stringify({
        type: "detail",
        preview: { text: "Hello from Deno Deploy!" },
      })
    )
);
