<div class="clearfix logo-row">
	
	
<?php require 'array-portfolio.php'; ?>
<?php
foreach ($companies as $i => $row)
{
    $isFirst = ($i == 0);
    $isLast = ($i == $last);
	?>
	
	
	<div class="portfolio-logo logo-<?php echo $row['id']; ?>">
		<?php require 'animation-start.php'; ?>
		<div class="pl-cont">
			<img class="img-portfolio" alt="<?php echo $row['name']; ?>" src="library/images/partners/<?php echo $row['img']; ?>" />
		</div>
		</div></div><!-- /end animation -->
	</div>


<?php } ?>

	

</div>