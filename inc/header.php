<header>

<div class="row headerWrap">
		<div class="icon hover">
				<article data-job="icon">
				<a href="?page=home"><img class="col-2" id="logo" src="img/BT_logo.png" alt="BT Designs Logo"></a>
				</article>
		</div>
	
	<div id="navToggle">MENU</div>

	<ul id="topNav">
		<!-- <li>&nbsp;</li> -->
		<li <?php if($page == 'designPortfolio'){echo 'class="activePage"';} ?>><a href="?page=designPortfolio">Design Portfolio</a></li>
		<li <?php if($page == 'artwork'){echo 'class="activePage"';} ?>><a href="?page=artwork">Artwork</a></li>
		<li <?php if($page == 'resume'){echo 'class="activePage"';} ?>><a href="?page=resume">Resume</a></li>
		<li <?php if($page == 'aboutMe'){echo 'class="activePage"';} ?>><a href="?page=aboutMe">About Me</a></li>

	</ul>

</div>

</header>