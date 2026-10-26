document.addEventListener('DOMContentLoaded', function () {
    var NAV = [
    {
        "label": "Home",
        "href": "index.html"
    },
    {
        "label": "Micro-Kernel",
        "children": [
            {
                "label": "TUI Engine",
                "href": "tui-engine.html"
            },
            {
                "label": "TUIDex",
                "href": "tuidex.html"
            },
            {
                "label": "CARDex",
                "href": "cardex.html"
            },
            {
                "label": "Social Media",
                "href": "social-media.html"
            }
        ]
    },
    {
        "label": "Applications",
        "children": [
            {
                "label": "Website Builder",
                "href": "website-builder.html"
            },
            {
                "label": "Chaos Creator",
                "href": "chaos-creator.html"
            },
            {
                "label": "Transaction Gaps",
                "href": "trans-gap.html"
            },
            {
                "label": "Data Quality Report Card",
                "href": "report-card.html"
            }
        ]
    },
    {
        "label": "Business Reality",
        "href": "business.html"
    },
    {
        "label": "Documents",
        "children": [
            {
                "label": "ATS Expos\u00e9",
                "href": "ats-expose.html"
            },
            {
                "label": "The Gross Margin Trap",
                "href": "margin-trap.html"
            }
        ]
    },
    {
        "label": "More...",
        "children": [
            {
                "label": "About",
                "href": "about.html"
            },
            {
                "label": "Contact",
                "href": "contact.html"
            },
            {
                "label": "Support",
                "href": "support.html"
            }
        ]
    }
];
    
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    var base = document.querySelector('script[src$="nav.js"]').src.replace(/js\/nav\.js$/, '');
    var here = window.location.pathname.split('/').pop() || 'index.html';
    
    function buildItem(item) {
        if (item.children) {
            var childHtml = item.children.map(buildItem).join('');
            return '<div class="nav-dropdown">' +
                       '<span class="nav-dropdown-label">' + item.label + ' ▾</span>' +
                       '<div class="nav-dropdown-menu">' + childHtml + '</div>' +
                   '</div>';
        }
        var cls = '';
        if (item.class) cls = item.class;
        else {
            var file = item.href.split('#')[0];
            if (file === here && item.href.indexOf('#') === -1) cls = 'active';
        }
        return '<a href="' + base + item.href + '"' + (cls ? ' class="' + cls + '"' : '') + '>' + item.label + '</a>';
    }
    
    nav.className = 'navbar';
    nav.innerHTML =
        '<div class="container">' +
            '<button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">' +
                '<span></span><span></span><span></span>' +
            '</button>' +
            '<div class="nav-links">' +
                NAV.map(buildItem).join('') +
            '</div>' +
        '</div>';
        
    var toggle = nav.querySelector('.nav-toggle');
    var links = nav.querySelector('.nav-links');
    
    toggle.addEventListener('click', function () {
        var isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.classList.toggle('open', isOpen);
    });
});