import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/message/BNFUXLUQ6BABF1";

type WhatsAppIconProps = React.ComponentProps<"svg">;

export function WhatsAppIcon({ className, ...props }: WhatsAppIconProps) {
    return (
        <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className={cn("h-6 w-6", className)}
            {...props}
        >
            <path
                fill="currentColor"
                d="M13.601 2.326A7.854 7.854 0 0 0 8.017 0a7.897 7.897 0 0 0-6.31 12.654L0 16l3.475-1.627a7.944 7.944 0 0 0 4.542 1.421h.003a7.897 7.897 0 0 0 5.58-13.468ZM8.02 14.39a6.54 6.54 0 0 1-3.329-.91l-.238-.141-2.062.965.55-2.01-.154-.247a6.54 6.54 0 0 1 1.007-8.338A6.54 6.54 0 0 1 8.02 1.31a6.544 6.544 0 0 1 4.637 11.179A6.54 6.54 0 0 1 8.02 14.39Zm3.65-4.84c-.2-.1-1.18-.58-1.36-.65-.18-.06-.31-.1-.44.1-.13.2-.51.65-.62.78-.11.13-.23.15-.43.05-.2-.1-.82-.3-1.56-.96-.58-.51-.97-1.15-1.08-1.35-.11-.2-.01-.31.08-.41.08-.08.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.44-1.06-.61-1.45-.16-.39-.33-.34-.44-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.69.67-.69 1.64 0 .97.71 1.91.81 2.04.1.13 1.4 2.14 3.4 3 .48.21.85.33 1.14.42.48.15.91.13 1.25.08.38-.06 1.18-.48 1.34-.95.17-.47.17-.88.12-.95-.05-.08-.18-.13-.38-.23Z"
            />
        </svg>
    );
}

export function WhatsAppFab() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden bize yazın"
            className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/60 sm:bottom-6 sm:right-6"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366]/10" />
            <WhatsAppIcon className="relative h-8 w-8 text-[#25D366]" />
        </a>
    );
}

export { WHATSAPP_URL };
