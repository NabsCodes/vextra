import { ProjectEnquiryForm } from "@/components/contact/project-enquiry-form";
import { contactPageContent } from "@/content/contact";

export function ContactIntake() {
  const { intro } = contactPageContent;

  return (
    <section className="border-charcoal-grey/10 bg-charcoal-grey/2.5 border-t">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-[minmax(0,0.78fr)_minmax(620px,1.22fr)]">
          <div className="border-charcoal-grey/10 flex flex-col justify-between py-12 md:py-16 lg:min-h-180 lg:border-r lg:py-20 lg:pr-12">
            <div className="max-w-xl">
              <div className="mb-7 flex items-center gap-4">
                <span
                  className="bg-vextra-green h-px w-10"
                  aria-hidden="true"
                />
                <p className="text-charcoal-grey text-xs font-medium tracking-[0.16em] uppercase">
                  {intro.eyebrow}
                </p>
              </div>
              <h1 className="font-display text-charcoal-grey text-4xl leading-[0.98] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {intro.title}
              </h1>
              <p className="text-charcoal-grey/60 mt-6 max-w-lg text-base leading-7 sm:text-lg sm:leading-8">
                {intro.description}
              </p>
            </div>

            <div className="border-charcoal-grey/15 mt-12 max-w-lg border-t pt-6 lg:mt-20">
              <ol className="space-y-3">
                {intro.nextSteps.map((step, index) => (
                  <li
                    key={step}
                    className="text-charcoal-grey/60 flex items-baseline gap-3 text-sm leading-6"
                  >
                    <span className="text-vextra-green text-[10px] font-medium tracking-[0.16em]">
                      0{index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="py-8 sm:py-10 md:py-12 lg:flex lg:items-center lg:py-16 lg:pl-12">
            <div className="w-full">
              <ProjectEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
