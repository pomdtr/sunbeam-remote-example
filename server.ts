import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import * as sunbeam from "https://deno.land/x/sunbeam@v1.0.0-rc.1/index.d.ts";

serve(
  () =>
    new Response(
      JSON.stringify({
        type: "detail",
        preview: { text: "Hello from Deno Deploy!" },
        actions: [{ type: "copy", text: "Hello from Deno Deploy!" }],
      } as sunbeam.Detail)
    )
);
