import useScrollReveal from '../hooks/useScrollReveal';

export default function TaglineSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-32" ref={ref}>
      <div className="page-container text-center max-w-4xl mx-auto">
        <h2 className="title-7 text-primary text-balance reveal">
          AutoML doesn&apos;t just train models.<br />
          <span className="text-tertiary">It picks the one that actually generalizes.</span>
        </h2>
        <p className="text-large-sz text-secondary max-w-2xl mx-auto mt-8 reveal reveal-d1">
          Most AutoML tools optimize for leaderboard metrics. AutoML uses generalization-first scoring with 9-point stability checks to find models that perform reliably on unseen data.
        </p>
      </div>
    </section>
  );
}
