"use client";

import { useState } from "react";

export default function CopyPhone({ phone }: { phone: string }) {
  const [label, setLabel] = useState("Copiar número");
  return (
    <button
      type="button"
      className="r-copiar"
      onClick={() => {
        navigator.clipboard
          ?.writeText(phone)
          .then(() => setLabel("Copiado"))
          .catch(() => setLabel(phone))
          .finally(() => setTimeout(() => setLabel("Copiar número"), 1800));
      }}
    >
      {label}
    </button>
  );
}
