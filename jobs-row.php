<div class="row jobs-row">

	<?php require 'array-jobs.php'; ?>
	<?php
	foreach ($jobs as $i => $row)
	{
		$isFirst = ($i == 0);
		$isLast = ($i == $last);
		?>
		
		
		<div class="jobs-block jobs-block-<?php echo $i; ?> col-md-4 my-2 mt-lg-5">
			<?php require 'animation-start.php'; ?>
			<div class="jb-inner">
				<div class="jb-text">	
					<h3 class="join-title"><?php echo $row['title']; ?></h3>
					<p class="join-p"><?php echo $row['desc']; ?></p>
				</div>
				<a class="jobs-m-link join-link" data-toggle="modal" data-target="#jobs-<?php echo $row['id']; ?>">Learn More</a>
			</div>
			</div></div><!-- /animation -->
		</div>
		<!-- End Card Flip -->
	<?php } ?>

	<div class="col-12">
	<?php require 'animation-start.php'; ?>
		<p class="slide-contact">Don’t feel like you match any of our job openings but still interested in joining our team? 
		<br />Please reach out to <a href="mailto:join@mooncreativelab.com">join@mooncreativelab.com</a></p>
	</div></div><!-- /animation -->
	</div>
</div>
