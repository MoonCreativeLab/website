<?php require 'array-team.php'; ?>


<?php
foreach ($members as $i => $row) {
    $isFirst = ($i == 0);
    $isLast = ($i == $last);
?>

	<div class="team-box">
		<?php require 'animation-start.php'; ?>
			<a data-toggle="modal" data-target="#<?php echo $row['id']; ?>">
				<div class="team-img-cont rounded-circle">
					<img class="img-fluid rounded-circle team-circle-img" alt="<?php echo $row['name']; ?>" src="library/images/team/<?php echo $row['id']; ?>/2.jpg" />
					<img class="img-fluid rounded-circle team-circle-img tci-2" alt="<?php echo $row['name']; ?>" src="library/images/team/<?php echo $row['id']; ?>/1.jpg" />
				</div>
				<h5 class="team-name sans-serif d-md-none gilroy"><p class="first-name"><?php echo $row['first']; ?></p><br /><p class="last-name"><?php echo $row['last']; ?></p></h5>
				<h5 class="team-name sans-serif d-none d-md-block gilroy"><p class="full-name"><?php echo $row['name']; ?></p></h5>
			</a>
		</div></div>
	</div>


<?php } ?>	

