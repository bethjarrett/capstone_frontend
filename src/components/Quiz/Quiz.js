import React, { useState } from 'react';
import Panel from '../../components/Panel/Panel';

export default function Quiz() {
	const questions = [
		{
			questionText: 'Wearing a cashmere suit in high humidity.',
			answerOptions: [
				{ answerText: 'Absolutely', answerValue: 10 },
				{ answerText: 'Unsure', answerValue: 5  },
				{ answerText: 'No way', answerValue: 0  },
			],
		},
		{
			questionText: 'A watery Korean beer with a handmade Pabst Blue Ribbon label.',
			answerOptions: [
				{ answerText: 'Absolutely', answerValue: 0 },
				{ answerText: 'Unsure', answerValue: 5  },
				{ answerText: 'No way', answerValue: 10  },
			],
		},
		{
			questionText: 'Drinking beer out of a suspended funnel taped to a hose. ',
			answerOptions: [
				{ answerText: 'Absolutely', answerValue: 5 },
				{ answerText: 'Unsure', answerValue: 0  },
				{ answerText: 'No way', answerValue: 10  },
			],
		},
		{
			questionText: 'Noraebang (karaoke singing room) choice:',
			answerOptions: [
				{ answerText: 'Fancy', answerValue: 10 },
				{ answerText: 'The one with free ice cream', answerValue: 5  },
				{ answerText: 'Dingy', answerValue: 0  },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (answerValue) => {
		if (answerValue) {
			setScore(score + answerValue);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className="container">
			<div className="row">
		  	<Panel />
		  	<div className='col-sm-8 pt-5'>
				<h1>Events</h1>
				<span>Find the 2012-2013 theme party for you by answering some questions about your preferences.</span>
				<hr />
				<div class="card">
			{showScore ? (
				<div className='score-section'>
				{
					score <= "10"
					? <div className='card-body'><h4 className="card-title">Hipster or Homeless</h4>
					<p class="card-text"><em>Dress ambiguously hipster or homeless. Find out who can spot the difference!</em></p></div>
					: score <= "20"
					? <div className='card-body'><h5 className="card-title">Brotrash</h5>
					<p class="card-text"><em>I wanted to throw a party with a bro theme. That's really it. <br /> Also it's my last weekend of vacation. But mostly let's just make fun of bros.</em></p></div>
					: <div className='card-body'><h5 className="card-title">Dressed to Get Messed</h5>
					<p class="card-text"><em>DRESSED UP TO GET MESSED UP is what the polls, and my ultimate tie breaking abilities, have determined to be the theme. Come in your Sunday best and spill alcohol all over it.</em></p></div>
				}
				</div>
				) : (
				<>
				<div class="card-header">
					<span>Question {currentQuestion + 1}</span>/{questions.length}
				</div>
				<div className='card-body'><h5 className="card-title">How do you feel about ...</h5>{questions[currentQuestion].questionText}
				
				<div className='pt-2'>
					{questions[currentQuestion].answerOptions.map((answerOption) => (
					<button type="button" className='btn btn-primary mx-2' onClick={() => handleAnswerOptionClick(answerOption.answerValue)}>{answerOption.answerText}</button>
				))}
				</div></div>
				</>
			)}
		</div>
		</div>
		</div>
		</div>
	);
}