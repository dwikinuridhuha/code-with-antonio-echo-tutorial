import { useQuery } from "convex/react";
import { api } from "@workspace/backend/convex/_generated/api";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello app/web</h1>
      </div>
    </div>
  )
}
