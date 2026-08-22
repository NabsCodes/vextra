import type { LegalSectionContent, LegalTextPart } from "@/types/legal";

function withContentKeys<T>(items: T[], getIdentity: (item: T) => string) {
  const occurrences = new Map<string, number>();

  return items.map((item) => {
    const identity = getIdentity(item);
    const occurrence = occurrences.get(identity) ?? 0;
    occurrences.set(identity, occurrence + 1);

    return { item, key: `${identity}:${occurrence}` };
  });
}

function getTextPartIdentity(part: LegalTextPart) {
  if (typeof part === "string") return `text:${part}`;
  if (part.type === "break") return "break";
  return `link:${part.href}:${part.label}`;
}

function LegalText({ parts }: { parts: LegalTextPart[] }) {
  return withContentKeys(parts, getTextPartIdentity).map(
    ({ item: part, key }) => {
      if (typeof part === "string") return part;
      if (part.type === "break") return <br key={key} />;

      return (
        <a key={key} href={part.href}>
          {part.label}
        </a>
      );
    },
  );
}

export function LegalSection({ title, blocks }: LegalSectionContent) {
  return (
    <section>
      <h2 className="text-charcoal-grey font-display mb-4 text-xl font-medium tracking-tight">
        {title}
      </h2>
      <div className="text-charcoal-grey/70 [&_a]:text-vextra-green hover:[&_a]:text-deep-teal [&_h4]:text-charcoal-grey space-y-4 text-[15px] leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:tracking-wide [&_h4]:uppercase [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
        {withContentKeys(blocks, (block) => JSON.stringify(block)).map(
          ({ item: block, key }) => {
            if (block.type === "subheading") {
              return <h4 key={key}>{block.text}</h4>;
            }

            if (block.type === "list") {
              return (
                <ul key={key}>
                  {withContentKeys(block.items, (item) =>
                    JSON.stringify(item),
                  ).map(({ item, key: itemKey }) => (
                    <li key={itemKey}>
                      {item.label ? <strong>{item.label}</strong> : null}{" "}
                      <LegalText parts={item.parts} />
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={key}>
                <LegalText parts={block.parts} />
              </p>
            );
          },
        )}
      </div>
    </section>
  );
}
