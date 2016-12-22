// Base16 Mexico Light
// Scheme: Sheldon Johnson

var colour_scheme = {
        'base00': '#f8f8f8',
        'base01': '#e8e8e8',
        'base02': '#d8d8d8',
        'base03': '#b8b8b8',
        'base04': '#585858',
        'base05': '#383838',
        'base06': '#282828',
        'base07': '#181818',
        'base08': '#ab4642',
        'base09': '#dc9656',
        'base0A': '#f79a0e',
        'base0B': '#538947',
        'base0C': '#4b8093',
        'base0D': '#7cafc2',
        'base0E': '#96609e',
        'base0F': '#a16946',
};

var cursor_colour = hexToRgba(colour_scheme.base05, 0.5);
term_.prefs_.set('background-color', colour_scheme.base00);
term_.prefs_.set('foreground-color', colour_scheme.base05);
term_.prefs_.set('cursor-color', cursor_colour);

term_.prefs_.set('color-palette-overrides', 
                [colour_scheme.base00,
                colour_scheme.base08,
                colour_scheme.base0B,
                colour_scheme.base0A,
                colour_scheme.base0D,
                colour_scheme.base0E,
                colour_scheme.base0C,
                colour_scheme.base05,
                colour_scheme.base03,
                colour_scheme.base08,
                colour_scheme.base0B,
                colour_scheme.base0A,
                colour_scheme.base0D,
                colour_scheme.base0E,
                colour_scheme.base0C,
                colour_scheme.base07,
                colour_scheme.base09,
                colour_scheme.base0F,
                colour_scheme.base01,
                colour_scheme.base02,
                colour_scheme.base04,
                colour_scheme.base06]);

function hexToRgba(hex, a) {
        hex = hex.replace(/[^0-9A-F]/gi, "");
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return ["rgba(", [r, g, b, a].join(), ")"].join('');
}
