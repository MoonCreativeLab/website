<?php require 'array-team-ja.php'; ?>
<?php
foreach ($members as $i => $row)
{
    $isFirst = ($i == 0);
    $isLast = ($i == $last);
	?>
	
	<div class="modal fade" id="<?php echo $row['id']; ?>" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-lg">	
			<div class="modal-content">
				<button type="button" class="close hamburger--collapse is-active" data-dismiss="modal" aria-label="Close"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>		
		
				<img class="modal-team-img d-md-none" alt="<?php echo $row['name']; ?>" src="library/images/team/<?php echo $row['id']; ?>/2.jpg" />
				<img class="modal-team-img d-none d-md-block" alt="<?php echo $row['name']; ?>" src="library/images/team/<?php echo $row['id']; ?>/3.jpg" />
				<div class="p-3">
					<h5 class="team-modal-name ja"><?php echo $row['name']; ?></h5>
					<p class="team-modal-bio ja"><?php echo $row['desc']; ?></p>
				</div>
			</div>
		</div>
	</div>

<?php } ?>
