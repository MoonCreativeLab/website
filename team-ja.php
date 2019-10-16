<?php require 'array-team-ja.php'; ?>


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
				<h5 class="team-name d-md-none"><p class="last-name ja"><?php echo $row['last']; ?></p><p class="first-name ja"><?php echo $row['first']; ?></p></h5>
				<h5 class="team-name d-none d-md-block"><p class="full-name ja"><?php echo $row['name']; ?></p></h5>
			</a>
		</div></div>
	</div>


<?php } ?>	

