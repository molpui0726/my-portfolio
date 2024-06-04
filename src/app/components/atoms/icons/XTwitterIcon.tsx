import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

type SnsIconProps = {
    size: string | number;
    color?: string; // undefined or string
}

export const XTwitterIcon: React.FC<SnsIconProps> = ({ size, color }) => {
    return (
        <Link href="https://x.com/Hogeta_KL">
            <FaXTwitter size={size} color={color} />
        </Link>
    );
};