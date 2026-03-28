"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const COOKIE_CONSENT_KEY = "mf-cookie-consent-v1";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (stored !== "accepted" && stored !== "rejected") {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        // Zorunlu çerezler dışındaki tüm çerezler devre dışı bırakılır.
        localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2"
        >
            <div className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-relaxed text-black/75">
                        Deneyiminizi iyileştirmek için çerezleri kullanıyoruz.{" "}
                        <Link
                            href="/cerez-politikasi"
                            className="font-semibold text-black underline underline-offset-4"
                        >
                            Çerez Politikası
                        </Link>{" "}
                        sayfamızı inceleyebilirsiniz.
                    </p>
                    <div className="flex shrink-0 items-center gap-2">
                        <button
                            type="button"
                            onClick={handleReject}
                            className="rounded-lg border border-black/20 bg-transparent px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:border-black/40 hover:text-black"
                        >
                            Reddet
                        </button>
                        <button
                            type="button"
                            onClick={handleAccept}
                            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                        >
                            Kabul Et
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
