import Image from "next/image";

export function EliteSeal({
  className = "h-9 w-auto",
  floating = false,
}: {
  className?: string;
  floating?: boolean;
}) {
  if (floating) {
    return (
      <div className="ace-elite-stage">
        <Image
          src="/images/ace-elite-emblem.png"
          alt=""
          width={1280}
          height={720}
          className="ace-elite-emblem"
        />
      </div>
    );
  }

  return (
    <Image
      src="/images/ace-elite-emblem.png"
      alt=""
      width={1280}
      height={720}
      className={`ace-elite-mark ${className}`}
    />
  );
}
