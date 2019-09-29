

import React from 'react';
import "./index.scss"
function App() {

  return (
      <div class="frame">
  <div class="block basic">
		<div class="head">Basic</div>
		<div class="body">
			<div class="price">$5</div>
			<div class="month">per month</div>
			<div class="line line1"></div>
			<div class="line line2"></div>
			<div class="line line3"></div>
		</div>
	</div>
	
	<div class="block pro">
		<div class="head">Pro</div>
		<div class="body">
			<div class="price">$10</div>
			<div class="month">per month</div>
			<div class="line line1"></div>
			<div class="line line2"></div>
			<div class="line line3"></div>
		</div>
	</div>
	
	<div class="block premium">
		<div class="head">Premium</div>
		<div class="body">
			<div class="price">$20</div>
			<div class="month">per month</div>
			<div class="line line1"></div>
			<div class="line line2"></div>
			<div class="line line3"></div>
		</div>
	</div>
	
	<div class="prices">
		<div class="price first-price">
			<div class="left">5 users</div>
			<div class="right">100 Users</div>
			<div class="bar-wrapper">
				<div class="bar first"></div>
			</div>
		</div>
		<div class="price second-price">
			<div class="left">20 GB</div>
			<div class="right">200 GB</div>
			<div class="bar-wrapper">
				<div class="bar second"></div>
			</div>
		</div>
		<div class="price third-price">
			<div class="left">1 Project</div>
			<div class="right">50 Projects</div>
			<div class="bar-wrapper">
				<div class="bar third"></div>
			</div>
		</div>

	</div>
</div>
  )
}

export default App;