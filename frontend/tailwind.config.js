/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        amberDua: '#DCD7C7',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },


      }
      , width: {
        '1/7': '14.2857%',
      },
      dropShadow: {
        'buttonLarge': '6px 6px 0px rgba(255, 255, 255, 1)',
        'buttonSmall': '4px 4px 0px rgba(255, 255, 255, 1)',
        'planNumber':
          ['1px 1px 0px rgba(251, 146, 60, 1)',
            '-1px -1px 0px rgba(251, 146, 60, 1)'
          ]
      },
      backgroundImage: {
        bgHero: 'url("/src/assets/bg-hero.svg")',


      },
      backgroundSize: {
        '300%': '300%',
        '240%': '240%',
        '200%': '200%',
        '180%': '180%',
        '150%': '150%',
        '120%': '120%',
        '75%': '75%',
        '60%': '60%',
        '50%': '50%',
        '40%': '40%',
        '30%': '30%',
        '25%': '25%',

      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}