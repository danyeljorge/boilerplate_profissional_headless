import Image from 'next/image';


export default function Logo () {
    return (

        <Image

            src="/logo.webp"
            alt="logo"
            width={180}
            height={60}
            priority

        />
    );
}