import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type SnsIconProps = {
    size: string | number;
    color?: string; // undefined or string
}

export const GithubIcon: React.FC<SnsIconProps> = ({ size, color }) => {
    return (
        <Link href="https://github.com/YKhm20020">
            <FaGithub size={size} color={color} />
        </Link>
    );
};

