"use client";

import Image from "next/image";

export default function AvatarWithStatus({
  imageUrl,
  alt,
}: {
  imageUrl: string;
  alt: string;
}) {
  return (
    <div className="relative flex-shrink-0">
      <Image
        src={imageUrl}
        alt={alt}
        width={80}
        height={80}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white dark:border-gray-600 shadow-lg object-cover"
      />
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
        <span className="text-white text-xs">✓</span>
      </div>
    </div>
  );
}
