export const DEFAULT_HEADERS = {
    'content-type': 'text/plain; charset=UTF-8',
    'plural-forms': 'nplurals=2; plural=(n!=1);',
};

export const ALIASES = {
    gt: 'gettext',
    nt: 'ngettext',
    pt: 'pgettext',
};

export const FUNCTION_NAMES = {
    gettext: ['msgid'],
    dgettext: ['domain', 'msgid'],
    ngettext: ['msgid', 'msgid_plural', 'count'],
    dngettext: ['domain', 'msgid', 'msgid_plural', 'count'],
    pgettext: ['msgctxt', 'msgid'],
    dpgettext: ['domain', 'msgctxt', 'msgid'],
    npgettext: ['msgctxt', 'msgid', 'msgid_plural', 'count'],
    dnpgettext: ['domain', 'msgctxt', 'msgid', 'msgid_plural', 'count'],
};


export const PO_PRIMITIVES = {
    MSGSTR: 'msgstr',
    MSGID: 'msgid',
    MSGID_PLURAL: 'msgid_plural',
};

export const DEFAULT_POT_FILENAME = 'traslations.po';

export const DEFAULT_LOCALE = 'EN_US';

export const DEFAULT_CONFIG_PATH = '.polyglot';
