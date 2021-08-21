{{!-- Edited for Manor Theme --}}

<nav class="header-menu-secondary-nav">

	<ul class="header-menu-level1">

		{{#each categories}}
			{{#if text}}
				<li {{#if categories}}data-toggle="categories-menu"{{/if}}>
					<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
					{{#if categories}}
					<ul class="header-menu-level-container">
						<li>
							<ul class="header-menu-level2">
								{{#each categories}}
								<li>
									<a class="{{class}}" {{objectToAtrributes this}}>
                                        {{#if thumbnailurl}}
										    <img src="{{resizeImage thumbnailurl 'thumbnail'}}" alt="{{name}}">
                                        {{/if}}
										<span>{{translate text}}</span>
									</a>
									{{#if categories}}
									<ul class="header-menu-level3">
										{{#each categories}}
										<li>
											<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
										</li>
										{{/each}}
									</ul>
									{{/if}}
								</li>
								{{/each}}
							</ul>
						</li>
					</ul>
					{{/if}}
				</li>
			{{/if}}
		{{/each}}
	</ul>

	<button class="header-menu-search-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
			<i class="header-menu-search-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" class="svg-search"><path class="svg-path-search" d="M330 370c-6 0-11.4-2.2-15.7-6.4l-63.7-63.7c-3.5-3.5-5.7-7.9-6.3-12.8 -22.3 14.4-47.5 21.8-75 21.8 -25.3 0-48.9-6.3-70.1-18.8 -21.1-12.4-38.1-29.4-50.5-50.5C36.3 218.3 30 194.7 30 169.4s6.3-48.9 18.8-70.1c12.4-21.1 29.4-38.1 50.5-50.5C120.5 36.3 144.1 30 169.4 30s48.9 6.3 70.1 18.8c21.1 12.4 38.1 29.4 50.5 50.5 12.5 21.2 18.8 44.7 18.8 70.1 0 27.5-7.3 52.6-21.8 75 4.8 0.6 9.2 2.7 12.8 6.3l63.8 63.7c4.2 4.2 6.4 9.6 6.4 15.7s-2.2 11.4-6.4 15.7l-17.9 17.8C341.5 367.8 336.1 370 330 370zM257.8 260v24.2c0 2.5 0.8 4.3 2.5 6l63.8 63.7c3.4 3.4 8.6 3.4 12 0l17.9-17.8c1.7-1.7 2.5-3.6 2.5-6s-0.8-4.3-2.5-6l-63.8-63.7c-1.7-1.7-3.6-2.5-6-2.5H260l8.6-11c17.6-22.5 26.6-48.5 26.6-77.4 0-22.9-5.7-44.1-16.9-63.2 -11.2-19.1-26.6-34.5-45.7-45.7 -38.1-22.5-88.3-22.5-126.3 0 -19.1 11.2-34.5 26.6-45.7 45.7 -11.2 19-16.9 40.3-16.9 63.2s5.7 44.1 16.9 63.2c11.2 19.1 26.6 34.5 45.7 45.7 19 11.2 40.3 16.9 63.2 16.9 28.9 0 54.9-8.9 77.4-26.6L257.8 260zM169.4 257.8c-16 0-31-3.9-44.5-11.7 -13.5-7.8-24.3-18.6-32.1-32.1C85 200.4 81 185.4 81 169.4s3.9-31 11.7-44.5c7.8-13.5 18.6-24.3 32.1-32.1 27-15.6 62-15.6 89 0 13.5 7.8 24.3 18.6 32.1 32.1 7.8 13.5 11.7 28.5 11.7 44.5s-3.9 31-11.7 44.5c-7.8 13.5-18.6 24.3-32.1 32.1C200.4 253.8 185.4 257.8 169.4 257.8zM169.4 94.6c-13.6 0-26.3 3.3-37.7 9.9 -11.4 6.6-20.6 15.7-27.1 27.1 -6.6 11.4-9.9 24.1-9.9 37.7s3.3 26.3 9.9 37.7c6.6 11.4 15.7 20.5 27.1 27.1 22.9 13.2 52.6 13.2 75.5 0 11.4-6.6 20.6-15.7 27.1-27.1 6.6-11.4 9.9-24.1 9.9-37.7s-3.3-26.3-9.9-37.7c-6.6-11.4-15.7-20.6-27.1-27.1C195.7 97.9 183 94.6 169.4 94.6z"/></svg>
			</i>
	</button>

	<div class="header-menu-search">
		<div class="header-site-search search-desktop" data-view="SiteSearch" data-type="SiteSearch"></div>
	</div>
</nav>




{{!----
Use the following context variables when customizing this template:

	categories (Array)
	showExtendedMenu (Boolean)
	showLanguages (Boolean)
	showCurrencies (Boolean)

----}}
