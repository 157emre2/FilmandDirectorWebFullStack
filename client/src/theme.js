const colors = {
    primary_color: "#092635",
    secondary_color: "#1B4242",
    third_color: "#5C8374",
    fourth_color: "#9EC8B9"
}

export const themeSettings = {
    light: {
        backgroundColor: colors.fourth_color,
        textColor: "black",
        bodyBackgroundColor: "white",
        button: {
            primary: {
                textColor: colors.fourth_color,
                backgroundColor: colors.primary_color,
                borderColor: colors.primary_color,
                hoverBackgroundColor: colors.third_color,
                hoverTextColor: colors.primary_color
            },
            secondary: {
                textColor: colors.primary_color,
                backgroundColor: colors.fourth_color,
                borderColor: colors.primary_color,
                hoverBackgroundColor: colors.secondary_color,
                hoverTextColor: colors.fourth_color
            }
        }
    },
    dark: {
        backgroundColor: colors.primary_color,
        textColor: colors.fourth_color,
        bodyBackgroundColor: colors.secondary_color,
        button: {
            primary: {
                textColor: colors.primary_color,
                backgroundColor: colors.fourth_color,
                borderColor: colors.fourth_color,
                hoverBackgroundColor: colors.secondary_color,
                hoverTextColor: colors.fourth_color
            },
            secondary: {
                textColor: colors.fourth_color,
                backgroundColor: colors.primary_color,
                borderColor: colors.fourth_color,
                hoverBackgroundColor: colors.third_color,
                hoverTextColor: colors.primary_color
            }
        }
    }
}