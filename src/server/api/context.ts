import { adminAuth } from "@/lib/firebase/admin";

export const createContext = async ({ req }: { req: Request }) => {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) return { user: null };
    try {
        const decodedUser = await adminAuth.verifyIdToken(token);
        return { user: decodedUser };
    } catch (error) {
        return { user: null };
    }
};