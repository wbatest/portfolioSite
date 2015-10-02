<header>

	<ul>

		<li><a href="?page=home">Logo</a></li>
		<li <?php if($page == 'designPortfolio'){echo 'class="activePage"';} ?>><a href="?page=designPortfolio">Design Portfolio</a></li>
		<li <?php if($page == 'artwork'){echo 'class="activePage"';} ?>><a href="?page=artwork">Artwork</a></li>
		<li <?php if($page == 'resume'){echo 'class="activePage"';} ?>><a href="?page=resume">Resume</a></li>
		<li <?php if($page == 'aboutMe'){echo 'class="activePage"';} ?>><a href="?page=aboutMe">About Me</a></li>

	</ul>

</header>