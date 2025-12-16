export default function Home() {
  return (
    <div className="home-container">
      <main className="home-main">
        {/* Hero Section */}
        <div className="home-hero">
          {/* Brand/Logo */}
          <div className="home-brand-container home-animate-fade-in-up">
            <div className="home-brand-logo">
              <span className="home-brand-logo-text">V</span>
            </div>
            <h1 className="home-brand-name">Vasudeva TV</h1>
            <p className="home-tagline">Free Television For Everyone</p>
          </div>

          {/* Main Title */}
          <h1 className="home-title home-animate-fade-in-up home-delay-100">
            Welcome to Vasudeva TV
          </h1>

          {/* Subtitle */}
          <p className="home-subtitle home-animate-fade-in-up home-delay-200">
            Your gateway to free television streams and channel websites from
            around the world
          </p>

          {/* Description */}
          <div className="home-description home-animate-fade-in-up home-delay-300">
            <p>
              Enjoy unlimited access to live TV channels, streaming content, and
              official broadcaster websites. Experience entertainment from
              different countries and cultures, all in one place and completely
              free.
            </p>
          </div>

          {/* Info Box */}
          <div className="home-info-box home-animate-fade-in-up home-delay-400">
            <p className="home-info-title">
              Select a channel from the sidebar to start watching
            </p>
            <p className="home-info-text">
              Navigate through our collection of channels and websites. Some
              links will show live TV streams, while others may direct you to
              official channel websites with their full content library. All
              content is freely available.
            </p>
          </div>

          {/* Features Grid */}
          <div className="home-features-grid">
            <div className="home-feature-card">
              <div className="home-feature-icon home-icon-live">📺</div>
              <h3 className="home-feature-title">Live TV Channels</h3>
              <p className="home-feature-description">
                Watch live broadcasts from television channels around the globe
                in real-time with high quality streams.
              </p>
            </div>

            <div className="home-feature-card">
              <div className="home-feature-icon home-icon-globe">🌍</div>
              <h3 className="home-feature-title">Global Content</h3>
              <p className="home-feature-description">
                Access channels from different countries, languages, and
                cultural backgrounds. Discover new entertainment.
              </p>
            </div>

            <div className="home-feature-card">
              <div className="home-feature-icon home-icon-free">🆓</div>
              <h3 className="home-feature-title">Completely Free</h3>
              <p className="home-feature-description">
                No subscriptions, no hidden fees, no registration required.
                Enjoy all content without any payment.
              </p>
            </div>

            <div className="home-feature-card">
              <div className="home-feature-icon home-icon-variety">📱</div>
              <h3 className="home-feature-title">Multiple Formats</h3>
              <p className="home-feature-description">
                Some are live streams, others are official websites - providing
                variety in content presentation and access.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="home-cta-container">
            <a href="/channels" className="home-button home-button-primary">
              Browse All Channels
            </a>
            <a
              href="#how-it-works"
              className="home-button home-button-secondary"
            >
              How It Works
            </a>
          </div>

          {/* Stream Preview Section */}
          <div className="home-stream-container">
            <div className="home-stream-header">
              <h2 className="home-stream-title">Live Preview</h2>
              <p className="home-stream-subtitle">
                Example stream - Channel varies based on your selection
              </p>
            </div>

            <div className="home-stream-frame">
              <iframe
                src="https://www.ms.now/live"
                className="home-iframe"
                title="Live TV Stream Preview"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            <div className="home-note">
              <p>
                <strong>Note:</strong> The content above may show either a live
                TV broadcast or an official channel website, depending on the
                selected channel and content availability. Some streams may be
                region-restricted.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="home-footer">
            <p className="home-footer-text">
              Disclaimer: Vasudeva TV aggregates freely available streaming
              content from official sources. We do not host or control the
              streams displayed. Content availability may vary by region.
            </p>
            <p className="home-footer-text">
              © {new Date().getFullYear()} Vasudeva TV - Free Television
              Platform
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
