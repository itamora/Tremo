function IntwebPage() {
	document.querySelector("body").innerHTML = `
		<div id="misc">
			<div id="miscStyle">
				<div>
					<link rel="stylesheet" type="text/css" href="THEME_BASIC.css" />
				</div>
				<div id="miscStyleLayoutTheme">
					<link rel="stylesheet" type="text/css" href="theme${configuration.themeLayout}.css" />
				</div>
				<div id="miscStyleColorTheme">
					<link rel="stylesheet" type="text/css" href="theme${configuration.themeLayout}${configuration.themeColor}.css" />
				</div>
				<div id="miscStyleTransition">
					<link rel="stylesheet" type="text/css" href="transition.css" />
				</div>
			</div>
		</div>
		<div  class="body_content">
			<div onclick="deSelect()" class="wrapper-left"></div>
			<div class="wrapper">
				<nav class="nav"></nav>
				<main class="main"></main>
			</div>
			<div onclick="deSelect()" class="wrapper-right"></div>
		</div>
	`
}
IntwebPage()