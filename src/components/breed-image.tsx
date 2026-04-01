import Image from "next/image";

type BreedImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function BreedImage({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: BreedImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[linear-gradient(180deg,_#f7efe0_0%,_#e9dac0_100%)] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
