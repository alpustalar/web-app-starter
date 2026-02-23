"use client";
import {  useEffect, useState } from "react";

type Props = {
    children: Readonly<React.ReactNode>;
};
export const ClientOnly = ({ children }: Props) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;
    return <>{children}</>;
};

export default ClientOnly;
