/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontSize: {
		  h1: ["calc(2.875rem + 1.5vw)", { lineHeight: "1.2" }],
		  h2: ["calc(1.875rem + 1.5vw)", { lineHeight: "1.2" }],
		  h3: ["calc(1.325rem + 0.9vw)", { lineHeight: "1.2" }],
		  h4: ["calc(1.225rem + 0.6vw)", { lineHeight: "1.2" }],
		  h5: ["calc(1.175rem + 0.4vw)", { lineHeight: "1.2" }],
		  h6: ["calc(1.150rem + 0.2vw)", { lineHeight: "1.2" }],
		  body: "1.25rem",
		  small: "0.875rem",
		},
		typography: {
		  DEFAULT: {
			body: {
			  'h1, h2, h3, h4, h5, h6, p': {
				'text-wrap': 'balance',
				'overflow-wrap': 'balance',
			  },
			},
		  },
		},
		colors: {
		  primary: {
			DEFAULT: '#EBC686',
			light: '#F5D7A4',
			dark: '#D9A75F',
		  },
		  secondary: {
			DEFAULT: '#D7B375',
			light: '#E9C89A',
			dark: '#B7965D',
		  },
		  accent: {
			DEFAULT: '#C17C74',
			light: '#D9948D',
			dark: '#A6665F',
		  },
		},
		spacing: {
		  xs: "0.5rem",
		  sm: "1rem",
		  md: "1.5rem",
		  lg: "2rem",
		  xl: "3rem",
		},
		borderRadius: {
		  sm: "0.25rem",
		  md: "0.5rem",
		  lg: "1rem",
		  full: "9999px",
		},
		borderWidth: {
		  thin: "1px",
		  medium: "2px",
		  thick: "4px",
		},
		boxShadow: {
		  sm: "rgba(0, 0, 0, 0.2) 0px 0px 14px 0px",
		  md: "10px -10px 0px #b59662, 0 0 10px rgba(255, 255, 255, 1)",
		  lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
		},
		buttons: {
		  primary: {
			base: "font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform focus:outline-none",
			bg: "bg-primary",
			text: "text-white",
			hover: "hover:bg-primary-dark hover:scale-95 hover:shadow-inner",
			focus: "focus:ring-2 focus:ring-primary",
			disabled: "bg-primary-light cursor-not-allowed",
			border: "border border-primary",
			shadow: "shadow-lg",
		  },
		  secondary: {
			base: "font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform focus:outline-none",
			bg: "bg-secondary",
			text: "text-white",
			hover: "hover:bg-secondary-dark hover:scale-95 hover:shadow-inner",
			focus: "focus:ring-2 focus:ring-secondary",
			disabled: "bg-secondary-light cursor-not-allowed",
			border: "border border-secondary-dark",
			shadow: "shadow-lg",
		  },
		  accent: {
			base: "font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform focus:outline-none",
			bg: "bg-accent",
			text: "text-white",
			hover: "hover:bg-accent-dark hover:scale-95 hover:shadow-inner",
			focus: "focus:ring-2 focus:ring-accent",
			disabled: "bg-accent-light cursor-not-allowed",
			border: "border border-accent-dark",
			shadow: "shadow-lg",
		  },
		  outline: {
			base: "font-bold py-2 px-4 rounded-md transition-all duration-200 ease-in-out transform focus:outline-none",
			bg: "bg-transparent",
			text: "text-primary",
			hover: "hover:bg-primary hover:scale-95 hover:shadow-inner",
			focus: "focus:ring-2 focus:ring-primary",
			disabled: "bg-primary cursor-not-allowed",
			border: "border-2 border-primary",
			shadow: "shadow-lg",
		  },
		},
		links: {
		  default: {
			base: "underline font-medium text-primary",
			hover: "hover:text-primary-dark",
			focus: "focus:ring-2 focus:ring-primary",
		  },
		  accent: {
			base: "underline font-medium text-accent",
			hover: "hover:text-accent-dark",
			focus: "focus:ring-2 focus:ring-accent",
		  },
		  secondary: {
			base: "underline font-medium text-secondary",
			hover: "hover:text-secondary-dark",
			focus: "focus:ring-2 focus:ring-secondary",
		  },
		},
		gridTemplateColumns: {
		  "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
		  "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
		},
	  },
	},
	plugins: [
		require('tailwindcss-animated'),
		require('tailwind-clip-path')
	  ],
  };
  