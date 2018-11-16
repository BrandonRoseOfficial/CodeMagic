		//Defining my variables
        var comAnswer, diff, diffAttempt, diffRange, diffHC, j = 0;
        var theme = ["#5bc66d", "#1a5570", "#f9f9f9", "#f4d742", "#fff8d8", "#33967a", "#c034d8", "#af1178", "#e8b0f2", "#e2a178", "#ed878d"];
		var userAttempt = 1;
        var guessHis = [];
		var guessField = document.getElementById('guessField');
		var userGuess = document.getElementById('userGuess');
		var hotCold = document.getElementById('hotCold');
		var check = document.getElementById('winOrLose');
		var scene = document.getElementById('mainMenu');
		var nxtScene = document.getElementById('diffSelect');
		var lives = document.getElementById('lives');
		var btwnNum = document.getElementById('btwnNum');
		var gameArea = document.getElementById('gameArea');
		
            //Menu Buttons Functionality
            function menuScrn() //Return To Menu Button
            {
               var x = document.getElementById('menuBtn').parentElement;
               x.style.display = "none";
                scene.style.display = "block";
            }
		    function playGame() //Move to Game Difficulty Screen Button
		    {
		        scene.style.display = "none";
		        nxtScene.style.display = "block";
		    }
		    function changeTheme() //Theme Change Button
		    {
                j++;
                document.body.style.backgroundColor = theme[j];
		    }
		    function credits() //Credits Button
		    {
		        scene.style.display = "none";
		        var credits = document.getElementById('credits');
		        credits.style.display = "block";
		    }
		    function loadGame()
		    {
		        nxtScene.style.display = "none";
		        gameArea.style.display = "block";
		    }

            //Various Game Difficulty Settings
		    function easy()
		    {
		        diff = 1;
		        diffAttempt = 5;
                diffRange = 11;
                diffHC = 2;
                btwnNum.innerHTML = "10";
                lives.innerHTML = "" + diffAttempt + "";
                genAnswer();
		    }
		    function medium()
		    {
		        nxtScene.style.display = "none";
		        gameArea.style.display = "block";
		        diff = 2;
		        diffAttempt = 3;
                diffRange = 51;
                diffHC = 10;
                btwnNum.innerHTML = "50";
                lives.innerHTML = "" + diffAttempt + "";
                genAnswer();
		    }
		    function hard()
		    {
		        nxtScene.style.display = "none";
		        gameArea.style.display = "block";
		        diff = 3;
		        diffAttempt = 2;
                diffRange = 101;
                diffHC = 20;
                btwnNum.innerHTML = "100";
                lives.innerHTML = "" + diffAttempt + "";
                genAnswer();
		    }

            //Game Functionality & Logic
			function genAnswer()
			{
				comAnswer = Math.floor(Math.random() * Math.floor(diffRange));
				return comAnswer;
			}
			function submitGuess()
			{
				if(userGuess.value == comAnswer)
				{
					check.innerHTML = "You Win!";
					document.getElementById('playAgain').style.display = "block";
				}
				else if(userAttempt == diffAttempt)
				{
                    check.innerHTML = "YOU LOSE!!!";
				}
                else if(userGuess.value >= diffRange)
                    {
                        check.innerHTML = "Please Enter A Guess Between 0 and " + diffRange;
                    }
				else if(comAnswer - userGuess.value >= -diffHC && comAnswer - userGuess.value <= diffHC)
				{
					hotCold.innerHTML = "<span style='color: red'>HOT</span>";
                    userAttempt++;
                    lives.innerHTML = "" + (diffAttempt - userAttempt + 1) + "";
                    check.innerHTML = "";
				}
				else
				{
					hotCold.innerHTML = "<span style='color: blue'>COLD</span>";
                    userAttempt++;
                    lives.innerHTML = "" + (diffAttempt - userAttempt + 1) + "";
                    check.innerHTML = "";
				}
			}
			function guessHistory()
			{
                guessHis.push(userGuess.value);
				for(var i = 0; i < 1; i++)
				{
					if(check.innerHTML === "YOU LOSE!!!")
					{
						 guessField.innerHTML += " " + "" + userGuess.value + "";
						document.getElementById('checkAnswer').style.display = "block";
						document.getElementById('playAgain').style.display = "block";
					}
					else if(check.innerHTML != "You Win")
					{
					   guessField.innerHTML += " " + "" + userGuess.value + "";
					}
				}
			}
			function checkAnswer()
			{
				check.innerHTML = "" + comAnswer + "";
			}

            //Replay/Reload Button
			function playAgain()
			{
				location.reload();
			}
			