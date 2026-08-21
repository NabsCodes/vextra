"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SELECTED_PROJECTS, type SelectedProject } from "@/lib/work/projects";
import { cn } from "@/lib/utils";

function ProjectDossier({
  project,
  index,
}: {
  project: SelectedProject;
  index: number;
}) {
  const imageFirstOnDesktop = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="border-charcoal-grey/15 border-t"
    >
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]",
          !imageFirstOnDesktop &&
            "md:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]",
        )}
      >
        {/* Screenshot — always first on mobile; alternates on desktop */}
        <div
          className={cn(
            "border-charcoal-grey/15 relative border-b md:border-b-0",
            imageFirstOnDesktop
              ? "md:order-1 md:border-r"
              : "md:order-2 md:border-l",
          )}
        >
          <div className="bg-charcoal-grey/5 relative aspect-16/10 w-full overflow-hidden">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              unoptimized={project.imageSrc.endsWith(".svg")}
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 62vw"
              priority={index === 0}
            />
            {project.placeholder ? (
              <span className="bg-deep-teal absolute top-3 right-3 z-10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-white uppercase">
                Development placeholder
              </span>
            ) : null}
          </div>
        </div>

        {/* Project information */}
        <div
          className={cn(
            "flex flex-col justify-between px-5 py-8 sm:px-8 md:px-10 md:py-12",
            imageFirstOnDesktop ? "md:order-2" : "md:order-1",
          )}
        >
          <div>
            <div className="mb-6 flex items-start justify-between gap-4">
              <span className="text-vextra-green font-display text-5xl leading-none font-medium tracking-tight md:text-6xl">
                {project.coordinate}
              </span>
            </div>
            <p className="text-vextra-green mb-3 text-[11px] font-semibold tracking-[0.22em] uppercase">
              {project.category}
            </p>
            <h3 className="font-display text-charcoal-grey text-3xl leading-tight font-medium tracking-tight md:text-4xl">
              {project.name}
            </h3>
            <p className="text-charcoal-grey/65 mt-5 max-w-md text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="border-charcoal-grey/15 mt-10 grid grid-cols-2 gap-6 border-t pt-6">
            <div>
              <p className="text-charcoal-grey/45 mb-2 text-[10px] tracking-[0.2em] uppercase">
                Surface
              </p>
              <p className="text-charcoal-grey text-sm font-medium">
                {project.surface}
              </p>
            </div>
            <div>
              <p className="text-charcoal-grey/45 mb-2 text-[10px] tracking-[0.2em] uppercase">
                Vextra Role
              </p>
              <p className="text-charcoal-grey text-sm font-medium">
                {project.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedWorkSection() {
  return (
    <section className="bg-off-white border-charcoal-grey/10 border-t">
      <div className="px-6 pt-16 md:px-12 md:pt-24 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="text-vextra-green font-medium">02</span>
              <div className="bg-vextra-green h-px w-12" />
              <span className="text-charcoal-grey/70 text-sm tracking-wide">
                Selected Work
              </span>
            </div>
            <h2 className="font-display text-charcoal-grey text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              Systems built for use.
            </h2>
          </div>
          <p className="text-charcoal-grey/40 font-display text-xs tracking-[0.2em] uppercase">
            Project register 01–03
          </p>
        </motion.div>
      </div>

      <div className="border-charcoal-grey/15 border-y">
        {SELECTED_PROJECTS.map((project, index) => (
          <ProjectDossier key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="px-6 py-8 md:px-12 lg:px-16">
        <div className="border-vextra-green/40 flex items-center justify-end gap-4 border-t pt-6">
          <span className="text-vextra-green text-[11px] tracking-[0.2em] uppercase">
            More stories when the full site is live
          </span>
        </div>
      </div>
    </section>
  );
}
