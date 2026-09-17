(function () {
    const reactReady = window.React && window.ReactDOM;
    if (!reactReady) return;

    const { createElement: h } = React;

    const pageName = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    const headerConfigs = {
        'home.html': {
            logoHref: 'index.html',
            links: [
                { href: 'index.html', label: 'Home', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'learn.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'hiragana.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'katakana.html', label: 'Katakana', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'katakana.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'hiragana.html', label: 'Hiragana', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'kanji.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'vocabulary.html', label: 'Vocabulary', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'grammar.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'particles.html', label: 'Particles', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'particles.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'grammar.html', label: 'Grammar', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'vocabulary.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'kanji.html', label: 'Kanji', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'test.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'character-detail.html': {
            logoHref: 'home.html',
            links: [
                { href: 'home.html', label: 'Dashboard', className: 'nav-link' },
                { href: 'test.html', label: 'Take Test', className: 'header-btn' }
            ]
        }
    };

    function SiteHeader({ config }) {
        return h('div', { className: 'container' },
            h('nav', null,
                h('a', { href: config.logoHref, className: 'logo' }, 'Notesjp'),
                h('div', { className: 'nav-links' },
                    config.links.map((link) => h('a', {
                        key: link.href + link.label,
                        href: link.href,
                        className: link.className
                    }, link.label))
                )
            )
        );
    }

    function LandingVisualGrid() {
        const cards = [
            { className: 'card-culture', label: 'CULTURE', sublabel: 'Bunka' },
            { className: 'card-language', label: 'LANGUAGE', sublabel: 'Gengo' },
            { className: 'card-tradition', label: 'TRADITION', sublabel: 'Dento' },
            { className: 'card-nature', label: 'NATURE', sublabel: 'Shizen' }
        ];

        return h(React.Fragment, null,
            h('div', { className: 'hero-visual-bg' }),
            cards.map((card) => h('div', {
                key: card.label,
                className: `visual-card ${card.className}`
            },
                h('span', { className: 'visual-label' }, card.label),
                h('span', { className: 'visual-sublabel' }, card.sublabel)
            ))
        );
    }

    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header.main-header');
        const config = headerConfigs[pageName];
        if (header && config) {
            ReactDOM.createRoot(header).render(h(SiteHeader, { config }));
        }

        const landingVisual = document.querySelector('[data-react-landing-visual]');
        if (landingVisual) {
            ReactDOM.createRoot(landingVisual).render(h(LandingVisualGrid));
        }
    });
}());
