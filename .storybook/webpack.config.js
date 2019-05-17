module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve("awesome-typescript-loader"),
				options: {
					configFileName: require("path").resolve(__dirname, "tsconfig.json")
				}
			}
		]
	});
	config.module.rules.push(
		// "sass" loader converts SCSS to CSS.
		{
			test: /\.scss$/,
			use: [
				{
					loader: "style-loader"
				},
				{
					loader: "css-loader"
				},
				{
					loader: "sass-loader"
				}
			]
		}
	);
	config.resolve.extensions.push(".ts", ".tsx", ".scss");
	return config;
};
