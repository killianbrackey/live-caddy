import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
			<div className="App">
			<nav class="navbar navbar-default navbar-fixed-top">
					<div class="container">
							<div class="navbar-header page-scroll">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
											<span class="sr-only">Weigation</span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
									</button>
									<a class="navbar-brand" href="#root">KB</a>
							</div>

							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<ul class="nav navbar-nav navbar-right">
											<li class="hidden">
													<a href="#root"> </a>
											</li>
											<li class="page-scroll">
													<a href="#portfolio">Companies</a>
											</li>
											<li class="page-scroll">
													<a href="#about">About</a>
											</li>
											<li class="page-scroll">
													<a href="#contact">Contact</a>
											</li>
									</ul>
							</div>
					</div>
			</nav>
			<header>
			<div class="container">
					<div class="row">
							<div class="col-lg-12">
									<img class="img-responsive logoPicture" type="svg+xml" src="img/myLogoSuit.svg" height="368" width="340" alt="KB"/>
									<div class="intro-text">
											<span class="name">Killian Brackey</span>
											<hr class="star-primary"></hr>
											<span class="skills text-center">Coffee Enthusiast, Software Engineer, Founder</span>
									</div>
							</div>
					</div>
			</div>
			<section id="portfolio">
					<div class="container">
							<div class="row">
									<div class="col-lg-12 text-center">
											<h2>Companies</h2>
											<hr class="star-primary"></hr>
											<div id="Sezzle">
											<a class="svg" href="https://sezzle.com">
														<img height="80" width="80" src="https://d34uoa9py2cgca.cloudfront.net/sezzle-credit-website-assets/brand-assets/Sezzle%20Logos/Sezzle%20White/Logomark%20White/white-logomark.png" alt="Sezzle"/>
											</a>
											<p class="sezzle-title">
													Sezzle
											</p>
									</div>
									<div id="Zzrot">
													 <a class="svg" href="https://github.com/ZZROTDesign">
															 <object type="image/svg+xml" data="images/ZZRotLogo.svg" height="60" width="60">
																	 <img src="images/ZZRotLogo.svg" alt="ZZROT"/>
															 </object>
													 </a>
													 <p>
															 ZZROT Design
													 </p>
											 </div>
										 </div>

										 </div>
					</div>
			</section>

			<section class="success" id="about">
					<div class="container">
							<div class="row">
									<div class="col-lg-12 text-center">
											<h2>About</h2>
											<hr class="star-primary"></hr>
									</div>
							</div>
							<div class="row text-center">
									<div class="col-lg-4 col-lg-offset-2">
											<p>I am a software engineer by trade with experience building products and a passion for learning and techonology</p>
									</div>
									<div class="col-lg-4">
											<p>I can generally be found drinking/making coffee or tucked in behind a terminal building.</p>
											<p>Automate && Elevate <span role="img" aria-label="rocket ship">🚀</span></p>
									</div>
							</div>
					</div>
			</section>

			<section id="contact">
					<div class="container">
							<div class="row">
									<div class="col-lg-12 text-center">
											<h2>Contact Me</h2>
											<hr class="star-primary"></hr>
											<p>Feel free to contact me by following any of my links below -- I look forward to hearing from you!</p>
									</div>
							</div>
					</div>
			</section>
			<footer class="text-center">
					<div class="footer-above">
							<div class="container">
									<div class="row">
											<div class="footer-col col-md-4">
													<h3>Location</h3>
													<p>Minneapolis,<br/>Minnesota</p>
											</div>
											<div class="footer-col col-md-3">
													<h3>Around the Web</h3>
														<ul class="list-inline">
																<li>
																	<a href="mailto:killianbrackey+killianbrackey.com@gmail.com" class="btn-social btn-outline"><i class="fa fa-fw fa-envelope"></i></a>
																</li>
																<li>
																		<a href="https://twitter.com/killianbrackey" class="btn-social btn-outline"><i class="fab fa-fw fa-twitter"></i></a>
																</li>
																<li>
																		<a href="https://www.linkedin.com/in/killian-brackey-070b9979
		" class="btn-social btn-outline"><i class="fab fa-fw fa-linkedin"></i></a>
																</li>
																<li>
																		<a href="https://github.com/killianbrackey" class="btn-social btn-outline"><i class="fab fa-github"></i></a>
																</li>
																<li>
																		<a href="https://www.facebook.com/killian.brackey" class="btn-social btn-outline"><i class="fab fa-fw fa-facebook"></i></a>
																</li>
														</ul>
											</div>
											<div class="footer-col col-md-4">
												<h3>Other Projects</h3>
												<a href="https://calc.killianbrackey.com"><p >Calculator</p></a>
												<a href="https://punchcard.killianbrackey.com">Punchcard (private)</a>
											</div>
									</div>
							</div>
					</div>
					<div class="footer-below">
							<div class="container">
									<div class="row">
											<div class="col-lg-12">
													Copyright &copy; Killian Brackey {new Date().getFullYear()}
											</div>
									</div>
							</div>
					</div>
			</footer>

			<div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
					<a class="btn btn-primary" href="#page-top">
							<i class="fab fa-chevron-up"></i>
					</a>
			</div>

	</header>
      </div>
    );
  }
}

export default App;
