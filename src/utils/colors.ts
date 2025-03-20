export const Colors: {primary: Color, secondary: Color, text: Color} = {
    primary: {
        main: "#749C3C",
        light: "#96B16A",
        dark: "#78883C"
    },
    secondary: {
        main: '#2876bc',
        light: '#78A8D4',
        dark: '#014e92'
    },
    text: {
        main: '#f2f2f2'
    }
}

interface Color {
    main: string,
    light?: string,
    dark?: string
}