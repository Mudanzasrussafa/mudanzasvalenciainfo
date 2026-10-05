import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { Fragment } from "react";
import { pages, slugByTitle } from "@/lib/pages";

// Lee el texto de una página (src/content/<slug>.md) con un formato mínimo:
// "#2 " / "#3 " encabezados · "- " lista · "1. " lista numerada
// "|| a | b" cabecera de tabla, "| a | b" fila · resto párrafos
// En línea: **negrita** y [texto](url)
export function readContent(slug: string): string {
  return fs.readFileSync(path.join(process.cwd(), "src/content", `${slug}.md`), "utf8");
}

function Inline({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) parts.push(<strong key={i++}>{m[1]}</strong>);
    else {
      const href = m[3];
      parts.push(
        href.startsWith("/") ? (
          <Link key={i++} href={href}>
            {m[2]}
          </Link>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noopener">
            {m[2]}
          </a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

type Block =
  | { t: "h2" | "h3" | "p"; x: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "cards"; slugs: string[] };

function parse(src: string): Block[] {
  const lines = src.split("\n").map((l) => l.trim()).filter(Boolean);
  const out: Block[] = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const linkSlug = l.startsWith("#3 ") ? slugByTitle[l.slice(3).toLowerCase()] : undefined;
    if (linkSlug) {
      const prev = out[out.length - 1];
      if (prev && prev.t === "cards") prev.slugs.push(linkSlug);
      else out.push({ t: "cards", slugs: [linkSlug] });
      continue;
    }
    if (l.startsWith("#2 ")) out.push({ t: "h2", x: l.slice(3) });
    else if (l.startsWith("#3 ")) out.push({ t: "h3", x: l.slice(3) });
    else if (l.startsWith("- ") || /^\d+\. /.test(l)) {
      const t = l.startsWith("- ") ? "ul" : "ol";
      const item = l.replace(/^(- |\d+\. )/, "");
      const prev = out[out.length - 1];
      if (prev && prev.t === t) prev.items.push(item);
      else out.push({ t, items: [item] });
    } else if (l.startsWith("|")) {
      const head = l.startsWith("||");
      const cells = l.replace(/^\|\|?/, "").split("|").map((c) => c.trim());
      const prev = out[out.length - 1];
      if (head || !prev || prev.t !== "table") out.push({ t: "table", head: head ? cells : [], rows: head ? [] : [cells] });
      else prev.rows.push(cells);
    } else out.push({ t: "p", x: l });
  }
  return out;
}

export function Article({ src, skipFirst = 0 }: { src: string; skipFirst?: number }) {
  const blocks = parse(src).slice(skipFirst);
  return (
    <div className="r-article">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2 key={i}>
                <Inline text={b.x} />
              </h2>
            );
          case "h3":
            return (
              <h3 key={i}>
                <Inline text={b.x} />
              </h3>
            );
          case "p":
            if (/^\*\*[^*]+\*\*$/.test(b.x) && /\d/.test(b.x))
              return (
                <p key={i} className="r-destacado">
                  {b.x.slice(2, -2)}
                </p>
              );
            return (
              <p key={i}>
                <Inline text={b.x} />
              </p>
            );
          case "ul":
          case "ol": {
            const Tag = b.t;
            return (
              <Tag key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </Tag>
            );
          }
          case "table":
            return (
              <div key={i} className="r-tabla">
                <table>
                  {b.head.length > 0 && (
                    <thead>
                      <tr>
                        {b.head.map((h, j) => (
                          <th key={j}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "cards":
            return (
              <div key={i} className="r-cards">
                {b.slugs.map((s) => (
                  <Link key={s} href={`/${s}/`} className="r-card">
                    <span className="mono">{pages[s].eyebrow}</span>
                    <span className="r-card-t">{pages[s].h1}</span>
                    <span className="r-card-go">Leer guía →</span>
                  </Link>
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}

// Primer párrafo del texto, para la cabecera de cada página
export function firstParagraphs(src: string, n: number): string[] {
  return parse(src)
    .slice(0, n)
    .filter((b): b is { t: "p"; x: string } => b.t === "p")
    .map((b) => b.x);
}

export { Inline, Fragment };
