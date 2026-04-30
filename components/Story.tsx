export function Story() {
  return (
    <section id="story" className="story">
      <div className="story-grid">
        <div className="story-text">
          <span className="section-eyebrow">02 — Our Story</span>
          <h2 className="section-title">Lamily is named after a typo.</h2>
          <p>
            In 2018, our founder Mei was texting her sister about starting a
            family ice cream business. Autocorrect turned &ldquo;family&rdquo;
            into &ldquo;Lamily.&rdquo; She kept it. It felt right — a little
            lopsided, a little handmade, very ours.
          </p>
          <p>
            Today Lamily is two sub-brands and one very small team working out
            of a converted dairy in Chicago. We don&apos;t do thirty flavors.
            We do a handful, and we do them until they&apos;re unembarrassing.
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
            <em>&ldquo;It&apos;s just dessert. It&apos;s also kind of everything.&rdquo;</em>
            <span>— Mei, founder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
