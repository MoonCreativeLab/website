<div class="row jobs-row">

	<?php require 'array-jobs-ja.php'; ?>
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
					<p class="join-p ja"><?php echo $row['desc']; ?></p>
				</div>
				<a class="jobs-m-link join-link" data-toggle="modal" data-target="#jobs-<?php echo $row['id']; ?>">Learn More</a>
			</div>
			</div></div><!-- /animation -->
		</div>
		<!-- End Card Flip -->
	<?php } ?>

	<div class="col-12 ja">
	<?php require 'animation-start.php'; ?>

    <p class=“slide-contact ja”>
      募集中の職種にあなたとフィットするポジションがなくとも、Moonに興味のある方はぜひ
      <span class=“md-br”></span>

      <a href=“https://boards.greenhouse.io/moon“>
        こちら
      </a>

      よりご連絡ください。
    </p>

	</div></div><!-- /animation -->
	</div>
</div>
