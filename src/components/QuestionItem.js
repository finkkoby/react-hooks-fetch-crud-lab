import React from "react";

function QuestionItem({ question, onDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

    function handleCorrectAnswerChange(e, question) {
      fetch(`http://localhost:4000/questions/${question.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'correctIndex': e.target.value
        })
      })
    }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => handleCorrectAnswerChange(e, question)}>{options}</select>
      </label>
      <button onClick={() => onDeleteClick(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
