// a hook to safely access the window object
import { useEffect, useState } from "react";

export const useOrigin = () => {
    const [mounted, setMounted] = useState(false);
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return ''
    }

    return origin;
};