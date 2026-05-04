import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: 'http://localhost:3000'

    // http://localhost:3000  https://tiles-gallery-a8-sable.vercel.app/
})