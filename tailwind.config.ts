const our_colors = {
	"abso-primary": "#3b82f6",
	"abso-secondary": "#fdba74",
}

module.exports = {
  plugins: [require("daisyui")],
	theme: {
		extend: {
			colors: our_colors
		}
	}
}
