import React from "react";
import { IconBase, IconType } from "react-icons";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";

export default function MenuItem({
  title,
  address,
  Icon,
}: {
  title: string;
  address: string;
  Icon: IconType;
}) {
  return (
    <Link href={address} className="hover:text-amber-500 text-orange-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
