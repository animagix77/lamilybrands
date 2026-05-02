export function Story() {
  return (
    <section id="story" className="story">
      <div className="story-grid">
        <div className="story-text">
          <span className="section-eyebrow">02 — Our Story</span>
          <h2 className="section-title">Lamily is family.</h2>
          <p>
            Lamily was built on something deeper than just food — it was
            built on family. Our name is a reflection of our roots: it brings
            together two family names, <em>Lam</em> and <em>Ly</em>.
            Combined, they form &ldquo;Lamily&rdquo; — a name that sounds
            like family, because that&apos;s exactly what it represents. Not
            just ours, but the idea of bringing people together through
            shared moments.
          </p>
          <p>
            What started as a simple passion for snacks and ice cream
            gradually turned into something much bigger. Over the years, we
            realized these everyday treats played a special role in our
            lives — they weren&apos;t just something to eat, they were part
            of our experiences. A quick break during a long day, late-night
            conversations, celebrations, or small moments spent with the
            people who matter most.
          </p>
          <p>
            To us, snacks and ice cream are more than indulgences —
            they&apos;re pick-me-ups. They have a way of lifting your mood,
            creating comfort, and turning ordinary moments into memorable
            ones.
          </p>
          <p>That belief is the foundation of Lamily.</p>
          <p>
            We&apos;re here to create products that do more than taste good.
            We want every bite to bring a sense of joy, connection, and
            familiarity. Whether you&apos;re sharing with others or enjoying
            a moment to yourself, Lamily is meant to be part of those
            experiences.
          </p>
          <div className="story-numbers">
            <div><span>2026</span><small>Founded</small></div>
            <div><span>2</span><small>Sub-brands</small></div>
            <div><span>11</span><small>People</small></div>
            <div><span>1</span><small>Very loved freezer</small></div>
          </div>
        </div>
        <div className="story-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/tubblys-handheld.jpeg" alt="A Tubbly's bar in hand" />
          <div className="story-caption">
            <em>
              &ldquo;It&apos;s not just about what you&apos;re eating.
              It&apos;s about who you&apos;re sharing it with.&rdquo;
            </em>
            <span>— The Lamily family</span>
          </div>
        </div>
      </div>
    </section>
  );
}
