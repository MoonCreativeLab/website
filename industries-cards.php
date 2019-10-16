<?php require 'array-industries.php'; ?>


<div class="row industries-row industries-row-xl">
<?php
foreach ($industries as $i => $row)
{
    $isFirst = ($i == 0);
    $isLast = ($i == $last);
	?>
	
	
	<div class="industries-block industries-block-<?php echo $i; ?>">
	<?php require 'animation-start.php'; ?>
		<div class="card-flip">
			<div class="flip">
				<div class="front">
					<div class="card">
					  <img class="card-img-top" src="library/images/svg/cards-<?php echo $row['id']; ?>.svg" alt="<?php echo $row['name']; ?>" />
					</div>
				</div>
				<div class="back">
					<div class="card">
					  <div class="card-block">
						<p class="card-text"><?php echo $row['desc']; ?></p>
					  </div>
					</div>
				</div>
			</div>
			<h4 class="card-title gilroy"><span><?php echo $row['name']; ?></span></h4>
		</div>
	</div></div><!-- /animation -->
	</div>
	<!-- End Card Flip -->
<?php } ?>
</div>





<div class="row industries-row industries-row-m">
<?php
foreach ($industries as $i => $row)
{
    $isFirst = ($i == 0);
    $isLast = ($i == $last);
	?>
	
	
	<div class="industries-block industries-block-<?php echo $i; ?>">
	<?php require 'animation-start.php'; ?>
		<a class="industries-m-link" data-toggle="modal" data-target="#industry-<?php echo $row['id']; ?>">
			<img class="card-img-top" src="library/images/svg/cards-<?php echo $row['id']; ?>.svg" alt="<?php echo $row['name']; ?>" />
			<h4 class="card-title gilroy"><span><?php echo $row['name']; ?></span></h4>
		</a>
	</div></div><!-- /animation -->
	</div>
	<!-- End Card Flip -->
<?php } ?>
</div>

