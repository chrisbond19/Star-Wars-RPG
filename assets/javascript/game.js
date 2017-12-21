$(document).ready(function(){
	//Variables for the your character and enemy
	var chosenChar = false;
	var chosenEnemy = false;
	var yourHealth = 120;
	var enemyHealth = 120;
	var attackPower;
	var enemyAttack;
		//Make buttons from characters and lets you choose your character and enemy
		$('.available-character').click(function(){
			if(chosenChar == false){
			$(this).appendTo("#chosen");
			$(this).children('p.health').attr('id', 'value');
			$('p#yourTagline').hide();
			chosenChar = true;

		}
		else if(chosenEnemy == false) {
			$(this).appendTo("#enemy");
		 	$('#enemy').addClass('health');
		 	$(this).children('p.health').attr('id', 'enemyValue');
		 	$('p#enemyTagline').hide();
			$('#attack').html('<button type="button" class="btn btn-lg btn-danger">Attack</button>');
			chosenEnemy = true;
		}
		});
		//Gives attack button action
		$('#attack').click(function(){
			//You attack the enemy
    		attackPower = Math.floor((Math.random()*30)+1);
    		enemyHealth -= attackPower;
    		$('#enemyValue').html('<p>' + enemyHealth + '</p>');
    		//alert('You have attacked with '+ attackPower +' damage to your enemy! Your enemy now has '+ enemyHealth +' health left!')
			//Enemy attacks you
			enemyAttack = Math.floor((Math.random()*30)+1);
			yourHealth -= enemyAttack;
    		$('#value').html('<p>' + yourHealth + '</p>');
    		alert('The enemy attacked back '+ enemyAttack +' damage to your health! You now have '+ yourHealth +' health left!')
    		// Check if the health is 0 or less
    		if(enemyHealth <= 0){
    			
    			alert('You Win!');
    			chosenEnemy = false;
    		}
    		else if (yourHealth <= 0){
    			alert('You Lost!');
    			
    		}
		});

});