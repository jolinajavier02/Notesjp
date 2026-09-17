(function () {
    const reactReady = window.React && window.ReactDOM;
    if (!reactReady) return;

    const { createElement: h } = React;

    const routeNames = new Set([
        'home',
        'learn',
        'hiragana',
        'katakana',
        'kanji',
        'grammar',
        'particles',
        'vocabulary',
        'test',
        'character-detail'
    ]);

    function getRouteName() {
        const parts = window.location.pathname.split('/').filter(Boolean);
        const lastPart = parts[parts.length - 1] || 'index';
        const name = lastPart.replace(/\.html$/i, '').toLowerCase();
        return name === 'index' ? 'index' : name;
    }

    function cleanCurrentUrl() {
        const routeName = getRouteName();
        if (!window.location.pathname.endsWith('.html') || !routeNames.has(routeName)) return;

        const cleanPath = `/${routeName}`;
        window.history.replaceState(null, '', `${cleanPath}${window.location.search}${window.location.hash}`);
    }

    cleanCurrentUrl();

    const pageName = getRouteName();

    const headerConfigs = {
        home: {
            logoHref: '/',
            links: [
                { href: '/', label: 'Home', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        learn: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        hiragana: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/katakana', label: 'Katakana', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        katakana: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/hiragana', label: 'Hiragana', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        kanji: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/vocabulary', label: 'Vocabulary', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        grammar: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/particles', label: 'Particles', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        particles: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/grammar', label: 'Grammar', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        vocabulary: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/kanji', label: 'Kanji', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        test: {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
            ]
        },
        'character-detail': {
            logoHref: '/home',
            links: [
                { href: '/home', label: 'Dashboard', className: 'nav-link' },
                { href: '/test', label: 'Take Test', className: 'header-btn' }
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
