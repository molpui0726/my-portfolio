import Link from 'next/link';
import Image from 'next/image';

type SnsIconProps = {
    href: string;
    src: string;
    alt: string;
}

export const SnsIcon: React.FC<SnsIconProps> = ({ href, src, alt }) => {
    // ここで条件付きスタイルを設定
    const isRounded = !src.includes('XTwitter'); // Xのアイコンは四角形に

    return (
        <Link href={href}>
            <div className={isRounded ? 'rounded-full w-20 h-20' : 'w-20 h-20'}>
                <Image src={src} alt={alt} width={200} height={200} style={{ borderRadius: isRounded ? '50%' : '0%' }} />
            </div>
        </Link>
    );
};
