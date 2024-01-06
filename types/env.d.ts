declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // readonly NEXT_PUBLIC_API_URL: string;
            // readonly NEXT_PUBLIC_STATUS: string;
            // readonly NEXT_PUBLIC_COMMIT_HASH: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
