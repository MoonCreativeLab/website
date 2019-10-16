<?php require 'array-industries.php'; ?>
<?php
foreach ($industries as $i => $row)
{
    $isFirst = ($i == 0);
    $isLast = ($i == $last);
	?>
	
	<div class="modal modal-industry fade" id="industry-<?php echo $row['id']; ?>" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-lg">	
			<div class="modal-content">
				<button type="button" class="close hamburger--collapse is-active" data-dismiss="modal" aria-label="Close"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>		
		
				
				<img class="modal-i-img" src="library/images/svg/cards-<?php echo $row['id']; ?>.svg" alt="<?php echo $row['name']; ?>" />
				
					
					<div class="p-3">
					<h5 class="modal-i-title gilroy"><?php echo $row['name']; ?></h5>
					<p class="modal-i-desc"><?php echo $row['desc']; ?></p>
				</div>
			</div>
		</div>
	</div>

<?php } ?>
