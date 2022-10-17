type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuizCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    console.log(answers);
  return (
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <div>
            <button disabled={userAnswer} onClick={callback}></button>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
